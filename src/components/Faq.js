import AccordionContainer from './AccordionContainer'

function Faq() {
  return (
    <div className="bg-gray-50">
      <div className="container py-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">Faq's</h2>
          <p className="my-3 text-gray-400">
            we believe in making simple and fair pricing plans. Choose your next
            successful plan and get started today!.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <AccordionContainer />
          <AccordionContainer />
        </div>
      </div>
    </div>
  )
}

export default Faq
