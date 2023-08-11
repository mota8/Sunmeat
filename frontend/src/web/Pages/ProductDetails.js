import React, { useEffect, useState } from 'react'
import Content from '../../components/Content'
import { useParams } from 'react-router-dom';
import image1 from '../../assets/media/images/Untitled.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import image3 from '../../assets/media/images/info-circle.svg'
import image2 from '../../assets/media/images/Group 74.png'
import image4 from '../../assets/media/images/Sunmeat.svg'
import image5 from '../../assets/media/images/element-1.svg'
import image6 from '../../assets/media/images/like-1.svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
export default function ProductDetails() {
    const [price, setPrice] = useState(2)
    const [number, setNumber] = useState(1)

    const data = useParams();
    useEffect(() => {

    }, []);

    const changeHandler = (action) => {
        if (action === "up") {
            setNumber(number + 1)
            setPrice(price * number)

        } else if (action === "down") {
            setNumber(number - 1)
        }
    }
    return (
        <Content>
            <div className='container-fluid m-auto pr-0'>

                <div className=" pl-0 pt-5 " style={{ marginRight: '540px' }}>
                    <span className="text-primary h4">پروتین / مرغ</span>
                </div>

                <div className="row w-100 ">

                    <div className="col-4 w-100 h-500px  d-flex justify-contr ent-center align-items-center ">
                        <div className="w-100 h-450px bg-light rounded-xl border border-bg-dark ">
                            <img src={image1} alt="" className="w-100 h-450px" />
                        </div>
                    </div>

                    <div className="col-5 w-100 h-500px p-5 pl-15">
                        <div className="mt-4 mb-6">
                            <span className="h1">مرغ منجمد {data.ProductId}</span>
                        </div>
                        <div>
                            <span className="h5  mr-4 text-primary">4/1</span>
                            <i className='h3 px-2 fas fa-star text-warning'></i>
                            <i className='h3 px-2 fas fa-star text-warning'></i>
                            <i className='h3 px-2 fas fa-star text-warning'></i>
                            <i className='h3 px-2 far fa-star text-warning'></i>
                            <i className='h3 px-2 far fa-star text-warning'></i>
                            <span className=" ml-2 text-primary">21دیدگاه</span>

                        </div>
                        <div>
                            <div className='w-100 h1 my-8'>توضیحات</div>
                            <div className='py-5 d-flex align-items-center'><i className='h6 text-dark mr-3 fa fa-circle'></i><span className='text-muted mx-2'>نام برند:</span><span>زیرک</span></div>
                            <div className='pb-5 d-flex align-items-center'><i className='h6 text-dark mr-3 fa fa-circle'></i><span className='text-muted m-2'>محصول:</span><span>مرغ</span></div>
                            <div className='d-flex align-items-center'><i className='h6 text-dark mr-3 fa fa-circle'></i><span className='text-muted mx-2'>طبقه بندی :</span><span>پروتئین، مرغ</span></div>
                        </div>
                        <div className="mt-10">
                            <span className="h1 pb-10">توضیحات</span>
                            <p className='pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, fugiat cupiditate? Esse facere expedita quae corrupti ducimus quaerat placeat quod, repellat perferendis libero officiis rerum assumenda facilis dolore enim sunt?</p>
                        </div>
                    </div>

                    <div className="col-3 w-100 h-500px p-10 ">
                        <div style={{ backgroundColor: "#f2f2f2", border: '1px solid #d9d9d9' }} className='rounded-xl p-5 h-100 w-100 position-relative overflow-hidden d-flex align-items-between flex-column'>
                            <div className='position-absolute top-0 right-0   text-warning'>
                                <img src={image2    } alt="" className="w-100" />
                            </div>
                            <div className='h-50px'><img src={image4} alt='sunmeat' /></div>
                            <div className='text-muted d-flex h-100 align-items-start justify-content-around flex-column'>
                                <div><i className='fa fa-circle mx-2'></i> نحوه ارسال</div>
                                <div><i className='fa fa-circle text-dark mx-2'></i>آماده سازی محصول</div>
                                <div><i className='fa fa-circle text-warning mx-2'> </i>تحویل محصول از طریق اسنپ</div>
                            </div>
                            <div className=' m-0 p-0 m-auto'>
                                <span className="h5  mr-4 text-primary">4/1</span>
                                <i className='h3 px-1 fas fa-star text-warning'></i>
                                <i className='h3 px-1 fas fa-star text-warning'></i>
                                <i className='h3 px-1 far fa-star text-warning'></i>
                                <i className='h3 px-1 far fa-star text-warning'></i>
                                <span className=" ml-2 text-primary">21دیدگاه</span>

                            </div>
                            <div className=' border border-bottom-0 border-left-0 border-right-0 border-dark d-flex justify-content-between w-100 align-items-center h-100'>
                                <div >
                                    <i class="">
                                        <img src={image3} alt="" className='w-100' />
                                    </i>
                                </div>
                                <div className='d-flex align-items-center h-100 justify-content-between '>
                                    <i onClick={e => changeHandler("up")} class="h2 text-muted far fa fa-arrow-circle-up"></i>
                                    <span className='mx-1 btn btn-dark'>{number}</span>
                                    <i onClick={e => changeHandler("down")} class="h2 text-muted far fa fa-arrow-circle-down"></i>

                                </div>
                                <div className='h3'>{price} تومان</div>
                            </div>
                            <div className=' bottom-0 mb-4 d-flex w-100 justify-content-center'>
                                <button className='btn btn-dark w-100 m-auto'>افزودن به سبد</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mr-13 rounded-xl bg-secondary p-10">
                    <div className=" pb-10 pl-0 ">
                        <span className="h1">محصولات مشابه</span>
                    </div>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={5}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')} className='d-flex align-items-center h-100 w-100 justify-content-center'
                        onSwiper={(swiper) => console.log()}
                    >
                        <SwiperSlide>
                            <div className=' borderLeftright w-100 h-400px '>
                                <div className="w-100 h-200px  d-flex justify-content-center align-items-center"> <img src={image1} alt="" className="w-200px h-195px rounded-xl" /></div>
                                <div className="w-100 h-200px  ">
                                    <div className=" py-5 w-100 d-flex justify-content-center flex-column align-items-center">
                                        <span className="h1 text-dark py-3">ماهی قزل الا</span>

                                        <div className="  w-100 d-flex justify-content-center">
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                        </div>
                                    </div>
                                    <div className="w-100 h-100px d-flex justify-content-betwen ">
                                        <div className=" w-50  d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-dark">1 کیلو</button>
                                        </div>
                                        <div className=" w-100   d-flex justify-content-center align-items-center">
                                            <span className="h2 text-dark"> 120.000 تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' borderLeftright w-100 h-400px '>
                                <div className="w-100 h-200px  d-flex justify-content-center align-items-center"> <img src={image1} alt="" className="w-200px h-195px rounded-xl" /></div>
                                <div className="w-100 h-200px  ">
                                    <div className=" py-5 w-100 d-flex justify-content-center flex-column align-items-center">
                                        <span className="h1 text-dark py-3">ماهی قزل الا</span>

                                        <div className="  w-100 d-flex justify-content-center">
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                        </div>
                                    </div>
                                    <div className="w-100 h-100px d-flex justify-content-betwen ">
                                        <div className=" w-50  d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-dark">1 کیلو</button>
                                        </div>
                                        <div className=" w-100   d-flex justify-content-center align-items-center">
                                            <span className="h2 text-dark"> 120.000 تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' borderLeftright w-100 h-400px '>
                                <div className="w-100 h-200px  d-flex justify-content-center align-items-center"> <img src={image1} alt="" className="w-200px h-195px rounded-xl" /></div>
                                <div className="w-100 h-200px  ">
                                    <div className=" py-5 w-100 d-flex justify-content-center flex-column align-items-center">
                                        <span className="h1 text-dark py-3">ماهی قزل الا</span>

                                        <div className="  w-100 d-flex justify-content-center">
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                        </div>
                                    </div>
                                    <div className="w-100 h-100px d-flex justify-content-betwen ">
                                        <div className=" w-50  d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-dark">1 کیلو</button>
                                        </div>
                                        <div className=" w-100   d-flex justify-content-center align-items-center">
                                            <span className="h2 text-dark"> 120.000 تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' borderLeftright w-100 h-400px '>
                                <div className="w-100 h-200px  d-flex justify-content-center align-items-center"> <img src={image1} alt="" className="w-200px h-195px rounded-xl" /></div>
                                <div className="w-100 h-200px  ">
                                    <div className=" py-5 w-100 d-flex justify-content-center flex-column align-items-center">
                                        <span className="h1 text-dark py-3">ماهی قزل الا</span>

                                        <div className="  w-100 d-flex justify-content-center">
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                        </div>
                                    </div>
                                    <div className="w-100 h-100px d-flex justify-content-betwen ">
                                        <div className=" w-50  d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-dark">1 کیلو</button>
                                        </div>
                                        <div className=" w-100   d-flex justify-content-center align-items-center">
                                            <span className="h2 text-dark"> 120.000 تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' borderLeftright w-100 h-400px '>
                                <div className="w-100 h-200px  d-flex justify-content-center align-items-center"> <img src={image1} alt="" className="w-200px h-195px rounded-xl" /></div>
                                <div className="w-100 h-200px  ">
                                    <div className=" py-5 w-100 d-flex justify-content-center flex-column align-items-center">
                                        <span className="h1 text-dark py-3">ماهی قزل الا</span>

                                        <div className="  w-100 d-flex justify-content-center">
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                        </div>
                                    </div>
                                    <div className="w-100 h-100px d-flex justify-content-betwen ">
                                        <div className=" w-50  d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-dark">1 کیلو</button>
                                        </div>
                                        <div className=" w-100   d-flex justify-content-center align-items-center">
                                            <span className="h2 text-dark"> 120.000 تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' borderLeftright w-100 h-400px '>
                                <div className="w-100 h-200px  d-flex justify-content-center align-items-center"> <img src={image1} alt="" className="w-200px h-195px rounded-xl" /></div>
                                <div className="w-100 h-200px  ">
                                    <div className=" py-5 w-100 d-flex justify-content-center flex-column align-items-center">
                                        <span className="h1 text-dark py-3">ماهی قزل الا</span>

                                        <div className="  w-100 d-flex justify-content-center">
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                        </div>
                                    </div>
                                    <div className="w-100 h-100px d-flex justify-content-betwen ">
                                        <div className=" w-50  d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-dark">1 کیلو</button>
                                        </div>
                                        <div className=" w-100   d-flex justify-content-center align-items-center">
                                            <span className="h2 text-dark"> 120.000 تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' borderLeftright w-100 h-400px '>
                                <div className="w-100 h-200px  d-flex justify-content-center align-items-center"> <img src={image1} alt="" className="w-200px h-195px rounded-xl" /></div>
                                <div className="w-100 h-200px  ">
                                    <div className=" py-5 w-100 d-flex justify-content-center flex-column align-items-center">
                                        <span className="h1 text-dark py-3">ماهی قزل الا</span>

                                        <div className="  w-100 d-flex justify-content-center">
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                        </div>
                                    </div>
                                    <div className="w-100 h-100px d-flex justify-content-betwen ">
                                        <div className=" w-50  d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-dark">1 کیلو</button>
                                        </div>
                                        <div className=" w-100   d-flex justify-content-center align-items-center">
                                            <span className="h2 text-dark"> 120.000 تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' borderLeftright w-100 h-400px '>
                                <div className="w-100 h-200px  d-flex justify-content-center align-items-center"> <img src={image1} alt="" className="w-200px h-195px rounded-xl" /></div>
                                <div className="w-100 h-200px  ">
                                    <div className=" py-5 w-100 d-flex justify-content-center flex-column align-items-center">
                                        <span className="h1 text-dark py-3">ماهی قزل الا</span>

                                        <div className="  w-100 d-flex justify-content-center">
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                        </div>
                                    </div>
                                    <div className="w-100 h-100px d-flex justify-content-betwen ">
                                        <div className=" w-50  d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-dark">1 کیلو</button>
                                        </div>
                                        <div className=" w-100   d-flex justify-content-center align-items-center">
                                            <span className="h2 text-dark"> 120.000 تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' borderLeftright w-100 h-400px '>
                                <div className="w-100 h-200px  d-flex justify-content-center align-items-center"> <img src={image1} alt="" className="w-200px h-195px rounded-xl" /></div>
                                <div className="w-100 h-200px  ">
                                    <div className=" py-5 w-100 d-flex justify-content-center flex-column align-items-center">
                                        <span className="h1 text-dark py-3">ماهی قزل الا</span>

                                        <div className="  w-100 d-flex justify-content-center">
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 fas fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                            <i className='mx-1 h3 px-1 far fa-star text-warning'></i>
                                        </div>
                                    </div>
                                    <div className="w-100 h-100px d-flex justify-content-betwen ">
                                        <div className=" w-50  d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-dark">1 کیلو</button>
                                        </div>
                                        <div className=" w-100   d-flex justify-content-center align-items-center">
                                            <span className="h2 text-dark"> 120.000 تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="row w-100 ">

                    <div className="col-3 w-100 h-auto borderLeftright px-10 ">
                        <div className="d-flex justify-content-center my-10">
                            <span className="h1 text-dark">امتیاز و دیدگاه کاربران</span>
                        </div>
                        <div className="d-flex justify-content-start ">
                            <span className="h2 text-dark"> 3 <span className="h4 text-muted">از 5 </span></span>
                        </div>
                        <div className="d-flex justify-content-start">
                            <i className='h3 px-1 fas fa-star text-warning'></i>
                            <i className='h3 px-1 fas fa-star text-warning'></i>
                            <i className='h3 px-1 fas fa-star text-warning'></i>
                            <i className='h3 px-1 far fa-star text-warning'></i>
                            <i className='h3 px-1 far fa-star text-warning'></i>
                        </div>
                        <div className="w-100 bg-dark h-200px rounded-xl my-10"></div>
                        <div className="w-100 bg-dark h-200px rounded-xl my-10"></div>
                        <div className="w-100 bg-dark h-200px rounded-xl my-10"></div>
                    </div>

                    <div className="col-6 w-100 h- p-5 pl-5 ">
                        <div className="mt-4 mb-6 ">
                        </div>
                        <div className='d-flex'>
                            <ul className="listStryle d-flex">
                                <li className=""><img src={image5} alt="" className="w-100" /></li>
                                <li className="px-5 h4 ">مرتب سازی :</li>
                                <li className="px-5 h4  borderbottom3 ">کیفیت</li>
                                <li className="px-5 h4  borderbottom3 ">قیمت و ارزش خرید </li>
                                <li className="px-5 h4  borderbottom3 ">حجم</li>
                            </ul>
                        </div>
                        <div className="w-100 mt-10 ">
                            <span className="bg-primary px-5 rounded-lg">3.0</span>
                            <span className="h4 ml-5">تازه و با کیفیت</span>
                        </div>
                        <div className="w-100 mt-10 borderbottom pb-6">
                            <span className="text-muted ">12 مرداد 1402 </span>
                            <span className="text-muted">  0 مشتری سان میت</span>
                        </div>
                        <div className="w-100">
                            <div className=" my-10  ">
                                <span className="px-5 ">
                                    <img src={image6} alt="" className="" />
                                </span>
                                <span className="text-muted">پیشنهاد میکنم</span>
                                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia qui recusandae iure sunt nesciunt quod, labore, et, aperiam consequatur est perferendis sequi quo! Doloremque, vel labore ratione a cupiditate velit!</p>
                            </div>
                            <span className="bg-primary px-5 rounded-lg">3.0</span>
                            <span className="h4 ml-5">تازه و با کیفیت</span>
                        </div>
                        <div className="w-100 mt-10 borderbottom pb-6">
                            <span className="text-muted ">12 مرداد 1402 </span>
                            <span className="text-muted">  0 مشتری سان میت</span>
                        </div>
                        <div className="w-100">
                            <div className=" my-10  ">
                            <span className="px-5 ">
                                    <img src={image6} alt="" className="" />
                                </span>
                                <span className="text-muted">پیشنهاد میکنم</span>
                                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia qui recusandae iure sunt nesciunt quod, labore, et, aperiam consequatur est perferendis sequi quo! Doloremque, vel labore ratione a cupiditate velit!</p>
                            </div>
                        </div>
                        <div className="w-100 mt-10  pb-6">
                            <span className="text-muted ">12 مرداد 1402 </span>
                            <span className="text-muted">  0 مشتری سان میت</span>
                        </div>

                    </div>


                    <div className="col-3 w-100 h-500px p-10 ">
                        <div style={{ backgroundColor: "#f2f2f2", border: '1px solid #d9d9d9' }} className='rounded-xl p-5 h-100 w-100 position-relative overflow-hidden d-flex align-items-between flex-column'>
                            <div className='position-absolute top-0 right-0   text-warning'>
                                <img src={image2} alt="" className="w-100" />
                            </div>
                            <div className='h-50px'><img src={image4} alt='sunmeat' /></div>
                            <div className='text-muted d-flex h-100 align-items-start justify-content-around flex-column'>
                                <div><i className='fa fa-circle mx-2'></i> نحوه ارسال</div>
                                <div><i className='fa fa-circle text-dark mx-2'></i>آماده سازی محصول</div>
                                <div><i className='fa fa-circle text-warning mx-2'> </i>تحویل محصول از طریق اسنپ</div>
                            </div>
                            <div className=' m-0 p-0 m-auto'>
                                <span className="h5  mr-4 text-primary">4/1</span>
                                <i className='h3 px-1 fas fa-star text-warning'></i>
                                <i className='h3 px-1 fas fa-star text-warning'></i>
                                <i className='h3 px-1 fas fa-star text-warning'></i>
                                <i className='h3 px-1 far fa-star text-warning'></i>
                                <i className='h3 px-1 far fa-star text-warning'></i>
                                <span className=" ml-2 text-primary">21دیدگاه</span>

                            </div>
                            <div className=' border border-bottom-0 border-left-0 border-right-0 border-dark d-flex justify-content-between w-100 align-items-center h-100'>
                                <div >
                                    <i class="">
                                        <img src={image3} alt="" className='w-100' />
                                    </i>
                                </div>
                                <div className='d-flex  align-items-center h-100 justify-content-between '>
                                    <i onClick={(e) => setNumber(number + 1)} class="h1 text-muted far fa fa-arrow-circle-up"></i>
                                    <span className='mx-1 btn btn-dark'>{number} کیلو</span>
                                    <i onClick={() => setNumber(number - 1)} class="h2 text-muted far fa fa-arrow-circle-down"></i>
                                </div>
                                <div >800000 تومان</div>
                            </div>
                            <div className='position-absolute bottom-0 mb-4 d-flex w-100 justify-content-center'>
                                <button className='btn btn-dark'>افزودن به سبد</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Content>
    )
}
