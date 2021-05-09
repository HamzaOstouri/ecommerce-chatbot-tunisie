import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
// import "react-datetime/css/react-datetime.css";
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './header.css';
import Clock from './Clock'


function Header() {
    // const [user, setUser] = useState({
    //     email: "hamzashadow47",
    //     password: "",
    //   });
    //   console.log( "user >>>", user);
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    // const [email, setEmail] = useState(state.userAPI.isAdmin)
    const [cart] = state.userAPI.cart
    // const [user] = state.userAPI.user
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }
   
    const adminRouter = () =>{
        return(
            <>
                {/* <li>hello {email}</li> */}
                <li><Link to="/create_product">Créer Produits</Link></li>
                <li><Link to="/category">Gérer Catégories</Link></li>
                <li><Link to="/handle_accounts">Gérer Comptes</Link></li>
                <li><Link to="/history">Historiques</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }
     
    const loggedRouter = () =>{
        return(
            <>       
                {/* <li><Link to="/payment">payement</Link></li> */}
                {/* <li>Hello {users}</li> */}
                <li><Link to="/history">Historique</Link></li>
                <li><Link to="/chatbot">🤖Buy with Chatbot</Link></li>
                <li><Link to="/template">Contact us</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    // var today = new Date();

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>
           

            <div className="left">
                <div>
                <Link to="/">
                    <img
                        className="logo1"
                        alt="e-commerce-logo"
                        src="http://www.star-dev.net/wp-content/uploads/2016/07/Logo-e-commerce-english.jpg"
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    />
                </Link>
                </div> 
                <div>
                <h2>
                    <Link to="/">{isAdmin ? 'Espace Admin' : "site #1 en Tunisie"}</Link>
                </h2>
                </div> 
            </div>

            <ul style={styleMenu}>
                <li><Link to="/">{isAdmin ? 'Voir Produits' : 'Home'}</Link></li>
                
                {/* {isAdmin && adminRouter()}
                {/* {isLogged && isAdmin ? adminRouter() :  <li><Link to="/" onClick={logoutUser}>Logout</Link></li>} */}

                {/* {
                    isLogged  ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
                }  */}

                {isLogged ? 
                    isAdmin ? adminRouter() : loggedRouter(): <li><Link to="/login">Login ✥ Register</Link></li>
                }
              
                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>          
            </ul>

            {
                isAdmin ? ''
                // isAdmin ? <div>Gérer les comptes</div> 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }    
            
            {/* <Datetime /> */}
            <Clock />

        </header>
    )
}

export default Header
