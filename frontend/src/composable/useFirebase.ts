import {
	
	Auth,
	browserLocalPersistence,
	createUserWithEmailAndPassword,
	getAuth,
	setPersistence,
	signInWithEmailAndPassword,
	signOut,
	User,
} from 'firebase/auth';
import { initializeApp, FirebaseOptions, FirebaseApp } from 'firebase/app';
import '@/config';
import { readonly, ref, Ref } from 'vue';

declare global {
	interface Window {
		_env_: any;
	}
}

const firebaseConfig: FirebaseOptions = {
	apiKey: window._env_.apiKey,
	authDomain: window._env_.authDomain,
	projectId: window._env_.projectId,
	storageBucket: window._env_.storageBucket,
	messagingSenderId: window._env_.messagingSenderId,
	appId: window._env_.appId,
};
// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth();
setPersistence(auth, browserLocalPersistence);

let user: Ref<User | null> = ref(auth.currentUser);

export default () => {
	const restoreAuth = (): Promise<boolean> => {
		return new Promise((resolve, reject) => {
			try {
				auth.onAuthStateChanged(async (state) => {
					if (state) {
						user.value = state;
						resolve(true);
					}
				});
			} catch (error) {
				console.error(error);
				reject(false);
			}
		});
	};

	const createUser = (name: string, email: string, password: string) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				//Signed in -> succes -> let's add a record to our own database!
				user.value = userCredential.user;
			})
			.catch((error) => {
				console.log({ error });
			});
	};

	const login = (email: string, password: string): Promise<boolean> => {
		return new Promise((resolve, reject) => {
			signInWithEmailAndPassword(auth, email, password)
				.then(async (userCredential) => {
					console.log(await userCredential.user.getIdToken());

					user.value = userCredential.user;
					resolve(true);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					reject(error);
				});
		});
	};
	const logout = () => {
		return signOut(auth);
	};
	return {
		createUser,
		restoreAuth,
		login,
		logout,

		user: readonly(user),
	};
};
