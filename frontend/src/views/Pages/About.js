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
import signUpImage from '../../assets/img/signUpImage.png'
import Card from 'components/Card/Card.js';

export default function About() {
  return (
   
    // <Router>
	<Flex flexDirection="column" pt={{ base: '125px', md: '100px' }}>
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', '2xl': '2fr 1.2fr 1.5fr' }} my="26px" gap="18px">
				{/* Welcome Card */}
				
				{/* Satisfaction Rate */}
				<Card gridArea= '1/1/20/2' >
				<Box
							bgImage={signUpImage}
							w="100%"
							h="100%"
							bgSize="cover"
							bgPosition="50%"
							// position="absolute"
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

					
					
				</Card>
				{/* Referral Tracking */}
				<Card gridArea='1/2/8/2'>
					<Flex direction="column">
						<Flex justify="space-around" align="center" mb="20px">
							<Text color="#fff" fontSize="lg" fontWeight="bold" fontFamily="serif">
								About  NOJA School !
							</Text>
							
						</Flex>
						<Flex justify="space-around" align="center" mb="40px">
							
							<Text color="#fff" fontSize="28px" fontWeight="bold" fontFamily="Gill Sans, sans-serif;">
							New Opportunities for Junior Academic<br></br>
							</Text>
							
						</Flex>
						<Flex direction={{ sm: 'column', md: 'row' }}>
							<Text color="#fff" fontSize="18px" fontFamily="cursive" mb="4px">
								Our coding bootcamps are challenging, life-changing, and designed to fit your schedule
								and skill level. We train students using a computer science and coding curriculum that
								models the exciting work being done in the software engineering industry. We'll help you
								launch the career you crave.
								<br />
								<br />
								Led by passionate and experienced instructors, engineers, and career advisors, our
								graduates become software engineers that companies around the world want to hire.
							</Text>
						</Flex>
					</Flex>
				</Card>
			</Grid>
		</Flex>
    

   
  )
}
