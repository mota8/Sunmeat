import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'

const RecordFeedback = () => {
  const [buler, setBuler] = useState(false)

  const clickHandler = (filter) => {
    if (filter === false) {

    }
  }
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      number: '',
      text1: '',
      email: ''
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }


  })



  return (

    <div>
      <div>

        <form onSubmit={formik.handleSubmit}>



          <div className={`my-6 container w-100 h-100px boxblur `}>

            <div className='my-2'>

              <div className="  form-group w-100 d-flex flex-column justify-content-center align-items-center w-100 d-flex flex-column justify-content-center align-items-center">
                <label className='h2'>نام</label>
                <input className=' form-control h-50px' type='firstName' id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName} placeholder='اسم خود را وارد کنید' />
              </div>
            </div>
            <div className=''>
              <div className="form-group w-100 d-flex flex-column justify-content-center align-items-center">
                <label className='h2'>نام خانوادگی</label>
                <input className='form-control h-50px' type='lastName' id='lastName' name='lastName' onChange={formik.handleChange} value={formik.values.lastName} placeholder='فامیلی خود را وارد کنید' />
              </div>
            </div>

            <div className=''>
              <div className="form-group w-100 d-flex flex-column justify-content-center align-items-center">
                <label className='h2'> تلفن همراه</label>
                <input className='form-control h-50px' type='number' id='number' name='number' onChange={formik.handleChange} value={formik.values.number} placeholder='شماره تماس خود را وارد کید ' />
              </div>
            </div>

            <div className=''>
              <div className="form-group w-100 d-flex flex-column justify-content-center align-items-center">
                <label className='h2'>کد پستی </label>
                <input className='form-control h-50px' type='text1' id='text1' name='text1' onChange={formik.handleChange} value={formik.values.text1} placeholder='کد پستی خود را وارد کنید' />
              </div>
            </div>
            <div className=''>
              <div className="form-group w-100 d-flex flex-column justify-content-center align-items-center">
                <label className='h2'><span className="">ادرس</span><span className=" fontsize  "> (  <span className="text-primary ">انتخاب از روی نقشه</span>) </span></label>
                <input className='form-control h-50px' type='confirmPassword' id='confirmPassword' name='confirmPassword' onChange={formik.handleChange} value={formik.values.confirmPassword} placeholder=' ادرس خود را وارد کنید  ' />
              </div>
            </div>
            <div className=''>
              <div className="form-group w-100 d-flex flex-column justify-content-center align-items-center">
                <label className='h2'> ایمیل</label>
                <input className='form-control h-50px' type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} placeholder='ایمل خود را وارد کیند  ' />
              </div>
            </div>
            <div className=" d-flex justify-content-around ">
              <button type='submit' className='btn btn-primary  h-50pxw-50'>
                <span>ثبت نام</span>
              </button>
            </div>
          </div>
        </form>
        <div className="w-100" style={{ position: 'absolute', bottom: '0' }}>

          <button className='w-100 h-50px my-2 btn btn-primary'>
            <span> ویرایش</span>
          </button>
        </div>

      </div>

    </div>
  );
};

export default RecordFeedback;