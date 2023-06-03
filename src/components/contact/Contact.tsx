import React from 'react';
import './contact.scss';
import { AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es obligatorio'),
      email: Yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
      message: Yup.string().required('El mensaje es obligatorio')
    }),
    onSubmit: values => {
      emailjs.send('service_zjpp1r8', 'template_cxtw0mo', values, publicKey)
        .then(() => {
          toast.success('Correo enviado exitosamente')
          formik.resetForm();
        })
        .catch(error => {
          toast.error('Error al enviar el correo:', error)
        });
    }
  });

  return (
    <div className='contact' id='contact'>
      <h2 className='contact_title'>Contacto</h2>
      <h3 className='contact_text'>
        Puedes comunicarte por este formulario, o quizás prefieras ir a mi{' '}
        <a href='https://www.linkedin.com/in/jorge-ariel-castillo-401686a5/' target='_blank' rel='noopener noreferrer'>
          <AiFillLinkedin />
        </a>{' '}
        o{' '}
        <a
          style={{ color: '#00BF63' }}
          href='https://api.whatsapp.com/send?phone=+5491162744478&text=Hola%20Jorge,%20me%20comunico%20a%20trav%C3%A9s%20de%20tu%20portfolio.'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiOutlineWhatsApp />
        </a>
        .
      </h3>
      <form className='contact_form' onSubmit={formik.handleSubmit}>
        <label className='contact_label' htmlFor='name'>
          Nombre
          <small className='contact_error'>{formik.errors.name}</small>
          <input
            className='contact_input'
            type='text'
            name='name'
            id='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </label>
        <label className='contact_label' htmlFor='email'>
          Email
          <small className='contact_error'>{formik.errors.email}</small>
          <input
            className='contact_input'
            type='text'
            name='email'
            id='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </label>
        <label className='contact_label' htmlFor='message'>
          Mensaje
          <small className='contact_error'>{formik.errors.message}</small>
          <textarea
            className='contact_textarea'
            name='message'
            id='message'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
        </label>
        <button className='contact_btn' type='submit'>
          Enviar
        </button>
      </form>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

