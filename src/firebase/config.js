// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDjbsnJz7yGj-d9mRDCfIcP7S1sRz0ViUE",
    authDomain: "upload-images-d1e7d.firebaseapp.com",
    projectId: "upload-images-d1e7d",
    storageBucket: "upload-images-d1e7d.appspot.com",
    messagingSenderId: "17953981150",
    appId: "1:17953981150:web:13c08fa73c408b5f16784f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadFiles = (file, nameFile) => {
    const storageRef = ref(storage, nameFile)
    uploadBytes(storageRef, file).then(snapShot => {
        console.log(snapShot)
    });
}