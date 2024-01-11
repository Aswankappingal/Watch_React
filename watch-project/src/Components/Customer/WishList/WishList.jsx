import React, { useEffect, useState } from 'react'
import './WishList.scss'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const WishList = () => {

    const { id } = useParams();
    const [getPrdct, setProdct] = useState([]);

    const getPrdctDetails = async () => {
        const res = await axios.get(`http://localhost:3003/wholewatch/getWishlistProduct/${id}`);
        setProdct(res.data);
        console.log(getPrdct);

    };
    useEffect(() => {
        getPrdctDetails();
    }, []);

    const delProduct = async (id) => {
        const userConfirmed = window.confirm("Are you sure you want to delete this product from the wishlist?");
        if (userConfirmed) {
            try {
                const res = await axios.delete(`http://localhost:3003/wholewatch/delWishListProduct/${id}`);
                console.log(res.data);
                getPrdctDetails();
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }
    };









    return (
        <div>




            <div className="main-ind">

                <div className="main-sub-ind">

                    <div className="log-phone-ind">
                        <span><i className="fa fa-phone" aria-hidden="true" ></i></span><Link to={`#`} id='Linkkkkss' ><span id='ind-num'>Now in WishList</span></Link>
                    </div>


                    <div className="text-sub-ind">
                        <p></p>
                    </div>

                    <div className="log-cart-ind">
                        <span><Link to={`CartCustomer`} id='Linkkkkss' > </Link> </span> <span><Link to={'#'} id='Linkkkkss'><span id='log-ind-l'></span></Link> Show Your Wish</span>
                    </div>


                </div>
            </div>

            <div className="back-w">
                <Link className='back-btn-w' to='/'>Back</Link>
            </div>


            <div className="Shopping-bag-main">




                <div className="shopping-bag-wish">
                    <span> <i className="fa fa-shopping-bag bag-only-wish" aria-hidden="true"></i> SHOPPING BAG</span>
                </div>


                {getPrdct.length === 0 ? (
                    <>

                        <p className="no-items-message">No items in the Wish</p>
                        <div className='shpDiv'><Link className='shp-now-btn' to='/'>Shop Now</Link></div>


                    </>
                ) : <>

                    {
                        getPrdct.map((data, index) => (
                            <div className="shopping-bag-wish-banner" key={index}>

                                <div className="shopping-bag-wish-banner-images">
                                    <img src={data.banner} alt="" />
                                </div>

                                <div className="shopping-bag-wish-banner-data">
                                    <p>Item No: NR6248NM01</p>
                                    <span id='price-wish'>{data.price}</span>  <span className='og-price' id='price-wishes'><strike>₹ 99999</strike></span>
                                    {/* <p>  <i className="fa fa-superpowers" aria-hidden="true"></i>  Add Gift Wrap</p> */}
                                    <p className='product_nmae'> <i className="fa fa-superpowers" aria-hidden="true" ></i>{data.productname}</p>
                                    <p>Dispatch By2nd Jan 2024</p>
                                    <div className="main-wish">
                                        <p> <i className="fa fa-heart-o" aria-hidden="true"></i> Come to Whish</p>
                                        <button className='btn-whish' onClick={() => delProduct(data._id)}> <i className="fa fa-trash-o" aria-hidden="true"></i> Delete From Bag</button>
                                    </div>


                                </div>
                            </div>

                        ))

                    }


                </>





                }















            </div>



        </div>
    )
}

export default WishList
