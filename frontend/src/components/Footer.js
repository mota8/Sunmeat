import React from 'react'
import image1 from '../assets/media/images/Group 3 (1).svg';
import image2 from '../assets/media/images/landscape.jpg';
export default function Footer() {
  return (
    <div>
                      <div className="row w-100 h-400px bg-dark mt-30 ml-0 mr-0 d-flex align-items-center ">
                    <div className="col-4 w-100  h-300px d-flex justify-content-center">
                        <div className="w-50  h-300px ">
                            <img src={image1} alt="" className="" />
                            <div className="w-75  h-100px m-auto ">
                                <img src={image2} alt="" className="w-100 pt-3" />
                            </div>
                            <div className="w-75  h-100px m-auto">
                                <img src={image2} alt="" className="w-100 pt-3" />

                            </div>
                        </div>
                    </div>
                    <div className="col-4 w-100 text-white h-300px d-flex justify-content-center align-items-center">
                        <ul className="listStryle  ">
                            <li className='py-2 '>وبلاگ</li>
                            <li className='py-2 '>مطالب اموزشی</li>
                            <li className='py-2 '>انواع لایسنس ها</li>
                            <li className='py-2 '>جست و جو در لایسنس ها </li>
                        </ul>
                        <ul className="listStryle">
                            <li className='py-2 '>تخفیف ها </li>
                            <li className='py-2 '>تماس با ما </li>
                            <li className='py-2 '>درباره ما </li>
                            <li className='py-2 '>همکاری با ما </li>
                        </ul>
                        <span className="position-absolute bottom-0 text-purple">sfdadfi</span>
                    </div>

                    <div className="col-4 w-100  h-300px d-flex justify-content-center align-items-center">
                        <div className=" w-50 h-250px">
                            <span className="d-block  pb-5">ffffffddddddddff                </span>
                            <span className="d-block pb-10 ">یسبببfgdgfdgبب</span>
                            <span className="d-block  pb-5">dfssdsdfasfggggggddfss</span>
                            <span className="d-block pb-20">بلسلیلسیfddddddddddddgیل</span>
                            <div className="w-100  h-50px mb-0 d-flex justify-content-around">
                                <div className="w-25 h-50px bg-light"></div>
                                <div className="w-25 h-50px bg-light"></div>
                                <div className="w-25 h-50px bg-light"></div>
                            </div>
                        </div>
                        <div className="w-25 h-25  px bg-light position-absolute right-0 mr-3 top-0"></div>
                    </div>
                </div>

    </div>
  )
}
