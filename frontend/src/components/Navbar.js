import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/media/images/Group 3 (1).svg';

export default function Navbar() {
  const [pathname, setPathName] = useState("")

  useEffect(() => {
    setPathName(window.location.pathname)
  }, [])


  return (
    <div className=''>
      <div className='borderbottom mb-10 h-50px d-flex justifyy-content-aruond mb-1 '>
        <div className="col-6 d-flex align-items-center " >
            <div className="d-block d-md-none ml-3">همبرگر منو</div>
          <div className="ml-100 w-md-100 d-flex justify-content-between ">
          </div>
          <ul className='row d-none d-md-flex'>
            <Link to='/'> <li className={`${pathname === "/" ? "text-primary" : "text-secondary"}  mx-3 mt-5 listStryle cursor-pointer text-hover-primary`}>صفحه اصلی</li></Link>
            <Link to='/ContactUs'> <li className={`${pathname === "/ContactUs" ? "text-primary" : "text-secondary"}  mx-3 mt-5 listStryle cursor-pointer text-hover-primary`}>تماس با ما </li></Link>
            <li className='mx-3 mt-5 listStryle cursor-pointer text-hover-primary'>درباره ما</li>
            <li className='mx-3 mt-5 listStryle cursor-pointer text-hover-primary'>وبلاگ</li>
          </ul>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center h-100 ">
          <span className='borderbottom2 px-10 pb-5 mt-5 cursor-pointer text-hover-primary d-none d-md-flex'>ادرس خود را وارد کید</span>
          <span className='borderbottom2 px-10 pb-5 mt-5 px-10 cursor-pointer text-hover-primary d-none d-md-flex'>قوانین</span>
        </div>
      </div>
      <div className='row  d-flex justify-content-center'>
                    <div className='col-3 d-flex justify-content-center align-items-center p-3 d-none d-md-black'>
                        <img className='d-none d-md-flex' src={image1} alt="logo" />
                    </div>
                    <div className='col-6 bg-warning d-flex justify-content-center align-items-center p-3'>
                        <input type='text' value={"search"} />
                    </div>
                    <div className='col-3 d-flex justify-content-center p-10 align-items-center p-3'>
                        <button className='btn btn-outline-primary mx-1'><i className='fas fa-shopping-basket'></i></button>
                        <button className='btn btn-outline-primary mx-1'><i className='far fa-user'></i>ورود/ثبت نام</button>
                    </div>

                </div>

    </div>
  )
}
<span className={`mx-1`}>صفحه اصلی</span> 
