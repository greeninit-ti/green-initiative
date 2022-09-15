import { useEffect, useState } from "react";
import { projectFirestore, database } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = database.ref(collection + "/" + id);
    const unsubscribe = ref.on(
      "value",
      (snapshot) => {
        if (snapshot) {
          setDocument({ ...snapshot.val(), id: id });
          setError(null);
        } else {
          setError("No such document exists");
        }
      },
      (err) => {
        console.log(err.message);
        setError("Failed to get document");
      }
    );

    return () => unsubscribe();
  }, [collection]);

  return { document, error };
};
