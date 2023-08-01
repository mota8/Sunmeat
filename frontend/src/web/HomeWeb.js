import React from 'react'
import image1 from '../assets/media/images/Screenshot 2023-08-01 162256.png'
import image2 from '../assets/media/images/landscape.jpg'
import image3 from '../assets/media/images/landscape.jpg'
import image4 from '../assets/media/images/landscape (1).jpg'
import image5 from '../assets/media/images/portrait.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HomeWeb() {
    const ff = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <div className='container-fluid w-100 d-flex flex-column px-10'>
            <div className='row h-50px d-flex justifyy-content-aruond mb-1'>
                <div className="col-6 d-flex align-items-center h-100">
                    <ul className='row'>
                        <li className='mx-3 listStryle cursor-pointer text-hover-primary'>صفحه اصلی </li>
                        <li className='mx-3 listStryle cursor-pointer text-hover-primary'>تماس با ما </li>
                        <li className='mx-3 listStryle cursor-pointer text-hover-primary'>درباره ما</li>
                        <li className='mx-3 listStryle cursor-pointer text-hover-primary'>وبلاگ</li>
                    </ul>
                </div>
                <div className="col-6  d-flex justify-content-end align-items-center h-100">
                    <span className='px-10 cursor-pointer text-hover-primary'>ادرس خود را وارد کید</span>
                    <span className='px-10 cursor-pointer text-hover-primary'>قوانین</span>
                </div>
            </div>

            <div className='row  d-flex justify-content-center'>
                <div className='col-3 d-flex justify-content-center align-items-center p-3'>
                    <img className='d-flex' src={image1} alt="logo" />
                </div>
                <div className='col-6 bg-warning d-flex justify-content-center align-items-center p-3'>
                    <input type='text' value={"search"} />
                </div>
                <div className='col-3 d-flex justify-content-center p-10 align-items-center p-3'>
                    <button className='btn btn-outline-primary mx-1'><i className='fas fa-shopping-basket'></i></button>
                    <button className='btn btn-outline-primary mx-1'><i className='far fa-user'></i>ورود/ثبت نام</button>
                </div>

            </div>
            <div className='row my-3'>
                <div className='col-3 rounded  overflow-hidden'>
                    <img className='img-fluid w-100 h-100 rounded-xl' src={image5} alt="" />
                </div>
                <div className='col-6 pl-0'>
                    <img className="w-100 h-100 rounded-xl" src={image4} alt="" />
                </div>
                <div className='col-3 '>
                    <div className='row h-50  '>
                        <img src={image3} alt="" className="w-100 h-100 pb-3 rounded-xl" />
                    </div>
                    <div className='row h-50 '>
                        <img src={image3} alt="" className="w-100 h-100  rounded-xl" />

                    </div>
                </div>
            </div>

            <div className='row my-5 '>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={4.5}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='d-flex align-items-center h-100 w-100 justify-content-center'
                >
                    <SwiperSlide><div className='h-150px bg-white rounded-xl'></div></SwiperSlide>
                    <SwiperSlide><div className='h-150px bg-white rounded-xl'></div></SwiperSlide>
                    <SwiperSlide><div className='h-150px bg-white rounded-xl'></div></SwiperSlide>
                    <SwiperSlide><div className='h-150px bg-white rounded-xl'></div></SwiperSlide>
                    <SwiperSlide><div className='h-150px bg-white rounded-xl'></div></SwiperSlide>

                </Swiper>
            </div>

            <div className='row my-2 px-0'>
                <div className='col-4 py-0 pl-0'>
                    <img src={image2} alt="" className="w-100 rounded-xl" />
                </div>
                <div className='col-4 py-0'>
                    <img src={image2} alt="" className="w-100 rounded-xl" />
                </div>
                <div className='col-4 py-0 pr-0'>
                    <img src={image2} alt="" className="w-100 rounded-xl" />
                </div>

            </div>

            <div className='row my-2  '>
                <div className='  d-flex justify-content-between w-100'>
                    <span className='h2 font-weight-bolder p-5'>پیش فروش محصولات</span>
                    <span className='h4 p-5'><u>همه محصولات</u> </span>
                </div>

                <div className='w-100 d-flex'>
                    <div className='col-4 w-100 h-100 '>
                        <div className='m-auto position-relative' style={{ width: '90%', zIndex: 2 }}>
                            <img src={image2} alt="" className="w-100 rounded-lg" />
                        </div>
                        <div className=' w-100 h-400px bg-dark rounded-xl position-relative overflow-hidden' style={{ marginTop: '-140px', zIndex: 1 }}>

                            <div className=" w-100 d-flex justify-content-end position-absolute bottom-0" style={{ height: '60%' }}>
                                <div className="w-100">
                                    <div className='w-100 h-auto px-10 mb-5  d-flex justify-content-styart align-items-center'>
                                        <span className='pr-10 h4 pl-0 h5 text-primary' >به زودی</span>
                                        <span className=' text-success h4'>پیش فروش</span>
                                    </div>
                                    <div>

                                        <span className=' h2 w-100 px-8 pt-0 text-light'> عطر اونتوس با رایحه ای خنک</span>
                                        <p className="w-75 pt-6 h4 text-light px-8"> است که روزانه کاربران مختلف اقدام به درج نظرات در مورد عطر و ادکلن می کنند .</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-end ">
                                    <button className="btn btn-outline-primary mx-10 my-10">پیش فروش</button>
                                    <span className=""></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-4 w-100 h-100 '>
                        <div className='m-auto position-relative' style={{ width: '90%', zIndex: 2 }}>
                            <img src={image2} alt="" className="w-100 rounded-lg" />
                        </div>
                        <div className=' w-100 h-400px bg-dark rounded-xl position-relative overflow-hidden' style={{ marginTop: '-140px', zIndex: 1 }}>

                            <div className=" w-100 d-flex justify-content-end position-absolute bottom-0" style={{ height: '60%' }}>
                                <div className="w-100">
                                    <div className='w-100 h-auto px-10 mb-5  d-flex justify-content-styart align-items-center'>
                                        <span className='pr-10 h4 pl-0 h5 text-primary' >به زودی</span>
                                        <span className=' text-success h4'>پیش فروش</span>
                                    </div>
                                    <div>

                                        <span className=' h2 w-100 px-8 pt-0 text-light'> عطر اونتوس با رایحه ای خنک</span>
                                        <p className="w-75 pt-6 h4 text-light px-8"> است که روزانه کاربران مختلف اقدام به درج نظرات در مورد عطر و ادکلن می کنند .</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-end ">
                                    <button className="btn btn-outline-primary mx-10 my-10">پیش فروش</button>
                                    <span className=""></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 w-100 h-100 '>
                        <div className='m-auto position-relative' style={{ width: '90%', zIndex: 2 }}>
                            <img src={image2} alt="" className="w-100 rounded-lg" />
                        </div>
                        <div className=' w-100 h-400px bg-dark rounded-xl position-relative overflow-hidden' style={{ marginTop: '-140px', zIndex: 1 }}>

                            <div className=" w-100 d-flex justify-content-end position-absolute bottom-0" style={{ height: '60%' }}>
                                <div className="w-100">
                                    <div className='w-100 h-auto px-10 mb-5  d-flex justify-content-styart align-items-center'>
                                        <span className='pr-10 h4 pl-0 h5 text-primary' >به زودی</span>
                                        <span className=' text-success h4'>پیش فروش</span>
                                    </div>
                                    <div>

                                        <span className=' h2 w-100 px-8 pt-0 text-light'> عطر اونتوس با رایحه ای خنک</span>
                                        <p className="w-75 pt-6 h4 text-light px-8"> است که روزانه کاربران مختلف اقدام به درج نظرات در مورد عطر و ادکلن می کنند .</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-end ">
                                    <button className="btn btn-outline-primary mx-10 my-10">پیش فروش</button>
                                    <span className=""></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='row bg-danger my-5 h-100px'></div>
            <div className="border border-primary w-100 px-20">
                <span className="">محصولات تخفیف حراج </span>

                <div className='row h-auto'>
                    {
                        ff.map(x => {
                            return (
                                <div className='col-3 p-3'>
                                    <div className='h-200px bg-primary rounded-xl'></div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </div>
    )
}
