import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Navbar = () => {

    const { id } = useParams()
    const [msg, setMsg,] = useState('')
    const [Id,SetId] = useState("")/////my home name
    const value = JSON.parse(localStorage.getItem('customer_token'));



    const getName = async () => {
        const res = await axios.get("http://localhost:3003/wholewatch/CustHome", {
          headers: { Authorization: `Bearer ${value}` },
        })
        console.log(res.data);
        const data=res.data
        setMsg(data.msg)
        SetId(data.id)
       
      }
      useEffect(() => {
        getName()
      }, [])








    return (
        <div>

            <div className="main-ind">
                <div className="main-sub-ind">

                    <div className="log-phone-ind">
                        <span><i className="fa fa-phone" aria-hidden="true" ></i></span>
                        <Link to={`/whishList/${Id}`} id='Linkkkkss'><span id='ind-num'>WISH</span>
                        </Link>
                    </div>

                    <div className="text-sub-ind">
                        <p></p>
                    </div>

                    <div className="log-cart-ind">
                        <span><Link to={`/CartCustomer/${Id}`} id='Linkkkkss' > CART</Link> </span> 
                        <span><Link to={'#'} id='Linkkkkss'>
                        <span id='log-ind-l'>JUST LOGINED</span></Link> 
                         </span>
                    </div>

                </div>

            </div>











        </div>
    )
}

export default Navbar
