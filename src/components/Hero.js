import { Container, Row, Col, Image } from "react-bootstrap"
import hero from "../images/Hero/hero1.jpeg"


const Hero = () => {

  const comapanyLogos = [
    "/TrustBadges/image.jpg",
    "/TrustBadges/image2.jpg",
    "/TrustBadges/image3.jpg",
    "/TrustBadges/image4.jpg"
  ]

  return (
    <section className="">
    <Container className="py-3 px-2">
      <Row>
        <Col lg={6} sm={12} className="lg:flex lg:flex-col lg:justify-start lg:items-start flex flex-col justify-center items-center">
        <h1 className="lg:mt-[4rem] md:mt-[4rem] lg:text-left lg:text-5xl text-4xl md:text-center font-bold text-sky-900">Your Solution Legal Consultancy</h1>
        <p className="mt-4 text-lg text-[#444a59] lg:text-left md:text-center">We are here to help you take care of your legality with the best service especially for you.</p>
        <button 
         className="mb-4 hover:scale-105 hover:duration-300 flex justify-center items-center bg-sky-900 hover:bg-sky-950 py-2.5 px-4 text-white text-base rounded-2"
         onClick={() => {}}  
        >
         Get Started
        </button>
        <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center">
          <p className="text-[#444a59a9] text-base">Trusted by 10+ companies in Indonesia</p>
          <div className="flex gap-2 justify-center items-center">
            {comapanyLogos.map((logo, index) => (
             <img key={index} src={logo} alt={`Company Logo ${index}`} width={80} height={80}/>
            ))}
          </div>
        </div>
        </Col>
        <Col lg={6} sm={12} className="lg:mt-0 mt-4 flex flex-col justify-center items-center">
        <Image src={hero} alt="hero" roundedCircle className="w-[80%]"/>
        <div className="rounded-lg mx-auto flex flex-col justify-center items-center relative bottom-8 w-[50%] h-[80px] bg-white border-2 border-solid border-gray-100">
          <h6 className="font-bold text-base text-[#444a59]">Tiara Andini</h6>
          <p className="text-[#444a59a4] text-base">-Lawyer</p>
        </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Hero