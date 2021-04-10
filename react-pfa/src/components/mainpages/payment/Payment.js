// extension ES7 React/Redux...
// rafc : export const .. = () => {}
// rfce : import + function .. () {retur(<div></div>)}

import React, {useState, useEffect, useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import {CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import {CardElement} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {Link} from 'react-router-dom'

import "./payment.css"
function Payment() {
  const stripe = useStripe();
  const elements = useElements();


  const [error, setError] = useState(null);
  // const [disabled, setDisabled] = useState(true);
  const [setDisabled] = useState(true);

  const state = useContext(GlobalState)
  const [cart] = state.userAPI.cart
  // const [token] = state.token
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


  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    // setProcessing(true);

    const payload = await stripe
      .confirmCardPayment({
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      // .then(({ paymentIntent }) => {
      //   // paymentIntent = payment confirmation

      //   db.collection("users")
      //     .doc(user?.uid)
      //     .collection("orders")
      //     .doc(paymentIntent.id)
      //     .set({
      //       basket: basket,
      //       amount: paymentIntent.amount,
      //       created: paymentIntent.created,
      //     });

      //   setSucceeded(true);
      //   setError(null);
      //   setProcessing(false);

      //   dispatch({
      //     type: "EMPTY_BASKET",
      //   });

      //   history.replace("/orders");
      // });
  };

    return (
        
      <div className="payment">
        <div className="payment__container">
            <h1>
              Checkout Your (<Link to="/cart">{cart?.length} Products</Link>)
            </h1>

            {/* Payment section - delivery address */}
            <div className="payment__section">
              <div className="payment__title">
                <h3>Delivery Address</h3>
              </div>
              <div className="payment__address">
                {/* <p>{user?.email}</p> */}
                <p>hello hamza welcome back</p>
                <p>123 React Lane</p>
                <p>Mourouj 1, Tunis</p>
              </div>
            </div>
            <div className="payment__section">
              <div className="payment__title">
                <h3>Payment Method</h3>
              </div>
              <div className="payment__details">
                {/* Stripe magic will go */}

                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                  {/* here you find card informations and logo */}

                  <div className="payment__priceContainer">
                    <CurrencyFormat
                      renderText={(value) => <h3>Order Total: {total}</h3>}
                      decimalScale={2}
                      value = {total}
                      // value={getBasketTotal(basket)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                    {/* <button disabled={processing || disabled || succeeded}> */}
                    {/* <button>
                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button> */}

                  </div>


                  {/* Errors */}
                  {error && <div>{error}</div>}
                  <div>
                  <Link to="/success"> <button style={{color:"red"}} type="submit"><span>Processing</span></button></Link>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
        
    )
}

export default Payment
