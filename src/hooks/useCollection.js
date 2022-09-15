import { useEffect, useState } from "react";
import { database } from "../firebase/config";

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let reff = database.ref(collection);
    const unsub = reff.on(
      "value",
      (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({ ...doc.val(), id: doc.id });
        });

        setDocuments(
          results.sort((a, b) => {
            if (a.moisture > b.moisture) {
              return 1;
            }
            if (a.moisture < b.moisture) {
              return -1;
            }
            return 0;
          })
        );
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
