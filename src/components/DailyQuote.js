import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from './../firebase.js';

export default function DailyQuote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {

        const collectionRef = collection(db, 'fitnessQuotes');
        const queryRef = query(collectionRef, orderBy('ID'), limit(7));
        const snapshot = await getDocs(queryRef);

        const documents = snapshot.docs.map((doc) => doc.data());

        if (documents.length > 0) {
          const randomIndex = Math.floor(Math.random() * documents.length);

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
