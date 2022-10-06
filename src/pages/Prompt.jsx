import { useState, useEffect } from "react"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
import { useParams } from "react-router-dom"
import StyledHeader from "../components/styled/StyledHeader"
import "../styles/Prompt.css"

export default function Prompt() {
  const [document, setDocument] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    let ref = doc(db, "prompts", id)
    getDoc(ref).then(doc => {
      const result = doc.data()
      setDocument(result)
      // console.log(result)
    })
  }, [])

  return (
    <>
      <StyledHeader>
        Prompt
      </StyledHeader>
      <div className="promptCont">
        <h2>{document && document.title}</h2>
        <p>{document && document.body}</p>
        {/* <div>
          {document && document.tags.map(tag => (
            <a key={tag}>{tag}</a>
          ))}
        </div> */}
      </div>
    </>
  )
}
