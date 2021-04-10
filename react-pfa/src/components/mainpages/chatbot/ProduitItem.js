import React , {useContext} from "react";
import { GlobalState } from "../../../GlobalState";
import './ProduitItem.css'
function ProduitItem(){
   
        const state = useContext(GlobalState);
        // const [produitItem, setProduitItem] = state.userAPI.cart;
        const [produitItem] = state.userAPI.cart;

        
        if(produitItem.length === 0)    
            return <h1 style={{textAlign: "center", fontSize: "14px"}}>chariot vide</h1>
        
        return(
            <div className="produit-item"> 
                {
                    produitItem.map(product => (
                        <div className="detail-cart" key={product._id}>
                            <img src={product.images.url} alt="" />
                            
                            <div className="box-detail">
                                <h2>{product.title}</h2>
                                <h3>{product.price * product.quantity} dinars</h3>
                                <p>{product.description}</p>
                                {/* <p>{product.content}</p> */}
                            </div>
                        </div>
                    ))
                }  
        </div>
    );
}

export default ProduitItem;