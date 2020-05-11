import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBpXpRS47GRopNRKQrC1vGI4h6cJqaEaw4',
  authDomain: 'twitter-clone-5044b.firebaseapp.com',
  databaseURL: 'https://twitter-clone-5044b.firebaseio.com',
  projectId: 'twitter-clone-5044b',
  storageBucket: 'twitter-clone-5044b.appspot.com',
  messagingSenderId: '1036330868211',
  appId: '1:1036330868211:web:4f63b973f06ddb2c1a0686',
  measurementId: 'G-935M34HFSH'
}

firebase.initializeApp(config)

export default firebase