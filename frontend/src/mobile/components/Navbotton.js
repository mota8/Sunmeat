import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/media/images/Group 168.png'
import image2 from '../../assets/media/images/Group 169.png'
import image3 from '../../assets/media/images/Group 170.png'
import Discount from '../Discount';
import Homemobile from '../Homemobile';


const Navbotton = () => {
    const [pathname, setPathName] = useState("")
    useEffect(() => {
        setPathName(window.location.pathname)
    }, [])
    const ff = [1, 2, 3, 4, 5, 6]

    return (
        <div>
            <div className="h-70px position-fixed zindex-2 left-0  bottom-0 m-auto w-100 bg-secondary">
                <div className="row w-100 m-auto  h-70px  d-flex justify-content-around">
                    <div className="col-2 w-100 h-70px color1  d-flex justify-content-center align-items-center">
                        <Link to='/style'> <img className={`${pathname === "/style" ? "bordertop2" : "bordertop"}  pt-3`} src={image1} /></Link>
                    </div>
                    <div className="col-2 w-100 h-70px color1 d-flex justify-content-center align-items-center ">
                        <Link to={{ pathname: '/Discount', state: { ff } }}> <img className={`${pathname === "/Discount" ? "bordertop2" : "bordertop"}  pt-3 `} src={image3} /></Link>
                    </div>
                    <div className="col-2 w-100 h-70px color1 d-flex justify-content-center align-items-center ">
                        <Link to='/Homemobile'> <img className={`${pathname === "/Homemobile" ? "bordertop2" : "bordertop"}  pt-3 `} src={image2} /></Link>
                    </div>
                    <div className="col-2 w-100 h-70px color1 d-flex justify-content-center align-items-center ">
                        <Link to='/Mypages'> <img className={`${pathname === "/Mypages" ? "bordertop2" : "bordertop"}  pt-3 `} src={image1} /></Link>
                    </div>
                    <div className="col-2 w-100 h-70px color1 d-flex justify-content-center align-items-center ">
                        <Link to='/Mypages'> <img className={`${pathname === "/" ? "bordertop2" : "bordertop"}  pt-3 `} src={image1} /></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbotton;