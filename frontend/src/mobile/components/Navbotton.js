import React, { useState, useEffect } from 'react';
import image4 from '../../assets/media/images/sdsxsdf1.png'
import { Link } from 'react-router-dom';

const Navbotton = () => {
    const [pathname, setPathName] = useState("")

    useEffect(() => {
        setPathName(window.location.pathname)
    }, [])

    return (
        <div>
            <div className="h-70px position-fixed zindex-1 left-0 bottom-0 w-100 bg-secondary">
                <div className="row w-100 m-auto bg-danger h-70px">
                    <div className="col-3 w-100 h-70px color1 ">
                    <Link to='/'> <img className={`${pathname === "/" ? "bordertop2" : "bordertop"} `} src={image4} /></Link>
                    </div>
                    <div className="col-3 w-100 h-70px color1 ">
                    <Link to='/ShopingPages'> <img className={`${pathname === "/ShopingPages" ? "bordertop2" : "bordertop"} `} src={image4} /></Link>
                    </div>
                    <div className="col-3 w-100 h-70px color1 ">
                    <Link to='/Mypages'> <img className={`${pathname === "/Mypages" ? "bordertop2" : "bordertop"} `} src={image4} /></Link>

                    </div>
                    <div className="col-3 w-100 h-70px color1 ">
                        <Link to='/HomeMobile'> <img className={`${pathname === "/HomeMobile" ? "bordertop2" : "bordertop"} `} src={image4} /></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbotton;