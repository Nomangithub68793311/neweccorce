import { BsFillTelephoneFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

const ContactInfo = () => {
  return (
    <div className="col-start-1 col-end-3">
      <div className="mb-3">
        <h1 className="text-3xl font-bold py-2">Contact with us</h1>
        <p className="py-2 text-gray-600">
          It's very easy to get in touch with us. Just use the contact form or
          pay us a visit for a coffee at the office. Dynamically innovate
          competitive technology after an expanded array of leadership.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Head Office</h2>
        <p className="pb-2 text-gray-600">
          121 King St, Melbourne VIC 3000, Australia
        </p>
        <div>
          <div className="flex items-center">
            <BsFillTelephoneFill className="mr-2" />
            <p className="text-gray-600">Phone: +61 2 8376 6284</p>
          </div>
          <div className="flex items-center">
            <FiMail className="mr-2" />
            <p>Email : hello@yourdomain.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
