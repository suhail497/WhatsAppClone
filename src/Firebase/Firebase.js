import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB6s5S2FhKmKVmRvfkj4ve7cqjITrIcZvI",
    authDomain: "whatsapp-clone-3b15b.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-3b15b.firebaseio.com",
    projectId: "whatsapp-clone-3b15b",
    storageBucket: "whatsapp-clone-3b15b.appspot.com",
    messagingSenderId: "302120483068",
    appId: "1:302120483068:web:bb1c760ea887da668b3f79",
    measurementId: "G-4GLJ4VVTQS"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider }
export default db;
