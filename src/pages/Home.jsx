import React from 'react'
import { useLocation,useNavigate} from 'react-router-dom'

const Home = () => {
    const location = useLocation();
  return (
    <div>Hello {location.state.id} and welcomet to home</div>
  )
}

export default Home