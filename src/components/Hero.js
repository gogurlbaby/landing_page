import { Container, Row, Col, Image } from "react-bootstrap"
import hero from "../images/hero1.jpeg"

const Hero = () => {
  return (
    <section className="">
    <Container className="py-20 px-2">
      <Row>
        <Col md={6} sm={12} className="lg:flex lg:flex-col lg:justify-start lg:items-start flex flex-col justify-center items-center">
        <h1 className="lg:mt-20 lg:text-left lg:text-5xl text-4xl md:text-center text-600 text-blue-900">Your Solution Legal Consultancy</h1>
        <p className="mt-4 text-lg text-[#444a59] lg:text-left md:text-center">We are here to help you take care of your legality with the best service especially for you.</p>
        <button 
         className="hover:scale-105 hover:duration-300 flex justify-center items-center bg-blue-900 hover:bg-[#060757] py-2.5 px-4 text-white text-base rounded-2"
         onClick={() => {}}  
        >
         Get Started
        </button>
        <h4 className="mt-5">Remember that the level of conflict largely depends on how extensively you customize the styles and how the different components interact with each other.</h4>
        </Col>
        <Col md={6} sm={12} className="lg:mt-0 mt-4">
        <Image src={hero} alt="hero" roundedCircle />
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Hero