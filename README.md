# PassportGPT

## Project Description

PassportGPT is an innovative mobile application that leverages AI technology to provide personalized travel assistance. Users can ask travel-related questions and receive AI-powered responses, making trip planning and navigation easier than ever.

## Key Technologies

- React Native
- Firebase (Cloud Functions, Hosting)
- OpenAI GPT-4
- Tesseract.js (OCR)

## Main Features

1. AI-powered travel assistance
2. Image processing for travel itineraries
3. User authentication and subscription system
4. Conversation starters menu
5. Responsive and user-friendly interface

## Demo

[Coming Soon]

## Repositories

- [Main Application Repository](https://github.com/builde7b0b/PassportGPT)
- [Firebase Functions Repository](https://github.com/builde7b0b/Firebase-w-React-Native-Expo)

## Challenges and Solutions

One of the main challenges was integrating OCR functionality to process travel itineraries. This was solved by using Tesseract.js, which allowed for efficient text extraction from images. The extracted text is then processed by the OpenAI GPT-4 model to generate detailed travel information.

Another challenge was securely managing API keys. This was addressed by using Firebase Config to store sensitive information, ensuring that no API keys were exposed in the codebase.

## My Role and Learnings

As the lead developer on this project, I was responsible for:

1. Designing and implementing the React Native frontend
2. Setting up Firebase Cloud Functions for backend processing
3. Integrating OpenAI's GPT-4 model for intelligent responses
4. Implementing OCR functionality using Tesseract.js

Through this project, I gained valuable experience in:

- Building full-stack mobile applications
- Working with AI and machine learning APIs
- Implementing secure authentication and subscription systems
- Optimizing cloud functions for performance and cost-efficiency

## Code Highlights

### Image Processing and AI Integration

The core functionality of PassportGPT is implemented in the Firebase Cloud Function `processImage`. This function handles OCR processing and interaction with the OpenAI API:
