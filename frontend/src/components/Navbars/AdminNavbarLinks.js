// Chakra Icons
import { BellIcon, SearchIcon } from '@chakra-ui/icons';
// Chakra Imports
import {
	Button,
	Flex,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text
} from '@chakra-ui/react';
// Assets
import avatar1 from 'assets/img/avatars/avatar1.png';
import avatar2 from 'assets/img/avatars/avatar2.png';
import avatar3 from 'assets/img/avatars/avatar3.png';
// Custom Icons
import { ProfileIcon, SettingsIcon } from 'components/Icons/Icons';
// Custom Components
import { ItemContent } from 'components/Menu/ItemContent';
import { SidebarResponsive } from 'components/Sidebar/Sidebar';
import PropTypes from 'prop-types';
import React,{useEffect,useState} from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'routes.js';
import { Icon, createIcon } from '@chakra-ui/react';
import './zed.css'
import axios from 'axios'
export default function HeaderLinks(props) {
const [data,setData]=useState([])
	
	const { variant, children, fixed, secondary, onOpen, ...rest } = props;

	// Chakra Color Mode
	let inputBg = '#0F1535';
	let mainText = 'gray.400';
	let navbarIcon = 'white';
	let searchIcon = 'white';

	if (secondary) {
		navbarIcon = 'white';
		mainText = 'white';
	}
	const settingsRef = React.useRef();
// 	useEffect (()=>{
// 		var count=0
// 		axios.get(`http://localhost:3332/api/getnotificationadmin`).then((res)=>{
// 			res.data.map((e)=>{
// 				if(e.new===1){
//                count+=1
// 			   setValuenotif(count)
// 				}
// 			})
// 	})
// })
	return (
		<Flex pe={{ sm: '0px', md: '16px' }} w={{ sm: '100%', md: 'auto' }} alignItems="center" flexDirection="row">

			{/* <SidebarResponsive
				iconColor="gray.500"
				logoText={props.logoText}
				secondary={props.secondary}
				routes={routes}
				
				{...rest}
			/> */}
		<InputGroup
				cursor="pointer"
				bg={inputBg}
				borderRadius="15px"
				borderColor="rgba(226, 232, 240, 0.3)"
				w={{
					sm: '128px',
					md: '200px'
				}}
				me={{ sm: 'auto', md: '20px' }}
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
				<Input fontSize="xs" py="11px" color={mainText} placeholder="Type here..." borderRadius="inherit" />
			</InputGroup>
			<Menu>
				<MenuButton align="center">
					<BellIcon color={navbarIcon} mt="-4px" w="30px" h="30px" />
          <span className="jss154">5</span>
				</MenuButton>

				<MenuList
					border="transparent"
					backdropFilter="blur(63px)"
					bg="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)"
					borderRadius="20px"
				>
					<Flex flexDirection="column">
						<MenuItem
							borderRadius="8px"
							_hover={{
								bg: 'transparent'
							}}
							_active={{
								bg: 'transparent'
							}}
							_focus={{
								bg: 'transparent'
							}}
							mb="10px"
						>
							<ItemContent
								time="13 minutes ago"
								info="from Alicia"
								boldInfo="New Message"
								aName="Alicia"
								aSrc={avatar1}
							/>
						</MenuItem>
						<MenuItem
							borderRadius="8px"
							_hover={{
								bg: 'transparent'
							}}
							_active={{
								bg: 'transparent'
							}}
							_focus={{
								bg: 'transparent'
							}}
							mb="10px"
						>
							<ItemContent
								time="2 days ago"
								info="by Josh Henry"
								boldInfo="New Album"
								aName="Josh Henry"
								aSrc={avatar2}
							/>
						</MenuItem>
						<MenuItem
							borderRadius="8px"
							_hover={{
								bg: 'transparent'
							}}
							_active={{
								bg: 'transparent'
							}}
							_focus={{
								bg: 'transparent'
							}}
						>
							<ItemContent
								time="3 days ago"
								info="Payment succesfully completed!"
								boldInfo=""
								aName="Kara"
								aSrc={avatar3}
							/>
						</MenuItem>
					</Flex>
				</MenuList>
			</Menu>
			
		</Flex>
	)
}

HeaderLinks.propTypes = {
	variant: PropTypes.string,
	fixed: PropTypes.bool,
	secondary: PropTypes.bool,
	onOpen: PropTypes.func
}
