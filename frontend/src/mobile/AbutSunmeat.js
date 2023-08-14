import React from 'react';
import image1 from '../assets/media/images/Group.svg'
import image2 from '../assets/media/images/Sunmeat.svg'
import image3 from '../assets/media/images/Untitled-1.png'
import Content1 from './components/Content1';

const AbutSunmeat = () => {
    return (
        <Content1>
            <div>
                <div className="width80 m-auto">
                    <div className="w-100  m-auto">
                        <div className="w-100 d-flex justify-content-start mt-5">
                            <div className="">
                                <span className="font2rem ">درباره</span>
                            </div>
                            <div className=" ml-5 w-50 mt-1">
                                <img src={image2} alt="" className="w-75" />
                            </div>
                        </div>
                        <div className="w-100 d-flex  pl-15 pb-2  mb- borderbottom7">
                            <img src={image2} alt="" className="w-25" />

                        </div>
                        {/* بدنه */}
                        <div className="row w-100  m-auto ">
                            <div className="col-6 w-100 ">
                                <div className="w-100  mt-10 d-flex justify-content-center">
                                    <img src={image3} alt="" className=" w-75 " />
                                </div>
                                <div className="w-100  mt-10  text-center">
                                    <div className="h5 font-bold"> <span className="">خرید اسان.انتخاب راحت</span> </div>
                                    <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione!</span>
                                </div>
                                <div className="w-100  mt-7 d-flex justify-content-center">
                                    <img src={image3} alt="" className=" w-75 " />
                                </div>
                                <div className="w-100 mt-10 text-center">
                                    <div className="h5 font-bold"> <span className="">خرید اسان.انتخاب راحت</span> </div>
                                    <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione!</span>
                                    <button className="btn btn-secondary rounded-xl mt-3">پیام به پشتیبانی </button>
                                </div>
                            </div>
                            <div className="col-6 w-100 ">
                                <div className="w-100 mt-18 text-center">
                                    <div className="h5 font-bold"> <span className="">خرید اسان.انتخاب راحت</span> </div>
                                    <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione!</span>
                                </div>
                                <div className="w-100 mt-7 d-flex justify-content-center">
                                    <img src={image3} alt="" className=" w-75 " />
                                </div>
                                <div className="w-100 mt-10  text-center">
                                    <div className="h5 font-bold"> <span className="">خرید اسان.انتخاب راحت</span> </div>
                                    <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione!</span>
                                </div>
                                <div className="w-100 mt-10 d-flex justify-content-center">
                                    <img src={image3} alt="" className=" w-75 " />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* منوچسبان */}
                </div>
            </div>
        </Content1>
    );
};

export default AbutSunmeat;