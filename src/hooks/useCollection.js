import { useEffect, useState } from "react";
import { database } from "../firebase/config";

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let reff = database.ref(collection);
    const unsub = reff.on(
      "value",
      (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          const key = doc.key;
          results.push({ ...doc.val(), id: key });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data");
      }
    );

    return () => unsub;
  }, [collection]);
  return { documents, error };
};
