import { useFormik } from 'formik'
import * as Yup from 'yup'
import { phoneRegExp } from '../utils'

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      company: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Name Is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email Is Required'),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Phone Number Is Required'),
      message: Yup.string()
        .min(20, 'Must be 20 characters or more')
        .required('Message Is Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values))
      formik.resetForm()
      // handle async task with this values
    },
  })
  return (
    <div className="col-start-3 col-end-6">
      <h3 className="text-xl font-semibold mb-2">Reach us quickly</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            placeholder="Enter name"
            className="w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
          />
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="Enter email"
            className="w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <input
            type="number"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            placeholder="Your phone"
            className="w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
          />
          <input
            type="text"
            name="company"
            onChange={formik.handleChange}
            value={formik.values.company}
            onBlur={formik.handleBlur}
            placeholder="Your company"
            className="w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
          />
        </div>
        <textarea
          name="message"
          type="text"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Message"
          rows={7}
          className="mb-6 w-full bg-slate-100 outline-none border-0 focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md"
        ></textarea>
        <div className="flex">
          <button type="submit" className="ml-auto bg-cyan-500 px-5 py-2.5 rounded-md">
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
