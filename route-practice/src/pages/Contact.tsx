import { useNavigate } from "react-router-dom"

const Contact = () => {
    const navigate = useNavigate()
    const handleback = () => {
        navigate('/')
    }

  return (
    <div>
        <h2>Contact</h2>
        <p>this is contact us.</p>
        <button onClick={handleback}>back</button>
    </div>
  )
}

export default Contact