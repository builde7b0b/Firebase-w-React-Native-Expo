/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Tesseract = require("tesseract.js");
const axios = require("axios");

admin.initializeApp();

const OPENAI_API_KEY = functions.config().openai.key;

exports.processImage = functions.https.onRequest(async (req, res) => {
  try {
    const {imageUrl} = req.body;

    if (!imageUrl) {
      return res.status(400).send({error: "Image URL is required"});
    }

    // Perform OCR on the image using Tesseract.js
    const result = await Tesseract.recognize(imageUrl, "eng", {
      logger: (m) => console.log(m),
    });

    const extractedText = result.data.text;

    // Form the prompt to send to OpenAI
    const prompt =
"Analyze the following travel itinerary and provide detailed " +
"travel information including hotels, " +
"ridesharing options, and more: " + extractedText;

    // Send the prompt to OpenAI
    const openaiResponse = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "gpt-4",
          prompt: prompt,
          max_tokens: 1500,
        },
        {
          headers: {
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        },
    );

    const travelReport = openaiResponse.data.choices[0].text;

    return res.status(200).send({travelReport});
  } catch (error) {
    console.error("Error processing image:", error);
    return res.status(500).send({error: "Failed to process image"});
  }
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
