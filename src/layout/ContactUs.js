import ContactInfo from './../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import ContactBrandSocial from '../components/ContactBrandSocial'

const ContactUs = () => {
  return (
    <div className="mt-10 container">
      <div className="py-20 grid grid-cols-5 gap-5">
        <ContactInfo />
        <ContactForm />
      </div>
      <ContactBrandSocial />
    </div>
  )
}

export default ContactUs
