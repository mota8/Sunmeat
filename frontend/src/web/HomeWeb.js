import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image1 from '../assets/media/images/Group 3 (1).svg';
import image2 from '../assets/media/images/landscape.jpg';
import image3 from '../assets/media/images/landscape.jpg';
import image4 from '../assets/media/images/landscape (1).jpg';
import image5 from '../assets/media/images/portrait.jpg';
import image6 from '../assets/media/images/baner.webp';
import image7 from '../assets/media/images/mobail.webp';
import image8 from '../assets/media/images/Rectangle 16.jpg';
import image9 from '../assets/media/images/Rectangle 17.jpg';
import image10 from '../assets/media/images/Rectangle 26.jpg';
import image11 from '../assets/media/images/Rectangle 27.jpg';
import image12 from '../assets/media/images/Rectangle 28.jpg';
import Content from '../components/Content';



export default function HomeWeb() {
    const ff = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


    return (
        <Content>
            <div className='container-fluid w-100 d-flex flex-column px-10'>
                <div className='row my-3'>
                    <div className='col-3 rounded  overflow-hidden'>
                        <img className='img-fluid w-100 h-100 rounded-xl' src={image5} alt="" />
                    </div>
                    <div className='col-6 pl-0'>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={1}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')} className='d-flex align-items-center h-100 w-100 justify-content-center'
                            onSwiper={(swiper) => console.log()}
                        >
                            <SwiperSlide><div className='h-100 bg-white rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 h-100 overflow-hidden' /></div></SwiperSlide>
                            <SwiperSlide><div className='h-100 bg-white rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 h-100 overflow-hidden' /></div></SwiperSlide>
                            <SwiperSlide><div className='h-100 bg-white rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 h-100 overflow-hidden' /></div></SwiperSlide>
                            <SwiperSlide><div className='h-100 bg-white rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 h-100 overflow-hidden' /></div></SwiperSlide>
                            <SwiperSlide><div className='h-100 bg-white rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 h-100 overflow-hidden' /></div></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='col-3 '>
                        <div className='row h-50  '>
                            <img src={image8} alt="" className="w-100 h-100 pb-3 rounded-xl" />
                        </div>
                        <div className='row h-50 '>
                            <img src={image9} alt="" className="w-100 h-100  rounded-xl" />

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
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                        <SwiperSlide><div className='h-150px bg-white rounded-xl overflow-hidden'><img src={image3} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
                    </Swiper>
                </div>

                <div className='row my-2 px-0'>
                    <div className='col-4 py-0 pl-0'>
                        <img src={image10} alt="" className="w-100 rounded-xl" />
                    </div>
                    <div className='col-4 py-0'>
                        <img src={image11} alt="" className="w-100 rounded-xl" />
                    </div>
                    <div className='col-4 py-0 pr-0'>
                        <img src={image12} alt="" className="w-100 rounded-xl" />
                    </div>

                </div>

                <div className='row my-2  '>
                    <div className='  d-flex justify-content-between w-100'>
                        <span className='h2 font-weight-bolder p-5w-100 '>پیش فروش محصولات</span>
                        <span className='h4  p-5'><u>همه محصولات</u> </span>
                    </div>

                    <div className='row d-flex'>
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

                <div className='row bg-danger my-10 mb-35 w-100 h-100px'>
                    <img src={image6} alt="" className="w-100 " />

                </div>
                <div className="borderbox w-100 px-20" >
                    <span className="h2 py-10 pb-20  d-flex justify-content-center ">محصولات تخفیف حراج </span>

                    <div className='row h-auto'>
                        {
                            ff.map(x => {
                                return (
                                    <Link to={`/ProductDetails/${x}`} className='borderboxtop col-3 p-3'>
                                        <div className='h-250px  rounded-xl '>
                                            <div className="w-100 h-75 justify-content-between ">
                                                <div className="d-flex justify-content-center align-items-center ">

                                                    <img src={image7} alt="" className=" w-50 h-75 mt-5" />
                                                </div>
                                            </div>
                                            <div className="w-100  d-flex align-items-center text-center   p-2">
                                                <span className="h4 w-100  bg-info rounded-xl m-0 text-light">15%</span>
                                                <span className="h3 w-100 m-0">۴۱۷,۵۰۰,۰۰۰</span>
                                                <span className="h4 w-100  bg-info rounded-xl m-0 text-light">تومان</span>
                                            </div>
                                            <div className="w-100 d-flex  text-center d-flex justify-content-center p-3">
                                                <span class="line-through text-center">۵۱۷,۴۰۰,۰۰۰</span>

                                            </div>
                                        </div>
                                    </Link>

                                )
                            })
                        }


                    </div>
                </div>
                <div className=" m-auto row d-flex justify-content-between w-100 h-60px pt-10">
                    <div className="col-2 w-100  mx-3  d-flex ">
                        <span className='text-dark h3'>دانستنی های سان میت</span>
                    </div>
                    <div className="col-2 w-100  mx-3">
                        <span className='text-dark h4 row d-flex justify-content-end '>دانستنی های بیشتر  </span>

                    </div>
                </div>
                <div className="row w-100 h-300px  m-auto pt-10 ">
                    <div className="col-3 w-100 h-300px ">
                        <div className="w-100 h-300px borderbox2">
                            <img src={image2} alt="" className="w-100 mb-3" />
                            <span className="h5 m-1">اموزش رفع خطاهای عدم باز سازی رمز عبور در  ورد پرس</span>
                            <div className=" bordertop w-100 my-9  d-flex justify-content-between align-items-center">
                                <span className="pt-1 px-3">sghhhh</span>
                                <span className="pt-1 px-3">lknknknk</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 w-100 h-300px ">
                        <div className="w-100  h-300px">
                            <div className="w-100  h-300px borderbox2">
                                <img src={image2} alt="" className="w-100 mb-3" />
                                <span className="h5 m-1">اموزش رفع خطاهای عدم باز سازی رمز عبور در  ورد پرس</span>
                                <div className=" bordertop w-100 my-9  d-flex justify-content-between align-items-center">
                                    <span className="pt-1 px-2">sghhhh</span>
                                    <span className="pt-1 px-2">lknknknk</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-3 w-100 h-300px ">
                        <div className="w-100 h-300px">
                            <div className="w-100 h-300px borderbox2">
                                <img src={image2} alt="" className="w-100 mb-3" />
                                <span className="h5 m-1 ">اموزش رفع خطاهای عدم باز سازی رمز عبور در  ورد پرس</span>
                                <div className=" bordertop w-100 my-9  d-flex justify-content-between align-items-center">
                                    <span className="pt-1 px-2">sghhhh</span>
                                    <span className="pt-1 px-2">lknknknk</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-3 w-100 h-300px ">
                        <div className="w-100  h-300px">
                            <div className="w-100  h-300px borderbox2">
                                <img src={image2} alt="" className="w-100 mb-3" />
                                <span className="h5 m-1 ">اموزش رفع خطاهای عدم باز سازی رمز عبور در  ورد پرس</span>
                                <div className=" bordertop w-100 my-9  d-flex justify-content-between align-items-center">
                                    <span className="pt-1 px-2">sghhhh</span>
                                    <span className="pt-1 px-2">lknknknk</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Content>
    )
}
