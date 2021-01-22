import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCKC8qK5sMi3Kw7hKJrnnpLdaCuSoBPyp4',
	authDomain: 'clone-a58e8.firebaseapp.com',
	projectId: 'clone-a58e8',
	storageBucket: 'clone-a58e8.appspot.com',
	messagingSenderId: '292129031390',
	appId: '1:292129031390:web:0e632afe8d9c7c6e046e4f',
	measurementId: 'G-B018HHWF8Z',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
