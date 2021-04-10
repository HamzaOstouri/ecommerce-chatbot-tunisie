import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
import CrudAccounts from './gererCompte/CrudAccounts'
import Payment from './payment/Payment'
import Success from './result/Success'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

// import ChatbotApp from '../../chatbot2/ChatbotApp'
import ChatbotApp from './chatbot/ChatbotApp'

import {GlobalState} from '../../GlobalState'


const promise = loadStripe(
    // public api key >>>
    "pk_test_51HUL0QIjqzNcD5UHd4rlHYxCMQFw7pdy4mImAfaqPsJ9RWfBg7xWUluc77YMaI0ihsngPLnvG3QBDVsK11SfGl7e00WYaI9hMq"
  
    //  secret api key >>>
    // "sk_test_51HUL0QIjqzNcD5UHGyN0PVRjnmfUA8d22YliEb9vVdnJpW89lSwFiPiIvKUPP2RzXbjRcNfWAprK3cfA21ADazNM00SRlzhMSI"
  );

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/cart" exact component={Cart} />
            
            <Route path="/handle_accounts" exact component={isAdmin ? CrudAccounts : NotFound} />
            {/* <Route path="/payment" exact component={isLogged ? Payment : NotFound} /> */}


            {/* <Route path='/amazon' component={() => { 
                window.location.href = 'https://www.amazon.com'; 
                return null;
            }}/> */}
            <Route path="/payment">
                <Elements stripe={promise}>
                    <Payment />
                </Elements>
            </Route>
            <Route path="/chatbot" exact component={ChatbotApp} />
            <Route path="/success" exact component={Success} />
            {/* <Route path="/chatbot" exact component={ChatbotSimpleForm} /> */}

            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
