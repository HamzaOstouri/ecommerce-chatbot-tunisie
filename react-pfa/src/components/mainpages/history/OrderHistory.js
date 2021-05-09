import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/payment', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('/user/history', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-page">
            <h2>Historique</h2>

            {/* <h4>You have {history.length} ordered</h4> */}
            {isAdmin ? <h2>{history.length} les achats qui ont été validées </h2>:<h4>les produits Vous avez acheté {history.length} commande(s)</h4>}


            <table>
                <thead>
                    <tr>
                        {/* <th>Payment ID</th> */}
                        {/* <th>Date of Purchased</th> */}
                        <th>Id de payement</th>
                        <th>Date d'achat</th>
                        <th>Voir détails</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{items.paymentID}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td><Link to={`/history/${items._id}`}>View</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory
