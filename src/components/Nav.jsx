import React from 'react'
import '../Assets/css/Nav.css'

function Nav() {
  return (
    <div>
        
        <nav className="visible-sm visible-xs mobile-menu-container mobile-nav">
    <div className="menu-mobile-nav navbar-toggle">
        <span className="icon-bar"><i className="fa fa-bars" aria-hidden="true"></i></span>
    </div>
    <div id="cssmenu" className="animated">
        <div className="uni-icons-close"><i className="fa fa-times" aria-hidden="true"></i></div>
        <ul className="nav navbar-nav animated">
            <li className="has-sub"><a href="#">Home</a>
                <ul>
                    <li><a href="index-2.html" className='text-red-600'>Home 1</a></li>
                    <li><a href="01_02_home_2.html">Home 2</a></li>
                    <li><a href="01_03_home_3.html">Home 3</a></li>
                </ul>
            </li>
            <li className="has-sub"><a href='#'>Page</a>
                <ul>
                    <li><a href="02_01_about.html">About</a></li>
                    <li className="has-sub"><a href="#">doctor</a>
                        <ul>
                            <li><a href="02_02_doctor.html">Doctors </a></li>
                            <li><a href="02_03_doctor_details.html">Doctors Details</a></li>
                        </ul>
                    </li>
                    <li><a href="02_04_contact.html">Contact</a></li>
                    <li><a href="02_05_gallery.html">Gallery</a></li>
                </ul>
            </li>
            <li><a href="03_01_services.html">Services</a></li>
            <li className="has-sub"><a href="#">Departments</a>
                <ul>
                    <li><a href="04_01_departments.html">Departments</a></li>
                    <li><a href="04_02_single_department.html">Single Departments</a></li>
                </ul>
            </li>
            <li className="has-sub"><a href='#'>Blog</a>
                <ul>
                    <li><a href="05_01_blog_list.html">Blog list</a></li>
                    <li><a href="05_02_blog_grid.html">Blog Grid</a></li>
                    <li><a href="05_03_single_post.html">Single post</a></li>
                </ul>
            </li>
            <li className="has-sub"><a href='#'>shop</a>
                <ul>
                    <li><a href="06_01_shop.html">Shop</a></li>
                    <li><a href="06_02_single_product.html">Single Product</a></li>
                    <li><a href="06_03_cart.html">Cart</a></li>
                    <li><a href="06_04_checkout.html">Checkout</a></li>
                </ul>
            </li>
    
            <li><a href="02_04_contact.html">Contact</a></li>
        </ul>
        <div className="clearfix"></div>
    </div>
</nav>
    </div>
  )
}

export default Nav