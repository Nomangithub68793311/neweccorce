import React from 'react'
import appStore from '../images/app-store.png'
import googlePlay from '../images/google-play.png'

const AboutScreenshot = () => {
  return (
    <div className="bg-gray-50">
      <div className="container py-20">
        <div className="text-center">
          <h1 className="text-4xl text-gray-500 mb-6">Screenshots</h1>
          <p className="max-w-xl mx-auto mb-6">
            Nam et sagittis diam. Sed tempor augue sit amet egestas scelerisque.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <div>
            <button className="mr-2">
              <img src={appStore} alt="appStore" className="w-40" />
            </button>
            <button>
              <img src={googlePlay} alt="googlePlay" className="w-40" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutScreenshot
