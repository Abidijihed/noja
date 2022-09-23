
// Chakra imports
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  IconButton,
  InputGroup,
	InputLeftElement,
  useColorModeValue,
  Input 
} from "@chakra-ui/react";

import {
  HomeIcon,
  StatsIcon,
} from "components/Icons/Icons";
import noja from 'assets/img/zra.png'

import { EmailIcon,LockIcon } from '@chakra-ui/icons'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";
import { BellIcon, SearchIcon } from '@chakra-ui/icons';
import "./zed.css"
export default function AuthNavbar(props) {
  
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const { logo, logoText, secondary, ...rest } = props;
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  // Chakra color mode
  let navbarIcon = "white";
  let mainText = "white";
  let inputBg = '#0F1535';
	let searchIcon = 'white';
  let navbarBg =
    "linear-gradient(123.64deg, rgba(255, 255, 255, 0) -22.38%, rgba(255, 255, 255, 0.039) 70.38%)";
  let navbarBorder = "rgba(226, 232, 240, 0.3)";
  let navbarShadow = useColorModeValue(
    "0px 7px 23px rgba(0, 0, 0, 0.05)",
    "none"
  );
  let navbarFilter = useColorModeValue(
    "none",
    "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
  );
  let navbarBackdrop = "blur(50px)";
  let navbarPosition = "fixed";
  var brand = (
    <>
                    

    <Link
      href={`${process.env.PUBLIC_URL}/#/auth/Dashboard`}
      target='_blank'
      display='flex'
      lineHeight='100%'
      fontWeight='bold'
      justifyContent='center'
      alignItems='center'
      color={mainText}>

      <Box>
      
        <img src={noja} id='ournoja' />
      
      </Box>
    </Link>
    </>
  );
  var linksAuth = (
    
    <HStack display={{ sm: "none", lg: "flex"}} >
           

      <NavLink to='/auth/dashboard'>
        <Button
          fontSize='sm'
          ms='0px'
          px='0px'
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant='transparent-with-icon'
          leftIcon={<HomeIcon color='blue' w='18px' h='18px' me='0px' />}>
          <Text>Dashboard</Text>
        </Button>
      </NavLink>
      <NavLink to='/auth/profile'>            
        <Button
          fontSize='sm'
          ms='0px'
          px='0px'
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant='transparent-with-icon'
          leftIcon={<AccountBoxIcon color='blue' w='18px' h='18px' me='0px' />}>
          <Text>Profile</Text>
        </Button>
      </NavLink>
      <NavLink to='/auth/Sudents'>            
        <Button
          fontSize='sm'
          ms='0px'
          px='0px'
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant='transparent-with-icon'
          leftIcon={<StatsIcon color='blue' w='18px' h='18px' me='0px' />}>
          <Text>Sudents</Text>
        </Button>
      </NavLink>
      <NavLink to='/auth/contact'>            
        <Button
          fontSize='sm'
          ms='0px'
          px='0px'
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant='transparent-with-icon'
          leftIcon={<EmailIcon color='blue' w='18px' h='18px' me='0px' />}>
          <Text>Contact</Text>
        </Button>
      </NavLink>
      <NavLink to='/auth/About'>            
        <Button
          fontSize='sm'
          ms='0px'
          px='0px'
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant='transparent-with-icon'
          leftIcon={<InfoIcon color='blue !important' w='15px' h='15px' me='0px' />}>
          <Text>About</Text>
        </Button>
      </NavLink>

    </HStack>
  );
  return (
    <Flex
      position={navbarPosition}
      top='16px'
      left='50%'
      transform='translate(-50%, 0px)'
      background={navbarBg}
      border='2px solid'
      borderColor={navbarBorder}
      boxShadow={navbarShadow}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderRadius='20px'
      px='5px'
      py='20px'
      mx='auto'
      width='1044px'
      maxW='90%'
      alignItems='center'>
      <Flex w='100%' justifyContent={{ sm: "start" , lg:'space-between'}}>
        {brand}
        
        {linksAuth}
        <InputGroup
				cursor="pointer"
				bg={inputBg}
				borderRadius="15px"
				borderColor="rgba(226, 232, 240, 0.3)"
				w={{
					sm: '100px',
					md: '200px'
				}}
				me={{ sm: 'auto', md: '5px' }}
			>
				<InputLeftElement
					children={
						<IconButton
							bg="inherit"
							borderRadius="inherit"
							_hover="none"
							_active={{
								bg: 'inherit',
								transform: 'none',
								borderColor: 'transparent'
							}}
							_focus={{
								boxShadow: 'none'
							}}
							icon={<SearchIcon color={searchIcon} w="15px" h="15px" />}
						/>
					}
				/>
				<Input fontSize="xs" py="15px" color={mainText} placeholder="Type here..." borderRadius="inherit" />
			</InputGroup>
      <Box
          ms={{ base: "auto", lg: "0px" }}
          display={{ base: "flex", lg: "none" }}
          
          >
          
          <SidebarResponsive
            iconColor='white'
            logoText={props.logoText}
            secondary={props.secondary}
            routes={routes}
            {...rest}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
