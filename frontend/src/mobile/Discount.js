import React from 'react';
import Content1 from './components/Content1';
import image1 from '../assets/media/images/Untitled-1.png';
import image2 from '../assets/media/images/50% OFF.png';
import image from '../assets/media/images/25% OFF.png';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Discount = () => {
    const ff = [1, 2, 3, 4, 5, 6]
    const [pathname, setPathName] = useState("")
    const location = useLocation()
    const data =location.state
    useEffect(() => {
        setPathName(window.location.pathname)
    }, [])

    return (
        <Content1>
            <div>
                <div className="bg-info w-100  d-flex justify-content-between ">
                    <div className="w-100 d-flex flex-column justify-content-center text-center">
                        <div className="mt-5 text-light"><span className="h3">اطلاعیه محصول شارژ شده</span></div>
                        <div className="mt-7 text-light"><p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at atque rem ex odit alias!</p></div>
                    </div>
                    <div className=" row width80 w-100 m-auto ">
                        <img src={image1} alt="" className="w-100" />
                    </div>
                </div>

                {
                    ff.map(x => {
                        return (

                            <div className="mb-20">
                                <div className="row w-100  ">
                                    <div className="col-4 w-100 d-flex justify-content-center align-items-center ">
                                        <div className="w-100 h-50px ml-5 bg-dark rounded-xl  d-flex justify-content-center align-items-center">
                                            <img src={image2} alt="" className=" w-75 " />
                                        </div>
                                    </div>
                                    <div className="col-5 "></div>
                                    <div className="col-3 w-100 h-100px d-flex justify-content-center align-items-center">
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
                                        <div className="color2 w-100 h-100px rounded-xl mb-10" style={{ position: 'relative' }}>
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
                                        <div className="color2 w-100 h-100px rounded-xl mb-10" style={{ position: 'relative' }}>
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
                                        <div className="color2 w-100 h-100px rounded-xl mb-10" style={{ position: 'relative' }}>
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
                            </div>

                        )
                    })
                }

            </div>
        </Content1>
    );
};

export default Discount;