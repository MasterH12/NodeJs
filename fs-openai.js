const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// Configurar OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Asegúrate de tener tu API key en las variables de entorno
});

async function transcribirAudio(AudioFileName = "grabacion.m4a") {
    try {
        // Verificar que el archivo existe en la carpeta media
        const archivoAudio = path.join("media", AudioFileName);
        if (!fs.existsSync(archivoAudio)) {
            throw new Error(`El archivo ${archivoAudio} no existe`);
        }

        console.log(`Iniciando transcripción del archivo: ${archivoAudio}`);

        // Crear el stream del archivo de audio
        const audioStream = fs.createReadStream(archivoAudio);

        // Verificar que el stream se creó correctamente
        if (!audioStream) {
            throw new Error(`No se pudo crear el stream del archivo ${archivoAudio}`);
        }

        console.log(`Iniciando transcripción del archivo: ${archivoAudio}`);

        // Enviar a OpenAI Whisper para transcripción
        const transcripcion = await openai.audio.transcriptions.create({
            file: audioStream,
            model: "whisper-1",
            language: "es", // Especificar español
        });

        // Verificar que se recibió una transcripción válida
        if (!transcripcion || !transcripcion.text) {
            throw new Error("No se recibió una transcripción válida de OpenAI");
        }

        console.log("Transcripción completada:");
        console.log(transcripcion.text);

        // Guardar la transcripción en un archivo de texto
        const archivoTranscripcion = "transcripcion.txt";
        try {
            fs.writeFileSync(archivoTranscripcion, transcripcion.text, 'utf8');
            console.log(`Transcripción guardada en: ${archivoTranscripcion}`);
        } catch (writeError) {
            throw new Error(`Error al guardar la transcripción: ${writeError.message}`);
        }

    } catch (error) {
        console.error("Error durante la transcripción:");
        console.error("Tipo de error:", error.constructor.name);
        console.error("Mensaje:", error.message);

        if (error.response) {
            console.error("Código de estado HTTP:", error.response.status);
            console.error("Datos de respuesta:", error.response.data);
        }

        if (error.code) {
            console.error("Código de error:", error.code);
        }

        console.error("Stack trace completo:", error.stack);

        // Re-lanzar el error si es necesario para debugging
        // throw error;
    }
}

// Ejecutar la función
transcribirAudio("grabacion.m4a");