// Chakra imports
import {
	Box,
	Flex,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Text
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
			FirstName: '',
			LastName: '',
			Email: '',
			Address: '',
			PhoneNumber: '',
			Skills: '',
      toglle:false
		};
	}
	handleChange=(e)=> {
		this.setState({[e.target.name]: e.target.value });
		console.log(this.state);
	}

  generatePassword=()=> {
    var length = 36,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345678/%@?$£9",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
  JoinOurcomunities (){
  const {FirstName,LastName,Email,Address,PhoneNumber,Skills}=this.state
    axios.post(`http://localhost:3332/api/createstudents`,{
      FirstName:FirstName,
      LastName:LastName,
      Email:Email,
      Address:Address,
      PhoneNumber:PhoneNumber.toString(),
      Skills:Skills,
      Password:this.generatePassword(),
      creatAt:new Date().toLocaleString()
    }).then((res)=>{
      if(res.status===200 && res.data==="user created"){
        this.setState({toglle:true})
        localStorage.setItem('user',"usere have ben submit")
          
      }
    })
  }
	render() {
		const titleColor = 'white';
		const textColor = 'gray.400';
    const {PhoneNumber,toglle}=this.state
    console.log(toglle)

    return (
toglle===true? (
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
    Application submitted!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for submitting your application. Our team will get back to you soon.
  </AlertDescription>
</Alert>
</Flex>
        
):
		 (
			<Flex position="relative">
        {console.log(this.state)}
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
										FirstName<span className="mendatory">*</span>
									</FormLabel>
									<GradientBorder
										mb="24px"
										w={{ base: '100%', lg: 'fit-content' }}
										borderRadius="20px"
									>
										<Input
                    onChange={this.handleChange}
											color="white"
											bg="rgb(19,21,54)"
											border="transparent"
											borderRadius="20px"
											fontSize="sm"
											size="lg"
											w={{ base: '100%', md: '160px' }}
											maxW="100%"
											h="46px"
											type="text"
											placeholder="Your FirstName"
											name="FirstName"
										/>
									</GradientBorder>
								</FormControl>
								<FormControl>
									<FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
										LastName<span className="mendatory">*</span>
									</FormLabel>
									<GradientBorder
										mb="24px"
										w={{ base: '100%', lg: 'fit-content' }}
										borderRadius="20px"
									>
										<Input
                     onChange={this.handleChange}
											color="white"
											bg="rgb(19,21,54)"
											border="transparent"
											borderRadius="20px"
											fontSize="sm"
											size="lg"
											w={{ base: '100%', md: '160px' }}
											maxW="100%"
											h="46px"
											type="text"
											placeholder="Your LastName"
											name="LastName"
										/>
									</GradientBorder>
								</FormControl>
							</Flex>
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
							</FormControl>
							<FormControl>
								<FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
									Address<span className="mendatory">*</span>
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
										type="text"
										placeholder="Your Address"
                    name='Address'
									/>
								</GradientBorder>

								<FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
									PhoneNumber<span className="mendatory">*</span>
								</FormLabel>
								<GradientBorder mb="24px" w={{ base: '100%', lg: 'fit-content' }} borderRadius="20px">
									<PhoneInput
										placeholder="Enter Your phone number"
										defaultCountry="TN"
										limitMaxLength='8'
                    value={PhoneNumber}
                    onChange={ PhoneNumber  => this.setState({PhoneNumber:PhoneNumber })}									/>
								</GradientBorder>
								{/* <MuiPhoneNumber defaultCountry={'us'} />, */}
							</FormControl>
							<FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
								Choose your Favoret Skills<span className="mendatory">*</span>
							</FormLabel>
							<FormControl>
								<GradientBorder mb="24px" w={{ base: '100%', lg: 'fit-content' }} borderRadius="20px">
									<Select placeholder="Select Your Skills" className="skills" onChange={(event)=>this.setState({Skills:event.target.value})}>
										<option
											value="Full StackJavaScript Web Developer"	className="yourselect">
											Full StackJavaScript Web Developer
										</option>
										<option value="React Js" className="yourselect">
											React Js
										</option>
										<option value="Introduction To web1" className="yourselect">
											Introduction To web1
										</option>
									</Select>
								</GradientBorder>
							</FormControl>

							<FormControl display="flex" alignItems="center">
								{/* <DarkMode>
                <Switch id='remember-login' colorScheme='brand' me='10px' />
              </DarkMode> */}
							</FormControl>
							<Button
								variant="brand"
								fontSize="10px"
								type="submit"
								w="100%"
								maxW="350px"
								h="45"
								mb="20px"
								mt="20px"
                // onKeyDown={()=>this.JoinOurcomunities()}
                onClick={()=>this.JoinOurcomunities()}
							>
								Join Us
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
