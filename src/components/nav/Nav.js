import logo from "../../assets/GLOBE.svg"
import { NavLink, Link } from "react-router-dom"
import styles from "./Nav.module.css"
import { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"
import { Helmet } from "react-helmet"

export default function Nav({black}) {
  const [navbg, setNavbg] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { user } = useAuth()

  const handleClick = () => {
      setShowMenu(!showMenu)
      console.log(showMenu)
  }

  const handleNavbg = () => {
    if (window.scrollY >=  80) {
      setNavbg(true)  
    } else {
      setNavbg(false)
    }
  }

  const handleContact = () => {
    const contact = document.getElementById("contact");
    window.scrollTo({
      top:contact.offsetTop,
      behavior:"smooth"
    });
    console.log(contact)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavbg)
  }, [])

  return (
    <>
      <Helmet>
      <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        <script type="text/javascript">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
            }
          `}
        </script>
      </Helmet>
      <nav className={navbg? styles.container2 : styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="logo"/>
          <h2 style={black?{color: "black"}: {color: "inherit"}}>TRUSTSOLID</h2>
        </Link>

        <div id="google_translate_element"></div>

        {!(black) &&
          <div className={styles.menu}  style={showMenu ? {right:  "0"} : {right:  '-100%'}} onClick={handleClick}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/plans">Plans</NavLink>
          <a onClick={handleContact} href="#contact">Contact</a>

          {!user && <Link className={styles.getStarted} to="/signUp">Get Started</Link>}

          {user && <Link className={styles.getStarted} to="/dashboard">Dashboard</Link>}
        </div>
        }

      <div className={styles.hamburger} onClick={handleClick}>
          <span 
          className={showMenu ? styles.activeBar : styles.bar}
          style={navbg?{background: "black"}: {background: ""}}
          ></span>
          <span 
          className={showMenu ? styles.activeBar : styles.bar}
          style={navbg?{background: "black"}: {background: ""}}
          ></span>
          <span 
          className={showMenu ? styles.activeBar : styles.bar}
          style={navbg?{background: "black"}: {background: ""}}
          ></span>
      </div>
      </nav>
    </>
  )
}
