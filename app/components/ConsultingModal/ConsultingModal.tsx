'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { XIcon } from '@/app/icons/XIcon';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectIsOpenConsultingModal, selectOrderCode, toggleConsultingModal } from '@/app/store/slices/consultingModalSlice/consultingModalSlice';
import { useSelector } from 'react-redux';


interface InitialValues {
  fullName: string;
  phone: string;
  email: string;
  time: string;
  product: string;
  description: string;
}
const ConsultingModal = () => {
  const isOpenModal = useAppSelector(selectIsOpenConsultingModal)
  const orderCode = useSelector(selectOrderCode)
  const dispatch = useAppDispatch()
  const initialValues = {
    fullName: '',
    phone: '',
    email: '',
    time: '',
    product: '',
    description: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string(),
    phone: Yup.string(),
    email: Yup.string().email('validations.3').required('partadir'),
    time: Yup.string(),
    product: Yup.string(),
    description: Yup.string(),
  });

  const handleSubmit = (values: InitialValues) => {
    console.log('Form Data:', values);
    // Add your form submission logic here
  };
  return (
    <div style={{display: isOpenModal ? 'flex' : 'none'}} className='consulting_modal fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-55 flex justify-center items-center z-[99999999]'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="max-w-[860px] flex flex-col gap-[20px] justify-center items-center bg-white my_shadow p-[40px] max-sm:px-[10px] rounded-xl z-10 relative">
              <div className="flex flex-col justify-center items-center md:items-start gap-[20px] md:flex-row ">
                <div className="flex flex-col gap-[10px]">
                  <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                     Անուն Ազգանուն*
                  </label>
                  <Field
                    name="fullName"
                    type="text"
                    className="border border-[#0E0449] h-[48px] w-[310px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px]"
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                      Հեռախոսահամար*
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    className="border border-[#0E0449] h-[48px] w-[310px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px]"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center gap-[20px] md:flex-row items-center md:items-start">
                <div className="flex flex-col gap-[10px]">
                  <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                    Էլ. փոստ*
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="border border-[#0E0449] h-[48px] w-[310px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                    Ընտրեք Ձեզ հարմար ժամ
                  </label>
                  <Field
                    name="time"
                    type="text"
                    className="border border-[#0E0449] h-[48px] w-[310px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                  Ապրանք
                </label>
                <Field
                    value={orderCode || ''}
                    name="product"
                    type="text"
                    className="w-[640px] max-md:w-[500px] max-sm:w-[300px] h-[48px] border border-[#0E0449] rounded outline-none pl-[15px]"
                  />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                  Հաղորդագրություն
                </label>
                <Field
                  name="description"
                  as="textarea"
                  className="w-[640px] max-md:w-[500px] max-sm:w-[300px] h-[140px] border border-[#0E0449] rounded outline-none pl-[15px]"
                />
              </div>

              <button
                type="submit"
                className="text-white bg-[#5939F5] py-[7px] px-[15px] rounded"
              >
                Ուղարկել
              </button>
              <span className='absolute right-3 top-3 cursor-pointer' onClick={() => dispatch(toggleConsultingModal({isview:false, orderCode: ''}))}><XIcon width={16} height={16} color="#3A3A3A"/></span>
            </Form>
          )}
        </Formik>

    </div>
  )
}

export default ConsultingModal