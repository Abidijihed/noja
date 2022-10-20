// Chakra imports
import {
	Box,
	Flex,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Text,
	Radio
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import 'react-phone-number-input/style.css';
import './SignIn.css';
import PhoneInput from 'react-phone-number-input';
// import axios from 'axios'
// Assets
import signInImage from 'assets/img/signInImage.png';

// Custom Components
import AuthFooter from 'components/Footer/AuthFooter';
import GradientBorder from 'components/GradientBorder/GradientBorder';
import React, { Component } from 'react';
import axios from 'axios';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

export default class SignIn extends Component {
    constructor() {
		super();

		this.state = {
			
			Password: '',
			Email: '',
			checklogin:''
        }
    }
	goto(){
		window.location.href='http://159.223.170.39/#/auth/Dashboard#/auth/dashboard'	
	}
    handleChange=(e)=> {
		this.setState({[e.target.name]: e.target.value });
		console.log(this.state);
	}
	StudentSignIn(e){
		e.preventDefault();
		const {Password,Email}=this.state
		axios.post('http://159.223.170.39/api/login',{
               Email:Email,
			   Password:Password
		}).then((res)=>{
			if(res.data[1]==="secsuss"){
				sessionStorage.setItem('_stud',res.data[0])
				sessionStorage.setItem('_idstud',res.data[2])
				this.setState({checklogin:res.data[1]})
				
			}
		})
	}
  render() {
    const titleColor = 'white';
		const textColor = 'gray.400';
		const {checklogin}=this.state

		
    return (
		checklogin==="secsuss"?
		(
<Flex
	direction="column"
	w="100%"
	background="transparent"
	mt={{ base: '50px', md: '50px', lg: '160px', xl: '250px' }}
	mb={{ base: '60px', lg: '95px' }}
	>
<Alert
status='success'
variant='subtle'
flexDirection='column'
alignItems='center'
justifyContent='center'
textAlign='center'
width='100%'
height='500px'
>
<AlertIcon boxSize='40px' mr={0} />
<AlertTitle mt={4} mb={1} fontSize='lg'>
Welcome! TO NOJA <br></br>YOU Did Join The World OFF Success
</AlertTitle>
<AlertDescription maxWidth='sm' size="20px">
<h3>We don't go to sleep when we are thired we go to sleepwhen we are done

If you are ready to start with us to reach your gols please check </h3>
<Radio backgroundColor='white' margin='5px 5px' >
	</Radio> 
</AlertDescription>
</Alert>
<Button onClick={()=>this.goto()}  alignItems="center">
	Let'S Do It Together
</Button>
</Flex>
		):
        (<Flex position="relative">
				<Flex
					minH="100vh"
					h={{ base: '120vh', lg: 'fit-content' }}
					w="100%"
					maxW="1044px"
					mx="auto"
					pt={{ sm: '100px', md: '0px' }}
					flexDirection="column"
					me={{ base: 'auto', lg: '50px', xl: 'auto' }}
				>
					<Flex
						alignItems="center"
						justifyContent="start"
						style={{ userSelect: 'none' }}
						mx={{ base: 'auto', lg: 'unset' }}
						ms={{ base: 'auto', lg: 'auto' }}
						w={{ base: '100%', md: '50%', lg: '450px' }}
						px="50px"
					>
						<Flex
							direction="column"
							w="100%"
							background="transparent"
							mt={{ base: '50px', md: '50px', lg: '160px', xl: '150px' }}
							mb={{ base: '60px', lg: '95px' }}
						>
							<Heading color={titleColor} fontSize="32px" mb="10px">
								Nice to see you!
							</Heading>
							<Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
								Enter Your Information To Join our Community
							</Text>
							<Flex>
                            <FormControl>
								<FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
									Email<span className="mendatory">*</span>
								</FormLabel>
								<GradientBorder mb="24px" w={{ base: '100%', lg: 'fit-content' }} borderRadius="20px">
									<Input
                                      onChange={this.handleChange}
										color="white"
										bg="rgb(19,21,54)"
										border="transparent"
										borderRadius="20px"
										fontSize="sm"
										size="lg"
										w={{ base: '100%', md: '346px' }}
										maxW="100%"
										h="46px"
										type="email"
										placeholder="Your email"
										name="Email"
									/>
								</GradientBorder>
                                <FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
									Password<span className="mendatory">*</span>
								</FormLabel>
								<GradientBorder mb="24px" w={{ base: '100%', lg: 'fit-content' }} borderRadius="20px">
									<Input
                                      onChange={this.handleChange}
										color="white"
										bg="rgb(19,21,54)"
										border="transparent"
										borderRadius="20px"
										fontSize="sm"
										size="lg"
										w={{ base: '100%', md: '346px' }}
										maxW="100%"
										h="46px"
										type="password"
										placeholder="Your Password"
										name="Password"
									/>
								</GradientBorder>
								</FormControl>
                                </Flex>

							<Button
								variant="brand"
								fontSize="10px"
								type="submit"
								w="100%"
								maxW="350px"
								h="45"
								mb="20px"
								mt="20px"
                
                             onClick={(e)=>this.StudentSignIn(e)}
							>
								SignIn
							</Button>
						</Flex>
					</Flex>
					<Box
						w={{ base: '335px', md: '450px' }}
						mx={{ base: 'auto', lg: 'unset' }}
						ms={{ base: 'auto', lg: 'auto' }}
						mb="80px"
					>
						<AuthFooter />
					</Box>
					<Box
						display={{ base: 'none', lg: 'block' }}
						overflowX="hidden"
						h="100%"
						maxW={{ md: '50vw', lg: '50vw' }}
						minH="100vh"
						w="960px"
						position="absolute"
						left="0px"
					>
						<Box
							bgImage={signInImage}
							w="100%"
							h="100%"
							bgSize="cover"
							bgPosition="50%"
							position="absolute"
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
						>
							<Text textAlign="center" color="white" letterSpacing="8px" fontSize="20px" fontWeight="500">
								INSPIRED BY THE FUTURE:
							</Text>
							<Text
								textAlign="center"
								color="transparent"
								letterSpacing="8px"
								fontSize="36px"
								fontWeight="bold"
								bgClip="text !important"
								bg="linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)"
							>
								FOR NEW GENERATIONS CREATIVES
							</Text>
						</Box>
					</Box>
				</Flex>
			</Flex>
    )
	)
  }
}
