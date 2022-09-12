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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter ,
  NavLink
} from "react-router-dom";
import YourCourses from './YourCourses.js';
export default function wlecome() {
  return (
   
    // <Router>
             <Flex flexDirection='column' pt={{ base: '120px', md: '150px' }}>
			<SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} spacing='24px'>
      <div id='welcome'>
        <div className='nojja'>
        <h4 id='nojawelcome'>NOJA School<br></br>
        WELCOME IN 
        <br>
        </br>
        Darkcode
        <br></br></h4>
        </div>
        <br>
        </br>
         <p className='welcomeparagaraphe'>Welcome to the community, we're happy to have you in Precourse! Precourse should
             guide you through most everything you need on your journey to day one of class.</p>
             <br>
             </br>
             <p className='welcomeparagaraphe'>
             Here you'll find a collection of materials all NOJA students complete before
              their first day at the intensive. We recommend you progress through the material in a
               linear format; learning to program is an iterative process, and many topics build upon
                each other. You will be held responsible for knowing the Precourse content and
                 completing all exercises.
             </p>
             <br>
             </br>
             <p className='welcomeparagaraphe'>
             Make sure you allocate enough time. The sum of our time estimates for this material
              is 80-100 days, so you must take this into account when planning out your time. 
              Remember, you will not be allowed to begin the course if these assignments are not
               completed. Identifying potential stumbling blocks early on is key to you having a
                smooth runway up to the course
             </p>
             <br>
             </br>
             <p className='welcomeparagaraphe'>
             If you anticipate that you will not be able to complete the material before your
              deadline, please reach out to your Admissions contact.
             </p>
             <br>
             </br>
             <h5 className='welcomeparagaraphe'>We don't go to sleep when we are thired we go to sleepwhen we are done</h5>
              <br>
             </br>
             <RadioGroup defaultValue='1'>
  <Stack spacing={4} direction='row'>
    <Radio  >
      <p className='welcomeparagaraphe'>If you are ready to start with us to reach your gols please check and let's  </p>
    </Radio>
      <Link to='/YourCourses'>GO</Link>
  </Stack>
</RadioGroup>

   
  
             </div>
			</SimpleGrid>
		</Flex>
    

   
  )
}
