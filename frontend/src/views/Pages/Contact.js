import React, { Component } from 'react';
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
	DarkMode
} from '@chakra-ui/react';
import Card from 'components/Card/Card.js';

import 'react-phone-number-input/style.css';
import './SignIn.css';

import { Alert, AlertIcon } from '@chakra-ui/react';
// Assets
import axios from 'axios'
import GradientBorder from 'components/GradientBorder/GradientBorder';
import './contact.css';
export default class Contact extends Component {
	constructor() {
		super();
		this.state = {
			FullName: '',
			Email: '',
			Subject: '',
			Message: '',
			errors: ''
		};
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		console.log(this.state);
	}
	handleValidation() {
		const { FullName, Email, Subject, Message } = this.state;
		let errors = {};
		let validation = true;
		if (!FullName) {
			validation = false;
			errors.FullName = 'FullName Cannot be Empty !!!';
		}
		if (typeof FullName !== 'undefined') {
			if (!FullName.match(/^[a-zA-Z]+$/)) {
				validation = true;
				errors.FullName = 'FullName Containe Just Only letters UperCase, LowerCase !!!';
			}
		}
		if (typeof Email !== 'undefined') {
			let lastAtPos = Email.lastIndexOf('@');
			let lastDotPos = Email.lastIndexOf('.');
			if (
				!(
					lastAtPos < lastDotPos &&
					lastAtPos > 0 &&
					Email.indexOf('@@') === -1 &&
					lastDotPos > 2 &&
					Email.length - lastDotPos > 2
				)
			) {
				validation = false;
				errors.Email = 'Your Email Shoold Write like xxxxxxxx@xxxxx.xxx !!!';
			}
		}
		if (!Message) {
			validation = false;
			errors.Message = 'You shoold write a Message';
		}
		if (!Subject) {
			validation = false;
			errors.Subject = 'Subject Cannot be Empty !!!';
		}
		this.setState({ errors: errors });
		return validation;
	}
	handleSubmit(e) {
		if(this.handleValidation()){
		e.preventDefault();
const {FullName,Email,Subject,Message}=this.state

		axios.post('http://localhost:5500/api/sendmail',{
			FullName:FullName,
			Email:Email,
			Subject:Subject,
			Message:Message
		}).then((response)=>{
			console.log(response)
		})
	}
}
	render() {
		const titleColor = 'white';
		const textColor = 'gray.400';
		const { errors } = this.state;
		return (
			<Flex flexDirection="column" pt={{ base: '120px', md: '175px' }}>
				<Grid
					templateColumns={{ sm: '1fr', lg: '1.7fr 1.3fr' }}
					maxW={{ sm: '100%', md: '100%' }}
					gap="24px"
					mb="24px"
				>
					{/* Sales Overview */}

					{/* Active Users */}
					<Card p="16px" alignItems="center">
						<Heading color={titleColor} fontSize="32px" mb="10px">
							Nice to see you!
						</Heading>
						<Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
							Fill The Form & Send it To Contact Us
						</Text>
						<Flex>
							<FormControl>
								<FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
									Full Name<span className="mendatory">*</span>
									{errors.FullName && (
										<Alert
											status="error"
											h="10px"
											borderRadius="20px"
											w="346px"
											fontSize="10px"
											color="black"
										>
											<AlertIcon />
											{errors.FullName}
										</Alert>
									)}
								</FormLabel>

								<GradientBorder mb="24px" w={{ base: '100%', lg: 'fit-content' }} borderRadius="20px">
									<Input
										onChange={(e) => this.handleChange(e)}
										color="white"
										bg="rgb(19,21,54)"
										border="transparent"
										borderRadius="20px"
										fontSize="sm"
										size="lg"
										w={{ base: '100%', md: '346px' }}
										maxW="100%"
										h="46px"
										type="text"
										placeholder="Your Full Name"
										name="FullName"
									/>

									{/* {validation.FullName && console.log(validation)} */}
								</GradientBorder>

								{/* <p color='red'>{validation.FullName}</p> */}

								<FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
									Email<span className="mendatory">*</span>
									{errors.Email && (
										<Alert
											status="error"
											h="10px"
											borderRadius="20px"
											w="346px"
											fontSize="10px"
											color="black"
										>
											<AlertIcon />
											{errors.Email}
										</Alert>
									)}
								</FormLabel>

								<GradientBorder mb="24px" w={{ base: '100%', lg: 'fit-content' }} borderRadius="20px">
									<Input
										onChange={(e) => this.handleChange(e)}
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
										placeholder="Your email adress"
										name="Email"
									/>
								</GradientBorder>

								<FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
									Subject<span className="mendatory">*</span>
									{errors.Subject && (
										<Alert
											status="error"
											h="10px"
											borderRadius="20px"
											w="346px"
											fontSize="10px"
											color="black"
										>
											<AlertIcon />
											{errors.Subject}
										</Alert>
									)}
								</FormLabel>
								<GradientBorder mb="24px" w={{ base: '100%', lg: 'fit-content' }} borderRadius="20px">
									<Input
										onChange={(e) => this.handleChange(e)}
										color="white"
										bg="rgb(19,21,54)"
										border="transparent"
										borderRadius="20px"
										fontSize="sm"
										size="lg"
										w={{ base: '100%', md: '346px' }}
										maxW="100%"
										h="46px"
										type="text"
										placeholder="Your Subject"
										name="Subject"
									/>
								</GradientBorder>

								<FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
									Message<span className="mendatory">*</span>
									{errors.Message && (
										<Alert
											status="error"
											h="10px"
											borderRadius="20px"
											w="346px"
											fontSize="10px"
											color="black"
										>
											<AlertIcon />
											{errors.Message}
										</Alert>
									)}
								</FormLabel>
								<GradientBorder mb="24px" w={{ base: '100%', lg: 'fit-content' }} borderRadius="20px">
									<Input
										onChange={(e) => this.handleChange(e)}
										color="white"
										bg="rgb(19,21,54)"
										border="transparent"
										borderRadius="20px"
										fontSize="sm"
										size="lg"
										w={{ base: '100%', md: '346px' }}
										maxW="100%"
										h="100px"
										type="text"
										placeholder="Your Message"
										name="Message"
									/>
								</GradientBorder>
							</FormControl>
						</Flex>

						<Button
							onClick={(e) => this.handleSubmit(e)}
							// background="rgb(19,21,54)"
							variant="brand"
							fontSize="10px"
							type="submit"
							w="100%"
							maxW="350px"
							h="45px"
							mb="20px"
							mt="20px"
						>
							Send Email
						</Button>
					</Card>
				</Grid>

				<div className="row">
					<div className="col-md-4">
						<div className="dbox text-center">
							<div className="icon d-flex align-items-center justify-content-center">
								<span className="fa fa-map-marker" />
							</div>
							<div className="text">
								<p>
									<span id="hey">Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="dbox text-center">
							<div className="icon d-flex align-items-center justify-content-center">
								<span className="fa fa-phone" />
							</div>
							<div className="text">
								<p>
									<span>Phone:</span> <a>+ 1235 2355 98</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="dbox text-center">
							<div className="icon d-flex align-items-center justify-content-center">
								<span className="fa fa-paper-plane" />
							</div>
							<div className="text">
								<p>
									<span>Email:</span> <a>info@yoursite.com</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</Flex>
		);
	}
}
