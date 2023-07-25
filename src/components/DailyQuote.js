import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from './../firebase.js';

export default function DailyQuote() {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        // Get the total number of documents in the "fitnessQuotes" collection
        const collectionRef = collection(db, 'fitnessQuotes');
        const queryRef = query(collectionRef, orderBy('ID'), limit(6));
        const snapshot = await getDocs(queryRef);

        // Convert the snapshot into an array of documents
        const documents = snapshot.docs.map((doc) => doc.data());

        if (documents.length > 0) {
          // Generate a random index within the fetched documents range
          const randomIndex = Math.floor(Math.random() * documents.length);

          // Set the random quote in the state
          setQuote(documents[randomIndex].Quote);
        } else {
          setQuote('No quotes found.');
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuote('Error fetching quote.');
        setError(error);
      }
    };

    fetchRandomQuote();

    return () => {
      // Cleanup function to unsubscribe snapshot listener
      // (You don't need this because you are using getDocs instead of onSnapshot)
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Daily Quote</h1>
      <p>{quote}</p>
    </div>
  );
}
