import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../db/firebase';
import useFetchPet from '../utils/useFetchPet';

const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [petIds, setPetIds] = useState([]);
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetIds = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'pets'));
        const ids = querySnapshot.docs.map((doc) => doc.id);
        setPetIds(ids);
      } catch (e) {
        console.error('Error fetching document IDs: ', e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPetIds();

    const fetchAllPets = async () => {
      setLoading(true);
      try {
        const pets = await Promise.all(
          petIds.map(async (id) => {
            const docRef = doc(db, 'pets', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              return { id, ...docSnap.data() };
            } else {
              console.log('No such document!');
              return null;
            }
          })
        );
        setPetsData(pets.filter(pet => pet !== null));
      } catch (e) {
        console.error('Error fetching pet data: ', e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    if (petIds.length > 0) {
      fetchAllPets();
    }
  }, [petIds]);

  return (
    <PetContext.Provider value={{ petsData, loading, error }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => {
  return useContext(PetContext);
};
