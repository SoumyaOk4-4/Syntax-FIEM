import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBVt0QS6mD1-mQDJtRs4ARCDMzsNfrPn5s",
    authDomain: "syntax-63cf1.firebaseapp.com",
    projectId: "syntax-63cf1",
    storageBucket: "syntax-63cf1.firebasestorage.app",
    messagingSenderId: "743135978319",
    appId: "1:743135978319:web:4a77fe66ad7fcfaeac9b3a",
    measurementId: "G-E2PBX05RRC"
  };

  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);

  export const requestNotificationPermission = async () => {
    try {
      const token = await getToken(messaging, { vapidKey: "AdsmGJ91dolIkqTEKmbVdbeyolsPbayuHLw58CzTl0c" });
      console.log("FCM Token:", token);
      return token;
    } catch (error) {
      console.error("Error getting FCM token:", error);
    }
  };
  
  export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log("Message received:", payload);
        resolve(payload);
      });
    });