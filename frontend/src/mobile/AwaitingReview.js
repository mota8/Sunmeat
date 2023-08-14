import Content1 from './components/Content1';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/media/images/Untitled-1.png';
import image2 from '../assets/media/images/shopping-basket.png';

const AwaitingReview = (children) => {
    const ff = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [pathname, setPathName] = useState("")

    useEffect(() => {
        setPathName(window.location.pathname)
    }, [])
    return (
        <Content1>
            <div>
                <div className="bg-info w-100 h-200px d-flex justify-content-between">
                    <div className="w-100 h-200px  d-flex flex-column justify-content-center text-center">
                        <div className="mt-5 text-light"><span className="h3">اطلاعیه محصول شارژ شده</span></div>
                        <div className="mt-7 text-light"><p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at atque rem ex odit alias!</p></div>
                    </div>
                    <div className="w-100 h-200px " >
                        <img src={image1} alt="" className="w-100" />
                    </div>
                </div>
                <div className="w-100 mb-15 d-flex justify-content-around align-items-start " style={{ marginTop: "-25px" }}>
                    <Link to='/Notifications'><button className=" btn  btn-bg-danger  text-dark  rounded-lg p-5 h3"><span className={`${pathname === "/Notifications" ? "borderbottom7" : "bordertop3cmmv"} `}> شارژ شده </span> </button></Link>
                    <Link to='/AwaitingReview'><button className=" btn  btn-bg-danger  text-dark  rounded-lg p-5 h3"><span className={`${pathname === "/AwaitingReview" ? "borderbottom7" : "bordertop3cmmv"} `}>در انتظار برسی </span> </button></Link>
                </div>
                <div className="width80 pb-40 bg-secondary m-auto  py-5 rounded-xl d-flex- justify-content-center">
                    {
                        ff.length &&
                        ff.map(x => {
                            return (
                                <div className=" row width80 m-auto pt-5  pb-5 border80 ">
                                    <div className="col-3 w-100 px-0 d-flex justify-content align-items-center">
                                        <div className="w-100 h-100px bg-light rounded-xl "></div>
                                    </div>
                                    <div className="col-9">
                                        <div className="mt-2"><span className="h3">مرغ منجمد زیرک</span></div>
                                        <div className="mt-2">
                                            <span className=" mr-1 text-primary">4/1</span>
                                            <i className='h6  fas fa-star text-warning'></i>
                                            <i className='h6  fas fa-star text-warning'></i>
                                            <i className='  h6 fas fa-star text-warning'></i>
                                            <i className=' h6 far fa-star text-warning'></i>
                                            <i className='h6 far fa-star text-warning'></i>
                                            <span className=" ml-1 text-primary">21دیدگاه</span>
                                        </div>
                                        <div className="my-2"><span className="h4 ">توضیحات</span></div>
                                        <div className="">
                                            <i className='h6 fa fa-circle '></i><span className="ml-2 ">محصول :</span> <span className="text-dark">مرغ</span>
                                            <i className='h6 fa fa-circle '></i><span className="ml-2 ">نام برند :</span> <span className="text-dark">زیرک</span>
                                            <i className='h6 fa fa-circle '></i><span className="ml-2 ">طبقه برند  :</span> <span className="text-dark">پروتئین،مرغ</span>

                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }



                </div>

            </div>

        </Content1>
    );
};

export default AwaitingReview; 