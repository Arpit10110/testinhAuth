import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Nav.css"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import { useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect,logout , isAuthenticated } = useAuth0();
  const {cartval} = useSelector(state=>state.first);
  function menuFun(){
    let menuBtn=document.querySelector(".menu");
    let main=document.querySelector(".main");
    menuBtn.style="display:none;"
    main.style="display:flex;"
  }
  function closefun(){
    if (window.innerWidth < 400) {
      let menuBtn=document.querySelector(".menu");
      let main=document.querySelector(".main");
      menuBtn.style="display:block;"
      main.style="display:none;"
    }
  }
  return (
    <nav className='navbar'>
        <Link to="/" className='logoName'>Redux</Link>
        <main className='main'>
        <img className='close'  onClick={closefun} src={close} alt="" />
            <Link onClick={closefun} className='nava'  to="/">Home</Link>
            <Link onClick={closefun} className='nava'  to="/Coin">Coins</Link>
            <Link className='nava' to="/" >Cart:{cartval}</Link>
            {
               isAuthenticated ? (<button className='navaBtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button> ):(<button className='navaBtn' onClick={() => loginWithRedirect()}>Log In</button>)
            }
        </main>
        <img onClick={menuFun}  className="menu" src={menu} alt="" />
    </nav>
  )
}

export default Navbar