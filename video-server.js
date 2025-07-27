const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MEDIA_DIR = 'media';

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    
    // Solo manejar solicitudes GET
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Método no permitido');
        return;
    }
    
    // Extraer el nombre del archivo de la URL
    const fileName = req.url.slice(1); // Remover el '/' inicial
    
    if (!fileName || !fileName.endsWith('.mp4')) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Solicita un archivo .mp4 válido. Ejemplo: http://localhost:3000/video.mp4');
        return;
    }
    
    // Construir la ruta completa del archivo
    const filePath = path.join(MEDIA_DIR, fileName);
    
    // Verificar que el archivo existe
    if (!fs.existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`Archivo no encontrado: ${fileName}`);
        return;
    }
    
    // Obtener información del archivo
    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    
    // Manejar solicitudes de rango (para streaming de video)
    const range = req.headers.range;
    
    if (range) {
        // Parsear el header Range
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = (end - start) + 1;
        
        // Crear stream para el rango específico
        const file = fs.createReadStream(filePath, { start, end });
        
        // Headers para respuesta parcial (206)
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        
        res.writeHead(206, head);
        file.pipe(res);
        
        console.log(`Enviando rango: ${start}-${end}/${fileSize} bytes`);
        
    } else {
        // Enviar archivo completo
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
            'Accept-Ranges': 'bytes'
        };
        
        res.writeHead(200, head);
        
        // Crear stream del archivo y enviarlo al cliente
        const fileStream = fs.createReadStream(filePath);
        
        fileStream.on('error', (err) => {
            console.error('Error leyendo archivo:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error interno del servidor');
        });
        
        fileStream.pipe(res);
        
        console.log(`Enviando archivo completo: ${fileName} (${fileSize} bytes)`);
    }
});

// Manejar errores del servidor
server.on('error', (err) => {
    console.error('Error del servidor:', err);
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor de video iniciado en http://localhost:${PORT}`);
    console.log(`Carpeta de medios: ${MEDIA_DIR}`);
    console.log('Ejemplo de uso: http://localhost:3000/tu-video.mp4');
});

// Manejar cierre graceful
process.on('SIGINT', () => {
    console.log('\nCerrando servidor...');
    server.close(() => {
        console.log('Servidor cerrado');
        process.exit(0);
    });
});