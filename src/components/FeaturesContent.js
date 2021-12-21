import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import '@reach/tabs/styles.css'
import tabImageOne from '../images/tab-image-1.png'
import tabImageTwo from '../images/tab-image-2.png'
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'
import { GiPirateHook } from 'react-icons/gi'
import { BsBarChartLine } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineTrophy } from 'react-icons/ai'

const FeaturesContent = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 pt-20 pb-16">
      <div className="container">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-5">ApeTech Feature Overview</h1>
          <p className="max-w-2xl m-auto mb-8">
            ApeTech is a comprehensive, secured and compatible App solution for
            an organization. This is a web based solution for accounting,
            inventory, sale, purchase and party management.
          </p>
        </div>
        <div>
          <Tabs className="text-white">
            <TabList className="bg-transparent flex justify-center mb-4">
              <Tab>
                <div className="flex justify-center items-center">
                  <AiFillApple className="text-xl text-black" />
                  <p className="pl-1 text-black">IOS</p>
                </div>
              </Tab>
              <Tab>
                <div className="flex justify-center items-center">
                  <AiFillAndroid className="text-xl text-black" />
                  <p className="pl-1 text-black">ANDROID</p>
                </div>
              </Tab>
            </TabList>

            <TabPanels className="py-5">
              <TabPanel>
                <div className="grid grid-cols-2 gap-5 ">
                  <div>
                    <img src={tabImageOne} alt="tabImageOne" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Apple Store</h3>
                    <p className="mb-6">
                      Dramatically re-engineer optimal e-markets vis-a-vis
                      top-line web services. Globally drive 24/7 meta-services
                      with adaptive products. Professionally matrix leading-edge
                      experiences after high-quality networks. Appropriately
                      extend 24/7 customer service before unique communities.
                      Intrinsicly harness resource sucking channels and virtual
                      materials.
                    </p>
                    <div className="grid grid-cols-2 grid-rows-2 gap-8">
                      <div className="flex justify-start items-center">
                        <GiPirateHook className="mr-6 text-4xl font-bold" />
                        <p className="text-lg">Scheduling Big Data</p>
                      </div>

                      <div className="flex justify-start items-center">
                        <BsBarChartLine className="mr-6 text-4xl font-bold" />
                        <p className="text-lg">Online Consultations</p>
                      </div>

                      <div className="flex justify-start items-center">
                        <BiSupport className="mr-6 text-4xl font-bold" />
                        <p className="text-lg">Live 24/7 Support</p>
                      </div>

                      <div className="flex justify-start items-center">
                        <AiOutlineTrophy className="mr-6 text-4xl font-bold" />
                        <p className="text-lg">Identification & Smart</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-2 gap-5 ">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Android Apps on Google Play
                    </h3>
                    <p className="mb-6">
                      Dramatically re-engineer optimal e-markets vis-a-vis
                      top-line web services. Globally drive 24/7 meta-services
                      with adaptive products. Professionally matrix leading-edge
                      experiences after high-quality networks. Appropriately
                      extend 24/7 customer service before unique communities.
                      Intrinsicly harness resource sucking channels and virtual
                      materials.
                    </p>
                    <div className="grid grid-cols-2 grid-rows-2 gap-8">
                      <div className="flex justify-start items-center">
                        <GiPirateHook className="mr-6 text-4xl font-bold" />
                        <p className="text-lg">Scheduling Big Data</p>
                      </div>

                      <div className="flex justify-start items-center">
                        <BsBarChartLine className="mr-6 text-4xl font-bold" />
                        <p className="text-lg">Online Consultations</p>
                      </div>

                      <div className="flex justify-start items-center">
                        <BiSupport className="mr-6 text-4xl font-bold" />
                        <p className="text-lg">Live 24/7 Support</p>
                      </div>

                      <div className="flex justify-start items-center">
                        <AiOutlineTrophy className="mr-6 text-4xl font-bold" />
                        <p className="text-lg">Identification & Smart</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={tabImageTwo} alt="tabImageTwo" />
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default FeaturesContent
