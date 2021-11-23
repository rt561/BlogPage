import React, {useState, useEffect} from 'react'
import './Navbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
        
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
        <img src="images/blog.png"/>
      <li className="items">Blogging Tools</li>
      <li className="items">Google</li>
      <li className="items">internet Marketing</li>
      <li className="items">Our Services</li>
      <li className="items">Advertise with Us</li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn"></button>
    </nav>
  )
}
