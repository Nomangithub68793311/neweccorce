import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import customerOne from '../images/customer-1.jpg'
import customerTwo from '../images/customer-2.jpeg'
import customerThree from '../images/customer-3.jpg'
import customerFour from '../images/customer-4.jpg'

const Testimonial = () => {
  const data = [
    {
      id: 1,
      description:
        'Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.',
      url: customerOne,
    },
    {
      id: 2,
      description:
        'Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.',
      url: customerTwo,
    },
    {
      id: 3,
      description:
        'Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.',
      url: customerThree,
    },
    {
      id: 4,
      description:
        'Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.',
      url: customerFour,
    },
  ]

  return (
    <div className="bg-gray-100">
      <div className="container py-14">
        <div>
          <h2 className="text-center text-3xl font-bold mb-5">
            10k+ Experts Trust Us
          </h2>
          <p className="text-center max-w-2xl m-auto mb-8 text-gray-500">
            Streamlining different processes and workflows by using user access
            control Onebook prompts efficiency and productivity levels of an
            organization, and reduces operating costs.
          </p>
        </div>

        <CarouselProvider
          naturalSlideWidth={100}
          totalSlides={data.length}
          naturalSlideHeight={30}
          visibleSlides={2}
          infinite={true}
          isPlaying={true}
          interval={5000}
          className="z-10"
        >
          <Slider className="h-auto">
            {data.map((info, index) => (
              <Slide index={index} key={info.id}>
                <div className="px-5 grid grid-cols-6">
                  <div>
                    <img
                      src={info.url}
                      alt={info.id}
                      className="h-full rounded-full"
                    />
                  </div>
                  <div className="col-start-2 col-end-7">
                    <p className="w-full pl-3">{info.description}</p>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
          <div className="flex my-2">
            <ButtonBack className="ml-auto border-0 bg-white px-2 py-2 mr-1 rounded-md hover:bg-indigo-600 hover:text-white transition-all ease-in-out duration-300">
              <AiFillCaretLeft />
            </ButtonBack>
            <ButtonNext className="border-0 bg-white px-2 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition-all ease-in-out duration-300">
              <AiFillCaretRight />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  )
}

export default Testimonial
