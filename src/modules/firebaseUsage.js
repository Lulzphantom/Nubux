import firebase from '../config/firebase';

const db = firebase.firestore();

// Create new user with firebase auth
const createUser = (displayName, email, password) => {

}

// signin function with firebase auth
const signInUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

// Get user cards by type with firebase firestore
const getUserCardsByType = async (cardType) => {
    const userId = firebase.auth().currentUser.uid;
    let cardData = await db.collection('users').doc(userId).collection(cardType).get()
        .then((result) => {
            if (!result.empty) {
                return result.docs.map((doc) => ({id: doc.id, ...doc.data()}) );
            } else {                
                console.error(cardType + ' data not found');
                return [];
            }            
        }).catch((err) => {
            console.error(err.message);
            return [];
        });

    return cardData;
}
//TODO
const deleteCard = async (cardType, cardId) => {
    const userId = firebase.auth().currentUser.uid;
    return await db.collection('users').doc(userId).collection(cardType).doc(cardId).delete()
        .then((result) => true)
        .catch((err) => {            
            console.error(err.message);
            return false;
        });
}

export { createUser, signInUser, getUserCardsByType, deleteCard };