import { useState, useEffect } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"

// real time collection data. c is for collection.
export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    let ref = collection(db, c)
    // the 2nd argument (function) will fire everytime we get data changes in the collection, also fires once when we initially connect to it 
    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      })
      setDocuments(results)
    })

    // a clean up function so we can unsub from realtime db (onSnapshot) when a component unmounts
    return () => unsub()

    // c (for collection) as a dependency so when a collection changes it reruns the this whole function
  }, [c])

  // lastly we'll return documents so we can use it in diff components
  return { documents }
}