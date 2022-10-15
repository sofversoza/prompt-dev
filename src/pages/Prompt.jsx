import { useState, useEffect } from "react"
import { doc, getDoc, deleteDoc  } from "firebase/firestore"
import { IoOptions } from "react-icons/io5"
import { db } from "../firebase"
import { useDocument } from "../hooks/useDocument"
import { useParams, useNavigate } from "react-router-dom"
import { StyledSplit } from "../components/styled/StyledSplit"
import StyledHeader from "../components/styled/StyledHeader"
import "../styles/Prompt.css"
import Update from "./Update"

export default function Prompt() {
  const [updateDoc, setUpdateDoc] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const { document } = useDocument("prompts", id)

  const handleDelete = async () => {
    await deleteDoc(doc(db, "prompts", id))
    navigate("/prompts")
  }

  // const pageTitle = ""
  const pageDetails = "Lorem ipsum dolor sit amet, consectetur adip. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas ipsa laborum consectetur qui, temporibus distinctio! Officia, nisi quo quas illo voluptatibus blanditiis iusto cupiditate"

  return (
    <>
      <StyledHeader>
        {`Prompt — ${document && document.title}`}
        {pageDetails}
      </StyledHeader> 
      <StyledSplit>
        {updateDoc ? 
          <Update document={document} setUpdateDoc={setUpdateDoc} />
          : 
          <div className="promptCont">
            <div className="options">
              <div className="dropdown-cont">
                <h5><IoOptions className="option-icons" />OPTIONS</h5>
                <div className="dropdown-content">
                  <p onClick={() => setUpdateDoc(true)}>Edit prompt</p>
                  <p onClick={() => handleDelete(document)}>Delete prompt</p>
                </div>
              </div>
            </div>

            <div className="prompt-intro">
              <h2>{document && document.title}</h2>
              <p>Prompt by <span>{document && document.uid}</span></p>
              <p>Published on{" "} 
                <span>{document && document.created_at.toDate().toDateString()}</span>
              </p>
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
        }
      </StyledSplit>
    </>
  )
}
