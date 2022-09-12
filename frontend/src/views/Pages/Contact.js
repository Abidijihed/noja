import React from 'react'
import './style.css'
import {
	Box,
	Button,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Grid,
	Icon,
	Progress,
	SimpleGrid,
	Spacer,
	Stack,
	Stat,
	StatHelpText,
	StatLabel,
	StatNumber,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	Tr,
  Radio, 
  RadioGroup
} from '@chakra-ui/react';
import './contact.css'
export default function Contact() {
  return (
   
    // <Router>
             <Flex flexDirection='column' pt={{ base: '120px', md: '150px' }}>
			<SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} spacing='24px'>
			<section className="ftco-section">
     
      <div className="container">
     
        <div className="row justify-content-center">
          <div className="col-8">
      
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters mb-5">
                <div className="col-md-7">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Contact Us</h3>
                    <div id="form-message-warning" className="mb-4"></div> 
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form  method="POST" id="contactForm" name="contactForm" className="contactForm"  >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="name">Full Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Name"
                                      />
                          </div>
                        </div>
                        <div className="col-md-6"> 
                          <div className="form-group">
                            <label className="label" htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email"
                                     />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" 
                                      />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="#">Message</label>
                            <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"
                                      ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="submit" value="send message"  className="btn btn-primary"/>
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
             
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text">
                      <p><span id='hey'>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text">
                      <p><span>Phone:</span> <a>+ 1235 2355 98</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text">
                      <p><span>Email:</span> <a>info@yoursite.com</a></p>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
			</SimpleGrid>
		</Flex>
    

   
  )
}
