'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FileIcon } from '@/app/icons/FileIcon';
import { useTranslations } from 'next-intl';
import transparent_img from '@/public/images/contact_transparentImg.png'
import Image from 'next/image';
import axios from 'axios';
import {toast } from 'sonner';


interface IContact {
  fullName: string;
  phone: string;
  email: string;
  organization: string;
  file: File | null;
  fileName: string;
  description: string;
}

const ContactSection = () => {
  const t = useTranslations('ContactSection');
  
  
  const initialValues: IContact = {
    fullName: '',
    phone: '',
    email: '',
    organization: '',
    file: null,
    fileName: '',
    description: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(t('validations.0')),
    phone: Yup.string().required(t('validations.1')),
    email: Yup.string().email(t('validations.3')).required(t('validations.2')),
    organization: Yup.string(),
    file: Yup.mixed().nullable(),
    description: Yup.string(),
  });

  const handleSubmit = async (values: IContact, { resetForm }: FormikHelpers<IContact>) => {
    try {
      let fileData = null;

      if (values.file instanceof File) {
        const reader = new FileReader();

        const readFile = new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(values.file!);
        });

        const fileBase64 = await readFile;
        fileData = {
          name: values.file.name,
          type: values.file.type,
          data: fileBase64.split(',')[1], // Remove Base64 header
        };
      }

      const sendMessage = {
        full_name: values.fullName,
        phone: values.phone,
        email: values.email,
        organization_name: values.organization,
        file: fileData,
        description: values.description,
      };

      await axios.post('https://backend.turniket.am/send-email', sendMessage);

      // Reset the form and show success message
      resetForm();
      toast.success(t('message.success'));
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(t('message.error'));
    }
  };

  return (
    <div className="contact_section p-[50px] relative">
      <div className="container flex flex-col items-center gap-[50px] ">
        <h2 className="text-center freeSans font-semibold text-[24px] leading-[28.8px] font_color max-w-[500px]">
          {t('title')}
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form className="max-w-[860px] flex flex-col gap-[20px] justify-center items-center bg-white my_shadow p-[40px] max-sm:px-[10px] rounded-xl z-10">

              <div className="flex flex-col justify-center items-center md:items-start gap-[20px] md:flex-row ">
                <div className="flex flex-col gap-[10px]">
                  <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                    {t('placeholders.0')}
                  </label>
                  <Field
                    name="fullName"
                    type="text"
                    className="border border-[#0E0449] h-[48px] w-[310px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px]"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                    {t('placeholders.1')}
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    className="border border-[#0E0449] h-[48px] w-[310px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px]"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center gap-[20px] md:flex-row items-center md:items-start">
                <div className="flex flex-col gap-[10px]">
                  <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                    {t('placeholders.2')}
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
                    {t('placeholders.3')}
                  </label>
                  <Field
                    name="organization"
                    type="text"
                    className="border border-[#0E0449] h-[48px] w-[310px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                  {t('placeholders.4')}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    readOnly
                    value={values.fileName}
                    className="w-[640px] max-md:w-[500px] max-sm:w-[300px] h-[48px] border border-[#0E0449] rounded outline-none pl-[15px]"
                  />
                  <label htmlFor="file" className="absolute top-[10px] right-[10px] cursor-pointer">
                    <FileIcon width={24} height={27} color="#0E0449" />
                  </label>
                  <input
                    id="file"
                    type="file"
                    hidden
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      const file = event.currentTarget.files ? event.currentTarget.files[0] : null;
                      setFieldValue('file', file);
                      setFieldValue('fileName', file ? file.name : '');
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                  {t('placeholders.5')}
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
                {t('btn')}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Image src={transparent_img} alt='decorative img' className='absolute top-[50px] right-[100px] max-lg:right-0  max-lg:top-[100px] max-sm:top-[120px]' />
    </div>
  );
};

export default ContactSection;
