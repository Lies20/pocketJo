import "./Logo.css"
import { Link } from "react-router-dom"

function Logo() {
  return (
    <div ><Link to="/"><img className="img-logo" alt="" src="./logoJo.png"/></Link></div>
  )
}

export default Logo