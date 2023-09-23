import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import { AiTwotoneEnvironment } from "react-icons/ai"
import { FaBriefcase, FaRocket, FaPeopleArrows } from "react-icons/fa"


const Services = () => {

  
  const servicesOffered = [
    {
        id: 0,
         icon: <AiTwotoneEnvironment size={25} />,
         title: "Environmental Law",
         subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        id: 1,
         icon: <FaBriefcase size={25} />,
         title: "Corporate and Commercial",
         subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        id: 0,
         icon: <FaRocket size={25} />,
         title: "Information and Technology",
         subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        id: 0,
         icon: <FaPeopleArrows size={25} />,
         title: "Other Services",
         subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }
]

  return (
    <section className="bg-sky-100 py-12 md:px-[10rem] px-6">
     <Container>
       <Row>
         <Col lg={6} sm={12} className="lg:flex lg:flex-col lg:justify-center lg:items-center">
         <div className="">
            <h2 className="text-left text-[#2f323b] lg:text-4xl text-2xl font-semibold mb-4">Why do we help with legalization?</h2>
            <p className="text-left text-[#444a59] text-base font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
         </div>
         </Col>
         <Col lg={6} sm={12} className="mt-4">
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
         {servicesOffered.map((service, index) => (
          <div key={index} className="bg-white rounded-lg border-2 border-solid border-white py-4 px-6">
            <div className="text-left mb-3 text-sky-900">{service.icon}</div>
            <div className="text-left">
              <h4 className="font-semibold text-2xl text-sky-900 mb-2">{service.title}</h4>
              <p className="font-medium text-base text-[#444a59]">{service.subtitle}</p>
            </div>
          </div>
          ))}
         </div>
         </Col>
        </Row>
     </Container>
    </section>
  )
}

export default Services