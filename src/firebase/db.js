import { db } from './firebase';

//User API

export const doCreateUser = (id, first_name, last_name, username, email ) => 
	db.ref(`users/${id}`).set({
		id,
		first_name,
		last_name,
		username,
		email
	});

export const onceGetUsers = () => 
	db.ref('users').once('value');