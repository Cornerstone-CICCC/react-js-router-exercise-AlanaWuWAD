import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate()
  const handleback = () => {
    navigate('/')
  }
  return (
    <div>
        <h2>About</h2>
        <p>this is about page contents!</p>
        <button onClick={handleback}>Back</button>
    </div>
  )
}

export default About