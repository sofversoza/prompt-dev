import { useState } from "react"
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useParams } from "react-router-dom"

export default function Prompt() {
  // const [doc, setDoc] = useState(null)

  // const docRef = doc(db, "prompts", "mo1Cz5aCWl2jPBwclmky")

  // onSnapshot(docRef, (doc) => {
  //   let result = []
  //   console.log(doc.data(), doc.id)
  //   doc.forEach(d => {
  //     result.push({...doc.data(), id: doc.id})
  //   })
  //   setDoc(result)
  // })

  return (
    <div className="promptCont">
      single prompt
    </div>
  )
}
