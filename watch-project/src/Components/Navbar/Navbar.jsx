import axios from 'axios'
import './Navbar.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Navbar = () => {

    // const { id } = useParams()
    const [msg, setMsg,] = useState('')

    const [getPrdct, setProdct] = useState([])
    const [cartlength,setcartlength]=useState(0)
    const [getwish, setwish] = useState([])
    const [wishlength,setwishtlength]=useState(0)

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



      useEffect(() => {
        const getPrdctDetails = async () => {
          try {
            const res = await axios.get(`http://localhost:3003/wholewatch/getCartProduct/${Id}`);
            // console.log(res.data.length);
            setProdct(res.data);
    
            setcartlength(res.data.length)
            console.log(cartlength);
            console.log(getPrdct);
          } catch (error) {
            console.error('Error fetching product details:', error);
          }
        };
        if (Id) {
          getPrdctDetails()
        }
      }, [Id])

    
    
    
      useEffect(() => {
    
        const getPrdctDetails = async () => {
          const res = await axios.get(`http://localhost:3003/wholewatch/getWishlistProduct/${Id}`);
          setwishtlength(res.data.length)
          setwish(res.data);
          console.log(getwish);
    
        };
        if (Id) {
          getPrdctDetails()
        }
      }, [Id])








    return (
        <div>
            ///

            <div className="main-ind">
                <div className="main-sub-ind">

                    <div className="log-phone-ind">
                        <span><i className="fa fa-phone" aria-hidden="true" ></i></span>
                        <Link to={`/whishList/${Id}`} id='Linkkkkss'><span id='ind-num'>WISH</span>
                        </Link>
                        <div className="count-nav1">{wishlength}</div>
                    </div>

                    <div className="text-sub-ind">
                        <p></p>
                    </div>

                    <div className="log-cart-ind2">
                        <span><Link to={`/CartCustomer/${Id}`} id='Linkkkkss' > CART</Link> </span> 
                        <div className="count-nav2">{cartlength}</div>
                        <span>
                            {/* <Link to={'#'} id='Linkkkkss'>
                        <span id='log-ind-l'>JUST LOGINED</span></Link>  */}
                        <span className='reg'><Link to={'/CustomerReg'} id='Linkkkkss'><span id='log-ind-l'>LOGIN</span></Link>  OR REGISTER</span>
                         </span>
                    </div>

                </div>

            </div>











        </div>
    )
}

export default Navbar
