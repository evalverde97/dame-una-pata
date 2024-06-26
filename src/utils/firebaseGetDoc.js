import { doc, getDoc } from 'firebase/firestore';

export async function fetchDoc (db, collection, documentId, setter ) {
    try {
      const docRef = doc(db, collection, documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setter(docSnap.data());
      } else {
        console.log('No such document!');
      }
    } catch (e) {
      console.error('Error fetching document: ', e);
    } 
  };

