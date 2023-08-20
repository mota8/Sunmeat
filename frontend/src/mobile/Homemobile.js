import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import image4 from '../assets/media/images/sunmit8.jpg';
import Content1 from './components/Content1';
import React, { useRef, useState } from 'react';
import image2 from '../assets/media/images/50% OFF.png';
import image3 from '../assets/media/images/shopping-basket.png';
import image5 from '../assets/media/images/box.png';

// Import Swiper React components

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';

const Homemobile = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 600)}s`;
  };

  return (
    <Content1>

      <div>
        <>
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide><img src={image4} alt="" className="w-100  " /></SwiperSlide>
            <SwiperSlide><img src={image4} alt="" className="w-100  " /></SwiperSlide>
            <SwiperSlide><img src={image4} alt="" className="w-100  " /></SwiperSlide>
            <SwiperSlide><img src={image4} alt="" className="w-100  " /></SwiperSlide>
            <SwiperSlide><img src={image4} alt="" className="w-100  " /></SwiperSlide>
            <SwiperSlide><img src={image4} alt="" className="w-100  " /></SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </>
        <div className="row py-10 w-100 m-auto">
          <div className="col-4 w-100 h-25px bg- bg- d-flex justify-content-center    ">
            <span className="h3  fontsizebold">دسته بندی </span>
          </div>
          <div className="col-5 w-100 h-25px "></div>
          <div className="col-3 w-100 d-flex justify-content-center align-items-center">
            <Link to='/SeeAll'><span className="borderbottom6 ">مشاهده همه </span></Link>
          </div>
        </div>
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={4}
            slidesPerView={2.5}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='d-flex align-items-center h-100px w-100 pl-1 pr-2 justify-content-center pl-4  '>
            <SwiperSlide><div className='h-100  rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
            <SwiperSlide><div className='h-100  rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
            <SwiperSlide><div className='h-100  rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
            <SwiperSlide><div className='h-100  rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
            <SwiperSlide><div className='h-100  rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
            <SwiperSlide><div className='h-100  rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
            <SwiperSlide><div className='h-100  rounded-xl overflow-hidden'><img src={image4} alt="" className='w-100 overflow-hidden' /></div></SwiperSlide>
          </Swiper>
        </div>
        <div className="row w-100 m-0 my-7 ">
          <div className="col-4 w-100 d-flex  justify-content-center align-items-center ">
            <div className="w-100 h-50px bg-dark rounded-xl  d-flex justify-content-center align-items-center">
              <img src={image2} alt="" className=" w-75 " />
            </div>
          </div>
          <div className="col-5 w-100 h-25px "></div>
          <div className="col-3  d-flex justify-content-center align-items-center  ">
            <Link to='/SeeAll'><span className="borderbottom6 ">مشاهده همه </span></Link>
          </div>
        </div>
        <div className="row w-100 ml-0  ">
          <div className="col-4 d-flex flex-column align-items-center justify-content-center">
            <div className="color2 w-100 h-100px rounded-xl  my-10" style={{ position: 'relative' }}>
              <div className="w-75  bg-dark rounded-lg d-flex flex-column align-items-center" style={{ position: 'absolute', bottom: '-15px ', left: '14px' }}>
                <div>
                  <span className="text-danger fontsizebold "> <del>688,000 تومان</del> </span>
                </div>
                <div>
                  <span className="text-light  "> 432,000 تومان</span>
                </div>

              </div>
            </div>
          </div>
          <div className="col-4  d-flex flex-column align-items-center justify-content-center w-100 ">
            <div className="color2 w-100 h-100px rounded-xl my-10" style={{ position: 'relative' }}>
              <div className="w-75  bg-dark rounded-lg d-flex flex-column align-items-center" style={{ position: 'absolute', bottom: '-15px ', left: '14px' }}>
                <div>
                  <span className="text-danger fontsizebold "> <del>688,000 تومان</del> </span>
                </div>
                <div>
                  <span className="text-light  "> 432,000 تومان</span>
                </div>

              </div>
            </div>

          </div>
          <div className="col-4 d-flex flex-column align-items-center justify-content-center w-100 ">
            <div className=" w-100 h-100px rounded-xl my-10 color2" style={{ position: 'relative' }}>
              <div className="w-75  bg-dark rounded-lg d-flex flex-column align-items-center" style={{ position: 'absolute', bottom: '-15px ', left: '14px' }}>
                <div>
                  <span className="text-danger fontsizebold "> <del>688,000 تومان</del> </span>
                </div>
                <div>
                  <span className="text-light  "> 432,000 تومان</span>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="row  w-100 m-auto">
          <div className="col-4 w-100 h-25px bg- bg- d-flex justify-content-center    ">
            <span className="h6  fontsizebold"> محصولات جدید </span>
          </div>
          <div className="col-5 w-100 h-25px "></div>
          <div className="col-3 w-100 d-flex justify-content-center align-items-center">
            <Link to='/SeeAll'><span className="borderbottom6 ">مشاهده همه </span></Link>
          </div>
        </div>
        <div className="row w-100 ml-0 mb-0">
          <div className="col-4 d-flex flex-column align-items-center justify-content-center">
            <div className="color2 w-100 h-150px rounded-lg flex-column  my-10 d-flex justify-content-end " style={{ position: 'relative', overflow: 'hidden' }}>
              <div className=" w-30px h-30px " style={{ position: "absolute", top: '0', left: '0' }}>
                <img src={image3} alt="" className='w-75 m-1 ' />
              </div>
              <div className=" w-100 h-50px bordertop d-flex  justify-content-between">
                <div className="w-100 h-50px   d-flex flex-column align-items-start justify-content-center  ">
                  <span className="fontsize text-dark ml-1">مرغ منجمد </span>
                  <span className="fontsize2 ml-1 ">ارسال با پیک</span>
                </div>
                <div className="w-100 h-50px  d-flex flex-column align-items-center justify-content-center ">
                  <span className="fontsize text-dark"> 688,000 </span>
                  <span className="fontsize2 ">تومان</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col-4  d-flex flex-column align-items-center justify-content-center w-100 ">
            <div className="color2 w-100 h-150px rounded-lg flex-column  my-10 d-flex justify-content-end " style={{ position: 'relative', overflow: 'hidden' }}>
              <div className=" w-30px h-30px " style={{ position: "absolute", top: '0', left: '0' }}>
                <img src={image3} alt="" className='w-75 m-1 ' />
              </div>
              <div className=" w-100 h-50px bordertop d-flex  justify-content-between">
                <div className="w-100 h-50px   d-flex flex-column align-items-start justify-content-center  ">
                  <span className="fontsize text-dark ml-1">مرغ منجمد </span>
                  <span className="fontsize2 ml-1">ارسال با پیک</span>
                </div>
                <div className="w-100 h-50px  d-flex flex-column align-items-center justify-content-center ">
                  <span className="fontsize text-dark"> 688,000 </span>
                  <span className="fontsize2 ">تومان</span>

                </div>
              </div>
            </div>

          </div>
          <div className="col-4 d-flex flex-column align-items-center justify-content-center w-100 ">
            <div className="color2 w-100 h-150px rounded-lg flex-column  my-10 d-flex justify-content-end " style={{ position: 'relative', overflow: 'hidden' }}>
              <div className=" w-30px h-30px " style={{ position: "absolute", top: '0', left: '0' }}>
                <img src={image3} alt="" className='w-75 m-1 ' />
              </div>
              <div className=" w-100 h-50px bordertop d-flex  justify-content-between">
                <div className="w-100 h-50px   d-flex flex-column align-items-start justify-content-center  ">
                  <span className="fontsize text-dark ml-1">مرغ منجمد </span>
                  <span className="fontsize2 ml-1">ارسال با پیک</span>
                </div>
                <div className="w-100 h-50px  d-flex flex-column align-items-center justify-content-center ">
                  <span className="fontsize text-dark"> 688,000 </span>
                  <span className="fontsize2 "> تومان</span>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row w-100 m-auto">
          <div className="col-6 w-100 h-200px">
            <div className="w-100 h-150px bg-danger rounded-xl"></div>
          </div>
          <div className="col-6 w-100 h-200px ">
            <div className="w-100 h-150px bg-warning rounded-xl"></div>
          </div>
        </div>
        <div className="w-100 h-300px color3  mb-10">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={25}
            slidesPerView={2}

            className='py-15 pr-15'>
            <SwiperSlide><div className=' h-100 d-flex flex-column pr-10' style={{ width: '170px' }}><span className=" text-light h2" >این کالاهارو با نصف قیمت بخر </span><img src={image5} alt="" className='w-100 ' /></div></SwiperSlide>
            <SwiperSlide>
              <div className='h-100 bg-light rounded-xl zindex' style={{ width: '170px' }}>
                <img src={image5} alt="" className='w-75 h-100px m-auto  ' />
                <div className=" w-100 h-20px  m-auto pt-3">
                  <div className="bg-danger w-70px h-20px m-auto rounded-xl "><span className="text-light">50%</span></div>
                </div>
                <div className=" w-100 h-50px my-10 d-flex justify-content-around align-items-center">
                  <span className="">22جلسه</span>
                  <span className="textcolor1">12:25:30</span>
                </div>
                <div className="w-100px h-25px bg-secondary" style={{ position: 'absolute', bottom: '-25px', borderRadius: '0 0 10px 10px', right: '22%' }}>
                  <span className="h6">688,000 تومان</span>
                </div>

              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='h-100 bg-light rounded-xl zindex' style={{ width: '170px' }}>
                <img src={image5} alt="" className='w-75 h-100px m-auto  ' />
                <div className=" w-100 h-20px  m-auto pt-3">
                  <div className="bg-danger w-70px h-20px m-auto rounded-xl "><span className="text-light">50%</span></div>
                </div>
                <div className=" w-100 h-50px my-10 d-flex justify-content-around align-items-center">
                  <span className="">22جلسه</span>
                  <span className="textcolor1">12:25:30</span>
                </div>
                <div className="w-100px h-25px bg-secondary" style={{ position: 'absolute', bottom: '-25px', borderRadius: '0 0 10px 10px', right: '22%' }}>
                  <span className="h6">688,000 تومان</span>
                </div>

              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='h-100 bg-light rounded-xl zindex' style={{ width: '170px' }}>
                <img src={image5} alt="" className='w-75 h-100px m-auto  ' />
                <div className=" w-100 h-20px  m-auto pt-3">
                  <div className="bg-danger w-70px h-20px m-auto rounded-xl "><span className="text-light">50%</span></div>
                </div>
                <div className=" w-100 h-50px my-10 d-flex justify-content-around align-items-center">
                  <span className="">22جلسه</span>
                  <span className="textcolor1">12:25:30</span>
                </div>
                <div className="w-100px h-25px bg-secondary" style={{ position: 'absolute', bottom: '-25px', borderRadius: '0 0 10px 10px', right: '22%' }}>
                  <span className="h6">688,000 تومان</span>
                </div>

              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='h-100 bg-light rounded-xl zindex' style={{ width: '170px' }}>
                <img src={image5} alt="" className='w-75 h-100px m-auto  ' />
                <div className=" w-100 h-20px  m-auto pt-3">
                  <div className="bg-danger w-70px h-20px m-auto rounded-xl "><span className="text-light">50%</span></div>
                </div>
                <div className=" w-100 h-50px my-10 d-flex justify-content-around align-items-center">
                  <span className="">22جلسه</span>
                  <span className="textcolor1">12:25:30</span>
                </div>
                <div className="w-100px h-25px bg-secondary" style={{ position: 'absolute', bottom: '-25px', borderRadius: '0 0 10px 10px', right: '22%' }}>
                  <span className="h6">688,000 تومان</span>
                </div>

              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='h-100 bg-light rounded-xl zindex' style={{ width: '170px' }}>
                <img src={image5} alt="" className='w-75 h-100px m-auto  ' />
                <div className=" w-100 h-20px  m-auto pt-3">
                  <div className="bg-danger w-70px h-20px m-auto rounded-xl "><span className="text-light">50%</span></div>
                </div>
                <div className=" w-100 h-50px my-10 d-flex justify-content-around align-items-center">
                  <span className="">22جلسه</span>
                  <span className="textcolor1">12:25:30</span>
                </div>
                <div className="w-100px h-25px bg-secondary" style={{ position: 'absolute', bottom: '-25px', borderRadius: '0 0 10px 10px', right: '22%' }}>
                  <span className="h6">688,000 تومان</span>
                </div>

              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='h-100 bg-light rounded-xl zindex' style={{ width: '170px' }}>
                <img src={image5} alt="" className='w-75 h-100px m-auto  ' />
                <div className=" w-100 h-20px  m-auto pt-3">
                  <div className="bg-danger w-70px h-20px m-auto rounded-xl "><span className="text-light">50%</span></div>
                </div>
                <div className=" w-100 h-50px my-10 d-flex justify-content-around align-items-center">
                  <span className="">22جلسه</span>
                  <span className="textcolor1">12:25:30</span>
                </div>
                <div className="w-100px h-25px bg-secondary" style={{ position: 'absolute', bottom: '-25px', borderRadius: '0 0 10px 10px', right: '22%' }}>
                  <span className="h6">688,000 تومان</span>
                </div>

              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='h-100 bg-light rounded-xl zindex' style={{ width: '170px' }}>
                <img src={image5} alt="" className='w-75 h-100px m-auto  ' />
                <div className=" w-100 h-20px  m-auto pt-3">
                  <div className="bg-danger w-70px h-20px m-auto rounded-xl "><span className="text-light">50%</span></div>
                </div>
                <div className=" w-100 h-50px my-10 d-flex justify-content-around align-items-center">
                  <span className="">22جلسه</span>
                  <span className="textcolor1">12:25:30</span>
                </div>
                <div className="w-100px h-25px bg-secondary" style={{ position: 'absolute', bottom: '-25px', borderRadius: '0 0 10px 10px', right: '22%' }}>
                  <span className="h6">688,000 تومان</span>
                </div>

              </div>
              </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-100 h-250px ">
          <div className="width80 h-150px   rounded-xl m-auto color2"></div>
        </div>
      </div>
    </Content1>
  );
};

export default Homemobile;