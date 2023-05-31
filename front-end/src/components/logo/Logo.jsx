import "./Logo.css"
import {Link} from 'react-router-dom' 
function Logo() {
  return (
    <Link to='/' >

    <h1 className="logo">PocketJo</h1>
    </Link>
  )
}

export default Logo