// app.config.js
import 'dotenv/config';

export default {
  expo: {
    name: "club-tenis-estadio-nacional-app",
    slug: "clubtenisestadionacionalapp",
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseDatabaseURL: process.env.FIREBASE_DATABASE_URL,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID
    }
  }
};