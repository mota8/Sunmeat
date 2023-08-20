import React from 'react';
import Content1 from './components/Content1';
import image1 from '../assets/media/images/user (1).png'
import image2 from '../assets/media/images/left-chevron.png'
import image3 from '../assets/media/images/down-arrow.png'
import image4 from '../assets/media/images/exit.png'
import image5 from '../assets/media/images/shopping-basket.png'
import image6 from '../assets/media/images/save-instagram.png'
import image7 from '../assets/media/images/bell.png'
import image8 from '../assets/media/images/user.png'
import image9 from '../assets/media/images/edit.png'
import { Link } from 'react-router-dom';


const Mypages = () => {
    return (
        <Content1>
            <div className='width80 m-auto bg-light'>
                <div className="row w-100  m-auto pt-5 ">
                    <div className="col-10 w-100 ">
                        <span className="font2rem">امیر حسین محمدی </span>
                    </div>
                    <div className="col-2  w-100 ">
                        <img src={image9} alt="" className="w-100" /> </div>
                </div>

                <div className="row w-100 h-150px  m-auto ">
                    <div className="col-4 w-100 h-150px  d-flex justify-cintent-center align-items-center">
                        <img src={image1} alt="" className="w-100" />
                    </div>
                    <div className="col-8 w-100 h-150px ">
                        <div className="mt-13 mb-10"><span className="h1">09390294704</span></div>
                        <span className="h1">شماره کاربر:</span>
                        <span className="h1">784545   </span>
                    </div>
                    <div className=" row m-auto w-100 bg-secondary h-400px  rounded-xl">
                        <div className="w-100  borderbottom7">
                            <Link to='/ShopingPages'>  <div className="text-dark w-100 py-3 pl-5"><span className="h2"><img src={image5} alt="" className=" mr-5" />سبد خرید<img src={image2} alt="" className="w-30px ml-10" /></span></div></Link>
                            <Link to='/Saveing'><div className="text-dark w-100 py-3 pl-5"><span className="h2"><img src={image6} alt="" className="mr-3" /> ذخیره شده ها<img src={image2} alt="" className="w-30px" /></span></div></Link>
                            <Link to='/Notifications'> <div className="text-dark w-100 py-3 pl-5"><span className="h2"><img src={image7} alt="" className="mr-3" /> اطلاعیه<img src={image2} alt="" className="w-30px" /></span></div></Link>
                            <Link to='/RecordFeedback'> <div className="text-dark w-100 py-3 pl-5"><span className="h2"><img src={image7} alt="" className="mr-3" />اطلاعات کاربری <img src={image2} alt="" className="w-30px" /></span></div></Link>

                        </div>
                        <div className="w-100 h-150px ">
                            <div className="text-dark w-100 py-3 pl-5"><span className="h2"> راهنمایی و شرایط<img src={image3} alt="" className="ml-2 w-30px" /></span></div>
                            <Link to='/abutSunmeat'>  <div className="text-dark w-100 py-3 pl-5"><span className="h2">درباره sunmeat </span></div></Link>
                            <Link to='/abutSunmeat'> <div className="text-dark w-100 py-3 pl-5"><span className="h2"> ثبت بازخورد</span></div></Link>
                            <div className="w-100 h-50px bg-secondary rounded-xl d-flex justify-content-around ">
                                <div className="w-100 h-40 "></div>
                                <div className="w-100 h-40  d-flex justify-content-end align-items-center">
                                    <span className="" >خروج از حساب<img src={image4} alt="" className="w-20px ml-3 mr-5" /> </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Content1>

    );
};

export default Mypages;