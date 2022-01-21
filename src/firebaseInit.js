import { initializeApp } from "firebase/app";
import {
  getMessaging,
  onMessage,
  getToken as messGetToken,
} from "firebase/messaging";

import "firebase/messaging";
const publicKey =
  "BGsbw9V61so_7GdpGkxACbo3CHUkA9LNFF79gPmXWGBaWUiqvMmedMPiR_i_ljDnQsWD3QRPwa-yRAsYdXHM69g";
const firebaseConfig = {
  apiKey: "AIzaSyASzAJvo9zpDo8b_pqlbiFii-HDlMM423Q",

  authDomain: "pwa-push-notification-514af.firebaseapp.com",

  projectId: "pwa-push-notification-514af",

  storageBucket: "pwa-push-notification-514af.appspot.com",

  messagingSenderId: "127331867098",

  appId: "1:127331867098:web:c428e449a81c1264c148e3",
};

initializeApp(firebaseConfig);
const messaging = getMessaging();
export const getToken = async (setTokenFound) => {
  let currentToken = "";
  try {
    currentToken = await messGetToken(messaging, { vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token.", error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    console.log("onMessage", onMessage);
    onMessage(messaging, (payload) => {
      console.log("payload", payload);

      resolve(payload);
    });
  });
