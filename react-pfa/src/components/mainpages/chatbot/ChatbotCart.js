import React from "react";
// import React, {useContext, useState, useEffect} from "react";

// import Chatbot from "react-chatbot-kit";
// import config from "./chatbot/config";
// import ActionProvider from "./chatbot/ActionProvider";
// import MessageParser from "./chatbot/MessageParser";
import validator from "validator";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import ProduitItem from "./ProduitItem";
// import Payment from "../payment/Payment";
import {Link} from 'react-router-dom';

function ChatbotCart() {

    const config = {
        marginLeft: "150px",
        width: "400px",
        height: "500px",
        floating: true  // ca pour pop up chatbot on click on the icon
    };

    // const theme = {
    // background: "#fbaed2",
    // // background: "#7ef9ff",
    // fontFamily: "Arial, Helvetica, sans-serif",
    // //   headerBgColor: "#00B2B2",
    // headerBgColor: "#FF66CC",
    // // headerBgColor: "#1034A6",
    // headerFontColor: "#fff",
    // headerFontSize: "25px",
    // //   botBubbleColor: "#00B2B2",
    // botBubbleColor: "#e0115f",
    // //   botFontColor: "#fff",
    // botFontColor: "white",
    // // userBubbleColor: "#363945",
    // userBubbleColor: "white",
    // //   userFontColor: "#4c4c4c",
    // userFontColor: "black",
    // };
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };

    // const theme = {
    //     background: "white",
    //     fontFamily: "Arial, Helvetica, sans-serif",
    //     headerBgColor: "#00B2B2",
    //     headerFontColor: "#fff",
    //     headerFontSize: "25px",
    //     botBubbleColor: "#00B2B2",
    //     botFontColor: "#fff",
    //     userBubbleColor: "#fff",
    //     userFontColor: "#4c4c4c"
    // };


    // var today = new Date();
    // const today = new Date("1997,10,01");

    // const style= {
    //     background: "black",
    //     width: "400px",
    // };
    const steps = [
            {
                id: "Greet",
                message: "Bonjour / Bonsoir merci d' acheter chez nous veuillez choisir votre m??thode de paiement",
                // trigger: "Ask Name"
                trigger: "show products on order"
            },
            {
            id: "show products on order",
            component: <ProduitItem />,
            // trigger: "choose payment method"
            trigger: "confirm question"
            },
            {
                id: "confirm question",
                message: "voil?? les produits que vous commandez vous ??tes sur de continuer au paiement ?",
                trigger: "yes or no"
            },
            {
                id: "yes or no",
                options: [
                    {
                        value: "oui",
                        label: "oui",
                        trigger: "choose payment method"
                    },
                    {
                        value: "non",
                        label: "no i changed my mind",
                        trigger: "done"
                    },
                ]

            },


            // {
            //     id: "Ask Name",
            //     message: "Please type your name?",
            //     trigger: "Waiting user input for name"
            // },
            // {
            //     id: "Waiting user input for name",
            //     // user: true,
            //     message: "hello user hamza nice to see you again",
            //     trigger: "get name"
            // },
            // {
            //     id: "get name",
            //     message: "hello {previousValue} please choose you payment method ",
            //     trigger: "choose payment method"
            // },
            {
                id: "choose payment method",
                options : [
                    {
                        value:"paypal",
                        label: "PayPal",
                        trigger: "continue with paypal"
                        // trigger: "demander date d expiration"
                    },
                    {
                        value:"master",
                        label: "MASTER CARD",
                        trigger: "continue with masterCard"
                    },
                    {
                        value:"e dinar",
                        label: "Carte E-Dinar",
                        trigger: "continue with e dinar"
                    },
                    {
                        value:"visa",
                        label: "Visa",
                        trigger: "continue with visa"
                    },
                
                ]
            },

            //  partie PayPal option
            {
                id:"continue with paypal",
                message: "please enter your paypal account informations",
                trigger: "entering paypal infos"
                
            },
            {
                id:"entering paypal infos",
                // message: "go",
                user: true,
                validator: (value) => {
                    if (isNaN(value) || value.length !==8) {
                        return 'value should be a number of 8'; 
                    }
                    return true;                
                },
                trigger: "demander code de 4 chiffres",
            },
            {
                id: "demander code de 4 chiffres",
                message: "please entrez votre code ?? 4 chiffres",
                trigger: "entrer code de 4 chiffres"
            },

            {
                id:"entrer code de 4 chiffres",
                user: true,
                validator: (value) => {
                    if (isNaN(value) || value.length !==4 ) {
                        return 'value should be a number of 4'; 
                    }
                    return true;                
                },
                trigger: "demander date d expiration"
            },
            {
                id: "demander date d expiration",
                message: "please entrez la date d'expiration de votre carte",
                trigger: "entrer date d expiration"
            },

            {
                id:"entrer date d expiration",
                user: true,
                validator : (value) => {
                    if (! validator.isDate(value) || value < "2021/04/01") { 
                        // if it's false enter a valid date ... replace with today
                        return "please enter a valid date !";
                      } 
                      return true;
                },
                trigger: "payment method"
            },

            // partie Master Card options
            {
                id:"continue with masterCard",
                message: "please enter your masterCard informations",
                trigger: "entering mastercard infos"
            },
            {
                id:"entering mastercard infos",
                user: true,
                validator: (value) => {
                    if (isNaN(value) || value.length !==8) {
                        return 'value should be a number of 8'; 
                    }
                    return true;                
                },
                trigger: "demander code de 4 chiffres mastercard",
            },
            {
                id: "demander code de 4 chiffres mastercard",
                message: "entrez le code secret compos?? de 4 chiffres SVP !",
                trigger: "entrer code de 4 chiffres mastercard"
            },
            {
                id:"entrer code de 4 chiffres mastercard",
                user: true,
                validator: (value) => {
                    if (isNaN(value) || value.length !==4) {
                        return 'code incorrect r??essayer svp'; 
                    }
                    return true;                
                },
                trigger: "checking",
            },
            {
                id:"checking",
                message: "thank you sir please wait to confirm your master card payment",
                trigger: "done"
            },
            // visa method
            {
                id:"continue with visa",
                message: "please enter your visa informations",
                trigger: "entering visa infos numero de carte (8 chiffres )"
            },
            {
                id:"entering visa infos numero de carte (8 chiffres )",
                user: true,
                validator: (value) => {
                    if (isNaN(value) || value.length !==8) {
                        return 'value should be a number of 8'; 
                    }
                    return true;                
                },
                trigger: "payment method",
            },
            // e dinar method

            {
                id:"continue with e dinar",
                message: "please enter your masterCard informations",
                trigger: "entering e dinar infos (8 chiffres)"
            },
            {
                id:"entering e dinar infos (8 chiffres)",
                user: true,
                validator: (value) => {
                    if (isNaN(value) || value.length !==8) {
                        return 'value should be a number of 8'; 
                    }
                    return true;                
                },
                // trigger: "demander code de 4 chiffres mastercard",
                trigger : 'payment method'
            },

            // end options 
            {
                id: 'payment method',
                component: (
                <button className="btn btn-danger"><Link path to="/payment">pay now</Link>
                </button>
                ),
                // component: <Payment />,
                trigger: 'done',

            },
            {
                id: 'done',
                message: 'Au revoir visitez nous ?? bientot on va avoir des nouveaux produits tr??s cool !',
                end: true,
            }
        ]

    return (
        <div className="wwe">
            <ThemeProvider theme={theme} className="chatbotApp">
                <ChatBot steps={steps} {...config} />
            </ThemeProvider>
        </div>
    );

}
export default ChatbotCart;