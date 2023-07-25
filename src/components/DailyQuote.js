import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from './../firebase.js';

export default function DailyQuote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        // Get the total number of documents in the "fitnessQuotes" collection
        const collectionRef = collection(db, 'fitnessQuotes');
        const queryRef = query(collectionRef, orderBy('ID'), limit(7));
        const snapshot = await getDocs(queryRef);

        // Convert the snapshot into an array of documents
        const documents = snapshot.docs.map((doc) => doc.data());

        if (documents.length > 0) {
          // Generate a random index within the fetched documents range
          const randomIndex = Math.floor(Math.random() * documents.length);

          // Set the random quote and author in the state
          setQuote(documents[randomIndex].Quote);
          setAuthor(documents[randomIndex].Author);
        } else {
          setQuote('No quotes found.');
        }
      } catch (error) {
        setQuote('Error fetching quote.');
      }
    };

    fetchRandomQuote();

    return () => {

    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <hr />
      <p>{quote} - <em>{author}</em></p>
    </div>
  );
}
