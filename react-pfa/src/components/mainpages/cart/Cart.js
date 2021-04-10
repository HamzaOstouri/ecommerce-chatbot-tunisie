import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'
// import {useHistory} from "react-router-dom"
import ChatbotCart from '../chatbot/ChatbotCart'

// import {Button} from "react-bootstrap";

function Cart() {

    const state = useContext(GlobalState)
    // const history = useHistory();
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        if(window.confirm("Vous étes en train de supprimer un produit.. continuer ?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;

        await axios.post('/api/payment', {cart, paymentID, address}, {
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
        alert("produit ajouté avec succés !")
    }

    if(cart.length === 0) 
        return (<h1 style={{textAlign: "center", color:"red", fontSize: "30px", width: "auto"}}>
            Chariot vide commandez au moins un produit pour continuer !
            </h1>)


    return (
        
        <div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} alt="" />
                        
                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>{product.price * product.quantity} TND</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            
                            <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }
            
        
            <div className="total">
                <h3>Total: {total} TND</h3>
                
                {/* <Link to="/payment"> </Link> */}
                    <PaypalButton
                    total={total}
                    tranSuccess={tranSuccess} />
                               

                {/* <button onClick={() => history.push("/payment")}>
                    Passer à la caisse
                </button> */}

                {/* <button className="btn btn-primay" style={{backgroundColor:"blue", width: "120px", color: "white"}}><span>go pay</span></button> */}

            </div>
            <div className= "cart-chatbot">
                <ChatbotCart />  
            </div>
            
        </div>
    )
}

export default Cart
