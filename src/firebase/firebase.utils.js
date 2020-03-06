import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyCOaV0W16sBku98g13sY3NACJgOccfd-_Y',
	authDomain        : 'crown-db-99ece.firebaseapp.com',
	databaseURL       : 'https://crown-db-99ece.firebaseio.com',
	projectId         : 'crown-db-99ece',
	storageBucket     : 'crown-db-99ece.appspot.com',
	messagingSenderId : '174901166705',
	appId             : '1:174901166705:web:aa832099b9620b843b51d0',
	measurementId     : 'G-90PW6QNE5F'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
