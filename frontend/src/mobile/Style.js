import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import image1 from '../assets/media/images/Group 1187.jpg';
import image2 from '../assets/media/images/archive-minus.png';
import image3 from '../assets/media/images/like.svg';
import { useLocation } from 'react-router-dom';

export default function SwipeableTemporaryDrawer() {

  const ff = [1, 3, 4, 5, 6, 7, 8, 9,]
  const [pathname, setPathName] = useState("")
  const location = useLocation()

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

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List className=''>
        <div  className="width80 m-auto">
          <div className="w-100 h-100px  d-flex justify-content-center ">
            <img onKeyDown={toggleDrawer(anchor, false)} onClick={toggleDrawer(anchor, false)} src={image1} alt="" className="w-50 h-60px " />
          </div>
          <div className="row m-auto  w-100 h-200px borderbottom2">
            <div className="col-4 d-flex justify-content-center align-items-center">
              <div className="w-100 h-150px rounded-xl bg-light "></div>
            </div>
            <div className="col-6 pt-7">
              <div className="mt-2"><span className="h1">مرغ منجمد زیرک</span></div>
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
              </div>
              <div className="">
                <i className='h6 fa fa-circle '></i><span className="ml-2 ">نام برند :</span> <span className="text-dark">زیرک</span>
              </div>
              <div className="">
                <i className='h6 fa fa-circle '></i><span className="ml-2 ">طبقه برند  :</span> <span className="text-dark">پروتئین،مرغ</span>
              </div>
            </div>
            <div className="col-2 w-100 pt-15 pr-4">
              <img src={image2} alt="" className="" />
            </div>
          </div>
          <div className="row pt-5 w-100 h-100px m-auto borderbottom2 ">
            <div className="col-5">
              <div className='d-flex  align-items-center h-100 justify-content-between '>
                <i onClick={(e) => setNumber(number + 1)} class="h1 text-muted far fa fa-arrow-circle-up"></i>
                <span className='mx-1 btn btn-dark'>{number} کیلو</span>
                <i onClick={() => setNumber(number - 1)} class="h2 text-muted far fa fa-arrow-circle-down"></i>
              </div>

            </div>
            <div className="col-4  d-flex justify-content-center align-items-center">
              <span className="h1 text-center"> 800,000 تومان</span>
            </div>
            <div className="col-3  ">
              <div className="w-75 h-70px bg-secondary rounded-lg m-auto d-flex  justify-content-center align-items-center ">
                <img src={image2} alt="" className="w-100 " />
              </div>
            </div>
          </div>
          <div className="m-5"><span className="h1">امتیاز و دیدگاه کاربران</span></div>
          {
            ff.map(x => {
              return (

                <div className="w-100 row my-10">
                  <div className="col-3">
                    <div className="w-100 h-75px rounded-xl bg-secondary"></div>
                  </div>
                  <div className="col-2">
                    <div className="w-100 h-20px rounded-xl bg-primary d-flex justify-content-center align-items-center  "><span className="text-light ">3.0</span></div>
                    <div className="w-100 h-20px my-2 d-flex justify-content-center align-items-center rounded-xl "><img src={image3} alt="" className="w-50   " /></div>
                    <div className="w-100 h-20px rounded-xl  fontsize2 d-flex justify-content-center align-items-center"><span className=" text-mute ">پیشنهاد میکنم </span></div>
                  </div>
                  <div className="col-7">
                    <div className="w-100 mb-4"><span className="h4">کاربر شماره #78899</span></div>
                    <div className="w-100"><span className="fontsizebold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptatum</span></div>
                  </div>
                </div>
                  
                                )
                              })
                            }
        </div>
        <div className=" pb-5 ">

        <div className=" row width80 m-auto rounded-lg h-50px my-10 color2 overflue-hidden">
          <div className="col-2 bg-danger d-flex justify-content-center align-items-center">
            <img src={image2} alt="" className="" />
          </div>
          <div className="col-8 d-flex justify-content-start align-items-center">
            <span className="text-light ">دیدگاه خود را درباره این کالا  بنویسید</span>
          </div>
          <div className="col-2 bg-warning d-flex justify-content-center align-items-center">
            <img src={image2} alt="" className="" />
          </div>
        </div>
        </div>

      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}


    </div>
  );
}