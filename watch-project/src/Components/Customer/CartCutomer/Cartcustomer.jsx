import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './CartCustomer.scss'
import Navbar from '../../Navbar/Navbar'

const Cartcustomer = () => {

    const navigate=useNavigate()
    const {id}=useParams()
    const [totalPrice,setTotalPrice]=useState(0)
    const [getPrdct,setProdct]=useState([])


    const updateQuantity=async(id,e)=>{
      try {
        const newQuantity = parseInt(e);
        console.log(newQuantity);
        const res=await axios.patch(`http://localhost:3003/wholewatch/updateCartItem/${id}`,{quantity:newQuantity})
        console.log(res.data);
        getPrdctDetails();
      } catch (error) {
        console.log(error);
      }
    }



    const getPrdctDetails=async()=>{
      const res=await axios.get(` http://localhost:3003/wholewatch/getCartProduct/${id}`)
      // console.log(res.data);
      setProdct(res.data)
      // console.log(getPrdct);
    }
    useEffect(()=>{
      getPrdctDetails()
    },[])

  
    useEffect(() => {
      const totalPriceSum = getPrdct.reduce((sum, product) => sum + Number(product.price * product.quantity), 0);
      console.log(totalPriceSum);
      setTotalPrice(totalPriceSum);
    }, [getPrdct]);









  
    // const qty=(e,index)=>{
    //   const selectedQty=parseInt(e.target.value,10);
    //   const price=getPrdct[index].price;
  
    //   if(!isNaN(price)){
    //     const updatedPrice=price*selectedQty;
    //     console.log(updatedPrice);
    //     const updatedGetPrdct = [...getPrdct];
    //     console.log(getPrdct);
    //     updatedGetPrdct[index].price=updatedPrice
    //     setProdct(updatedGetPrdct)
    //   }
    // }




  
  
    const BuyNow = async (e) => {
      e.preventDefault();
      const userConfirmed = window.confirm("Are you sure you want to proceed to checkout and delete all products?");
      if (userConfirmed) {
        try {
          // Delete all products with the same cust_id
          await axios.delete(`http://localhost:3003/wholewatch/delAlltProduct/${id}`);
          alert("Order Placed");
          navigate("/")
        } catch (error) {
          console.error("Error deleting products:", error);
          // alert("An error occurred while deleting products");
        }
      }
    };
  
    const delCartPrdct = async (id) => {
      const userConfirmed = window.confirm("Are you sure you want to delete this product from the cart?");
      if (userConfirmed) {
        try {
          const res = await axios.delete(`http://localhost:3003/wholewatch/delCartProduct/${id}`);
          console.log(res.data);
          if (res) {
            alert("Product deleted");
          } else {
            alert("Product not deleted");
          }
          getPrdctDetails();
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      }
    };




  return (
    <div>
         <div className='cart-main'>
         <Navbar />
     
      <div className="back">
        <Link className='back-btn' to='/'>Back</Link>
      </div>
    
      <div><h3 className='main-heading'>Items In Cart</h3></div>
      <div className="display-ietm-main">
        
        <div className="display-ietm-left">
            
            <div className="ul"></div>
            {getPrdct.length === 0 ? (
                   <>
                    <p className="no-items-message">No items in the cart</p>
                    <div className='shpDiv'><Link className='shp-now-btn' to='/'>Shop Now</Link></div>
                   </>
                ) : (
                    <>
                        {getPrdct.map((data, index) => (
                            <div className="details-main" key={index}>
                                 <div className="details-image-section">
              <div className="image"><img src={data.banner} alt="" /></div>
            </div>
            <div className="details-details-section">
              <p className="item-name">{data.productname}</p>
              <p className="description">{data.Description}</p>
              <select name="" id=""  onChange={(e) =>{updateQuantity(data.prod_id,e.target.value)}}>
                <option value="1">Qty : 1</option>
                <option value="2">Qty : 2</option>
                <option value="3">Qty : 3</option>
                <option value="4">Qty : 4</option>
                <option value="5">Qty : 5</option>
                <option value="6">Qty : 6</option>
                <option value="7">Qty : 7</option>
                <option value="8">Qty : 8</option>
              </select>
            <div className='price-div'>
              <span className='price'>₹ {data.price*data.quantity}</span>
              <span className='og-price'><strike>₹ 99999</strike></span>
            </div>
           <button className='delBtn' onClick={()=>delCartPrdct(data._id)}>Delete</button>
            </div>
                            </div>
                        ))}
                    </>
                )}
        </div>
        <div className="line"></div>
        <div className="display-ietm-right">
          <p className='order-summery'>Order Summery</p>
          <table>
            <tr>
              <td className='td'>Total price (Inc GST)</td>
              <td>₹  {totalPrice ? totalPrice : 0}</td>
            </tr>
            {/* <tr>
              <td>Discount</td>
              <td className='discout-price'>₹ 200</td>
            </tr> */}
            <tr>
              <td>Estimated Delivery Fee</td>
              <td>₹ 99</td>
            </tr>
          </table>
          <div className="table-ul"></div>
          <table>
            <tr>
              <td className='total-text' id='td'>Total</td>
              <td className='total-text'>₹ {totalPrice ? totalPrice + 99: 99}</td>
            </tr>
          </table>

          {getPrdct==""?( <button>Your Cart Is Empty</button>):(<div className='removecart2'> <button onClick={BuyNow}>  Proceed To Checkout</button></div>)}

        </div>
      </div>
    </div>

      
    </div>
  )
}

export default Cartcustomer
