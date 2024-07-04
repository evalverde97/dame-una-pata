import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../db/firebase';

const useFetchPet = (id) => {
  const [mascota, setMascota] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const docRef = doc(db, 'pets', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMascota(docSnap.data());
          setImageUrl(docSnap.data().imageUrl);
        } else {
          console.log('No such document!');
        }
      } catch (e) {
        console.error('Error fetching document: ', e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

  }, [id]);

  return { mascota, imageUrl, loading, error };
};

export default useFetchPet;
