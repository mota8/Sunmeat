import React from 'react'
import image1 from '../assets/media/images/Group 992 (1).png';
import image3 from '../assets/media/images/Group.svg'
import image4 from '../assets/media/images/Group-1.svg'
import image5 from '../assets/media/images/whatsapp-fill.svg'
import image6 from '../assets/media/images/Back to top btn.svg'
export default function Footer() {
    return (
        <div>
            <div className="row w-100  bg-dark mt-30 ml-0 mr-0  align-items-center ">
                <div className="col-xl-4 col-lg-4 col-md-4 col-12 w-100  h-300px d-flex justify-content-center">
                    <div className="w-50  h-300px ">
                        <img src={image1} alt="" className="" />
                      
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-12 w-100 text-white h-300px d-flex justify-content-center align-items-center">
                    <ul className="listStryle  ">
                        <li className='py-2 cursor-pointer borderbottom'>وبلاگ</li>
                        <li className='py-2 cursor-pointer borderbottom'>مطالب اموزشی</li>
                        <li className='py-2 cursor-pointer borderbottom'>انواع لایسنس ها</li>
                        <li className='py-2 cursor-pointer borderbottom'>جست و جو در لایسنس ها </li>
                    </ul>
                    <ul className="listStryle">
                        <li className='py-2 cursor-pointer borderbottom'>تخفیف ها </li>
                        <li className='py-2 cursor-pointer borderbottom'>تماس با ما </li>
                        <li className='py-2 cursor-pointer borderbottom'>درباره ما </li>
                        <li className='py-2 cursor-pointer borderbottom'>همکاری با ما </li>
                    </ul>
                    <span className="position-absolute bottom-0 text-purple">sfdadfi</span>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-12 w-100  h-300px d-flex justify-content-center align-items-center">
                    <div className=" w-50 h-250px">
                        <span className="d-block  pb-5 cursor-pointer">ffffffddddddddff                </span>
                        <span className="d-block pb-10 cursor-pointer ">یسبببfgdgfdgبب</span>
                        <span className="d-block  pb-5 cursor-pointer">dfssdsdfasfggggggddfss</span>
                        <span className="d-block pb-20 cursor-pointer">بلسلیلسیfddddddddddddgیل</span>
                        <div className="w-100  h-50px mb-0 d-flex justify-content-around">
                            <div className="w-25 h-50px bg-dark">
                                <img src={image3} alt="" className="w-100 cursor-pointer" />
                            </div>
                            <div className="w-25 h-50px ">
                                <img src={image4} alt="" className="w-100 cursor-pointer" />
                            </div>

                            <div className="w-25 h-50px ">
                                <img src={image5} alt="" className="w-100 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="w-25 h-25  position-absolute right-0 mr-3 top-0">
                        <img src={image6} alt="" className="w-50 mr-0 cursor-pointer" />
                    </div>
                </div>
            </div>

        </div >
    )
}
