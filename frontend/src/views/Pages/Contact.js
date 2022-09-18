
    import React, { useState }  from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Grid,
  Text,
  DarkMode,
} from "@chakra-ui/react";
import Card from 'components/Card/Card.js';
import { Select } from '@chakra-ui/react'
import 'react-phone-number-input/style.css'
import './SignIn.css'
import PhoneInput from 'react-phone-number-input'
import { EmailIcon,LockIcon } from '@chakra-ui/icons'

// Assets
import signInImage from "assets/img/signInImage.png";

// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";
import './contact.css'

function SignIn() {
  const [value, setValue] = useState()
  const [count, setName] = useState("");

  const titleColor = "white";
  const textColor = "gray.400";

  return (



<Flex flexDirection="column" pt={{ base: '120px', md: '75px' }}>
			<Grid
				templateColumns={{ sm: '1fr', lg: '1.7fr 1.3fr' }}
				maxW={{ sm: '100%', md: '100%' }}
				gap="24px"
				mb="24px"
			>
				{/* Sales Overview */}

				{/* Active Users */}
				<Card p="16px">
        <Heading color={titleColor} fontSize='32px' mb='10px'>
              Nice to see you!
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
                Fill The Form & Send it To Contact Us
            </Text>
            <Flex>
            <FormControl>
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                Full Name<span className="mendatory">*</span> 
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                onChange={setName}
                  color='white'
                  bg='rgb(19,21,54)'
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px"}}
                  maxW='100%'
                  h='46px'
                  type='text'
                  placeholder='Your FirstName'
                />
              </GradientBorder>
          
         
            
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                Email<span className="mendatory">*</span> 
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg='rgb(19,21,54)'
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  type='email'
                  placeholder='Your email adress'
                />
              </GradientBorder>
         
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                Subject<span className="mendatory">*</span> 
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg='rgb(19,21,54)'
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  type='text'
                  placeholder='Your Subject'
                />
              </GradientBorder>
         
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                Message<span className="mendatory">*</span> 
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg='rgb(19,21,54)'
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h="100px"
                  type='text'
                  placeholder='Your Message'
                />
              </GradientBorder>
              </FormControl>
           </Flex>
             
            <Button
              // background="rgb(19,21,54)"
              variant='brand'
              fontSize='10px'
              type='submit'
              w='100%'
              maxW='350px'
              h='45px'
              mb='20px'
              mt='20px'>
              Send Email
            </Button>
				</Card>

			

			</Grid>
		
      <div className="row">
                <div className="col-md-4">
                  <div className="dbox text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text">
                      <p><span id='hey'>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dbox text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text">
                      <p><span>Phone:</span> <a>+ 1235 2355 98</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dbox text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text">
                      <p><span>Email:</span> <a>info@yoursite.com</a></p>
                    </div>
                  </div>
                </div>
              
              </div>
		</Flex>







   
  );
}

export default SignIn;



