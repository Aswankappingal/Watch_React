import React, { useEffect, useState } from 'react'
import './Index.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

const Index = () => {

  const [id, setId] = useState("")
  const naviagate = useNavigate()
  // const navigateItself=useNavigate()
  const [msg, setMsg] = useState("")
  const value = JSON.parse(localStorage.getItem('customer_token'));

  const getName = async () => {
    const res = await axios.get("http://localhost:3003/wholewatch/CustHome", {
      headers: { Authorization: `Bearer ${value}` },
    })
    console.log(res.data);
    setMsg(res.data.msg)
    setId(res.data.id)
  }
  useEffect(() => {
    getName()
  }, [])
  console.log(id);


  const Logout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    window.location.reload()
    if (isConfirmed) {
      localStorage.clear();
      naviagate("/")

    }
  };

  const [getProducts, setProducts] = useState([])

  
  const getAllProducts = async () => {
    const res = await axios.get("http://localhost:3003/wholewatch/getAllProducts")
    // console.log(res.data);
    setProducts(res.data)
    console.log(getProducts);
  }
  useEffect(() => {
    getAllProducts()
  }, [])


  // const gotoCartOrWishList=(e)=>{
  //   e.preventDefault()
  //   if(msg.length===0){
  //     alert ("Please Login")
  //     navigateItself("/CustomerLogin")
  //   }
  // }






  return (
    <div>

      <div className="main-ind">
        {/* <div className="main-sub-ind">

          <div className="log-phone-ind">
            <span><i className="fa fa-phone" aria-hidden="true" ></i></span><Link to={`/whishList/${id}`}  id='Linkkkkss'><span id='ind-num'>WISH</span></Link>
          </div>

          <div className="text-sub-ind">
            <p></p>
          </div>

          <div className="log-cart-ind">
            <span><Link to={`CartCustomer/${id}`} id='Linkkkkss' > CART</Link> </span> <span><Link to={'/CustomerReg'} id='Linkkkkss'><span id='log-ind-l'>LOGIN</span></Link>  OR REGISTER</span>
          </div>

        </div> */}

      <Navbar />

      </div>


    



      <div className="center-ind">
        <img src="../../../public/BACK.avif" alt="" />
      </div>

      <div className="container-fluid">
        <nav className="navbar-id-color navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-main-ind" id="navbarNav">

              <div>
                <a className="nav-link active" aria-current="page" href="#" id="change-section"><span id='color-nav-ind'>HOME</span></a>
              </div>

              <div>
                <a className="nav-link active" href="#"><span id='color-nav-ind2'>MEN</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span id='color-nav-ind2'>WOMEN</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span id='color-nav-ind2'>JEWELRY</span></a>
              </div>


              <div>
                <div><a className="nav-link active" href="#"><span id='color-nav-ind2'>LUXURY</span></a></div>
              </div>



              <div><a className="nav-link active" href="#"><span id='color-nav-ind2'>OFFERS</span></a></div>

              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search " />
              </form>


              <div> <a className="nav-link active" href="#"><span><i className="fa fa-search" aria-hidden="true"></i></span></a>
              </div>


            </div>
          </div>
        </nav>
      </div>


      <div className="HOME-IND">
        <span>HOME @ Collections &   Guess Collections </span>
        <div className='home-ind-2'>
          {msg ? (
            <>
              <Link className="nav-link mx-2 text-uppercase active" to='/' id="sign-ind"><i className="fa fa-user" aria-hidden="true"></i>   {msg}  <button className='logout-ind' onClick={Logout}>Logout</button></Link>

            </>
          ) : (
            <Link className="nav-link mx-2 text-uppercase active" to='/CustomerLogin' id="sign-ind">Sign in</Link>
          )}
        </div>
      </div>


      <div className="banner">


        <div className="mainbtn">








        </div>



      </div>



      <div className="main-ind-brown">

      </div>


      <div id="carouselExampleInterval" className="carousel slide caroooo" data-bs-ride="carousel">

        <div className="carousel-inner caro-part">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carosel-img">
              <img src="/Carousel-img-1.avif" className="d-block w-100" alt="..." />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carosel1-img">
              <img src="/carosel-img-2.avif" className="d-block w-100" alt="..." />
            </div>
          </div>


          <div className="carousel-item">
            <div className="carosel1-img">
              <img src="/carousel-img-3.webp" className="d-block w-100" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carosel-img">
              <img src="/carousel-img-4.webp" className="d-block w-100" alt="..." />
            </div>

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>


      </div>





      <div className='whole-data-and-img-sect'>
        <div className="ind-6images-full-section"><span>CATEGORIES</span></div>
        <div className="ind-6images-full-section-2"><span>Heritage Watches</span></div>

        <div className="ind-classic">
          {
            getProducts.filter((data) => data.category_name === 'Heritage')
              .map((data, index) => (
                <Link key={index} to={`/productDetailsCustomer/${data._id}`} className='Link-view-products-ind'>
                  <div className="ind-1st-image">
                    <img src={data.banner} alt="" />
                  </div>
                  <div className="prices-ind">
                    <div><p className='price-ind'>₹ {data.price}</p></div>
                    <div><strike><p className='og-price'>₹ 79988</p></strike></div>
                  </div>

                </Link>
              ))
          }

        </div>



        <div className="ind-6images-full-section-2"><span>Classical Watches</span></div>

        <div className="ind-classic">
          {
            getProducts.filter((data) => data.category_name === 'Classic')
              .map((data, index) => (
                <Link key={index} to={`/productDetailsCustomer/${data._id}`} className='Link-view-products-ind'>
                  <div className="ind-1st-image">
                    <img src={data.banner} alt="" />
                  </div>
                  <div className="prices-ind">
                    <div><p className='price-ind'>₹ {data.price}</p></div>
                    <div><strike><p className='og-price'>₹ 99988</p></strike></div>
                  </div>

                </Link>
              ))
          }

        </div>


        <div className="ind-6images-full-section-2"><span>Sport Watches</span></div>

        <div className="ind-classic">
          {
            getProducts.filter((data) => data.category_name === 'Sport')
              .map((data, index) => (
                <Link key={index} to={`/productDetailsCustomer/${data._id}`} className='Link-view-products-ind'>
                  <div className="ind-1st-image">
                    <img src={data.banner} alt="" />
                  </div>
                  <div className="prices-ind">
                    <div><p className='price-ind'>₹ {data.price}</p></div>
                    <div><strike><p className='og-price'>₹ 89988</p></strike></div>
                  </div>

                </Link>
              ))
          }

        </div>

        <div className="ind-6images-full-section-2"><span className='golden'>Golden Watches</span></div>

        <div className="ind-classic">
          {
            getProducts.filter((data) => data.category_name === 'Golden')
              .map((data, index) => (
                <Link key={index} to={`/productDetailsCustomer/${data._id}`} className='Link-view-products-ind'>
                  <div className="ind-1st-image">
                    <img src={data.banner} alt="" />
                  </div>
                  <div className="prices-ind">
                    <div className='pricer-ind'><p className='price-ind'>₹ {data.price}</p></div>
                    <div><strike><p className='og-price'>₹ 99988</p></strike></div>
                  </div>

                </Link>
              ))
          }

        </div>

      </div>
      <div className="banner-ind-tissot">

        <p id='banner-para-tissot'>PRX POWERMATIC 80 35MM</p>
        <button id='para-btn-discover'>Discover</button>

      </div>

      <div className="About-tissot-ind">
        <div className="About-tissot-ind-contents">
          <h5>REGISTER MY WATCH</h5>
          <p id='para-tissot'>You can now register your Tissot watches into your Tissot account. Sign up, add your watch to your collection and enjoy the full Tissot Experience. Want to personalize your watch with a compatible strap? Want to know about your warranty status? Want to know how to get the most of your watch thanks to your user guide? Want to access your past order and personal information? All you need is accessible in your account.</p>
          <button id='para-btn'>Register</button>
        </div>
        <div className="About-tissot-ind-img">
          <img src="/Tissot-about.webp" alt="" />
        </div>

      </div>


      <div className="About-tissot-ind">
        <div className="About-tissot-ind-contents">
          <h5>NBA</h5>
          <p id='para-tissot'>Of the four major American sports, basketball is the most followed, loved, practiced and inspiring of all. Countless children and adults play hoops, wear the clothes and dream about dunking across the globe. A major global brand, Tissot has been the official Timekeeper of the NBA since 2015. Following up on its commitment to ambassadors such as the 18-season NBA veteran Tony Parker or Golden State Warriors Klay Thompson, Tissot deeply believes in the positive team values of the 5 on 5 game, and in its universal appeal.</p>
        </div>
        <div className="About-tissot-ind-img">
          <img src="/NBA-TIssot.webp" alt="" />
        </div>

      </div>








      <div className="footer-main">
        <div className="footer-icons-main">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </div>
        <div className="footer-flex-main-contents">
          <div className="footer-first">
            <h3>ABOUT US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
          </div>
          <div className="footer-second">
            <h3>Newsletter</h3>
            <div><a href="">SUBSCRIBE</a></div>
          </div>
          <div className="footer-third">
            <h3>NEED HELP</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
          </div>
          <div className="footer-four">
            <h3>CONTACT US</h3>
            <div className="footer-four-for-margin">
              <div><i className="fa fa-map-marker" aria-hidden="true"></i><span><a href="">Gb road 123 london Uk</a></span>
              </div>
              <div><i className="fa fa-phone" aria-hidden="true"></i> <span><a href="">+01 12345678901</a></span></div>
              <div><i className="fa fa-envelope" aria-hidden="true"></i><span><a href="">demo@gmail.com</a></span></div>
            </div>
          </div>





        </div>

      </div>






    </div>
  )
}

export default Index
