// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBwwf1hD7ADNxeGpU2rceNK994HTS-AYz8",
  authDomain: "project-module02-d78b5.firebaseapp.com",
  projectId: "project-module02-d78b5",
  storageBucket: "project-module02-d78b5.appspot.com",
  messagingSenderId: "548638169868",
  appId: "1:548638169868:web:881bd8f6817e9014f10729",
};

// khởi  tạo firebase 
const app = initializeApp(firebaseConfig);
// tạo tham chiếu dịch vụ lưu trữ
// tạo tham chiếu để tham chiếu trong toàn bộ ứng dụng
const storage = getStorage(app);

// export ra bên ngoài để sử dụng
export { storage };