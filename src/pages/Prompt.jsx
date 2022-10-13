import { useState, useEffect } from "react"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
import { useParams } from "react-router-dom"
import { FiEdit } from "react-icons/fi"
import { IoOptions } from "react-icons/io5"
import StyledHeader from "../components/styled/StyledHeader"
import { StyledSplit } from "../components/styled/StyledSplit"
import "../styles/Prompt.css"

export default function Prompt() {
  const [document, setDocument] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    let ref = doc(db, "prompts", id)
    getDoc(ref).then(doc => {
      const result = doc.data()
      setDocument(result)
    })
  }, [])

  // const pageTitle = ""
  const pageDetails = "Lorem ipsum dolor sit amet, consectetur adip. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas ipsa laborum consectetur qui, temporibus distinctio! Officia, nisi quo quas illo voluptatibus blanditiis iusto cupiditate"

  return (
    <>
      <StyledHeader>
        {`Prompt — ${document && document.title}`}
        {pageDetails}
      </StyledHeader> 
      <StyledSplit>
        <div className="promptCont">
          <div className="options">
            <IoOptions className="option-icons" />
            <h5>OPTIONS</h5>
          </div>

          <div className="prompt-intro">
            <h2>{document && document.title}</h2>
            <p>Prompt by <span>{document && document.uid}</span></p>
            <p>Published on{" "} 
              <span>{document && document.created_at.toDate().toDateString()}</span>
            </p>
            <p>Category: <span>Fiction</span></p>
          </div>

          <div className="prompt-body">
            <p>{document && document.body}</p>
            <p style={{ textAlign: "center", paddingTop: "40px" }}>· · ·</p>
          </div>

          <div className="prompt-deets">
            <p>Tags:</p>
            <div className="p-tags">
              {document && document.tags.map(tag => <a key={tag}>{tag}</a>)}
            </div>
          </div>
        </div>
      </StyledSplit>
    </>
  )
}
