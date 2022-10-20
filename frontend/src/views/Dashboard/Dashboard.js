// Chakra imports
import {
	Flex,
	Grid,
	Text
} from '@chakra-ui/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Styles for the circular progressbar
import myreact from 'assets/img/myreact.png';
import mynode from 'assets/img/mynode.jpg';
import myexpress from 'assets/img/myexpress.jpg';
import mymysql from 'assets/img/mymysql.jpg';
import mynext from 'assets/img/mynext.png';
import myvue from 'assets/img/myvue.png';
import myangular from 'assets/img/myangular.png';
import mymaterial from 'assets/img/mymaterial.jpg';
// Custom components
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';

// Icons
import JoinUs from '../Pages/JoinUs'
import React,{useEffect ,useState} from 'react';
import socketIOClient from "socket.io-client";
// const socket = socketIO.connect('http://localhost:5000');
import './index.css';
// import socketIO from "socket.io-client";
// const socket = socketIO.connect("http://localhost:5500");
import axios from 'axios'
export default function Dashboard() {
	// const axiosInstance=axios.create({baseURL:process.env.REACT_APP_API_URL})
	// useEffect(()=>{
	// 	axios.get('http://159.223.170.39/api/getadmin').then((res)=>{
	// 		sessionStorage.setItem('chek',res.data[0].Signin)
	// 	})
	//  })
// 	const [response, setResponse] = useState("");

//   useEffect(() => {
//     const socket = socketIOClient(ENDPOINT);
//     socket.on("FromAPI", data => {
//       setResponse(data);
// 	  console.log(data,'hello')
//     });
//   }, []);
	 useEffect(()=>{
		const reloadCount = sessionStorage.getItem('reloadCount');
		if(reloadCount < 1) {
		  sessionStorage.setItem('reloadCount', String(reloadCount + 1));
		  window.location.reload();
		} else {
		  sessionStorage.removeItem('reloadCount');
		}
	
	  })

	  
	return (
		<Flex flexDirection="column" pt={{ base: '125px', md: '175px' }}>
			<Grid
				templateColumns={{ sm: '1fr', lg: '1.7fr 1.3fr' }}
				maxW={{ sm: '100%', md: '100%' }}
				gap="24px"
				mb="24px"
			>
				{/* Sales Overview */}

				{/* Active Users */}
				<Card p="16px">
					<div className="container1">
						<img
							className="myimage"
							src="https://yetiacademy.com/wp-content/uploads/2020/09/5-Fantastic-Coding-Games-For-Students-scaled.jpeg"
							alt="Lake louise picture"
						/>
						<img
							className="myimage"
							src="https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/college0620-1532138146.jpg"
							alt=""
						/>
						<img
							className="myimage"
							src="https://cf.ltkcdn.net/teens/images/std/175601-425x282r1-comp-sci.jpg"
							alt=""
						/>
						<img
							className="myimage"
							src="https://cdn7.dissolve.com/p/D943_130_039/D943_130_039_1200.jpg"
							alt=""
						/>
						<img
							className="myimage"
							src="https://st.focusedcollection.com/16485780/i/650/focused_250562908-stock-photo-teacher-helping-junior-high-students.jpg"
							alt=""
						/>
					</div>
				</Card>

				<div id="earth" >
				<div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h3 className="animate-charcter"> NoJA School<br></br>Learn by Make</h3>
    </div>
  </div>
</div>
				</div>

			</Grid>
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', '2xl': '2fr 1.2fr 1.5fr' }} my="26px" gap="18px">
				{/* Welcome Card */}
				<Card
					p="10px"
					gridArea={{ md: '1 / 1 / 2 / 3', '2xl': 'auto' }}
					// bgImage={medusa}
					bgSize="cover"
					bgPosition="50%"
				>
					<Text color="#fff" fontSize="lg" fontWeight="bold" mb="10px">
						To reach your dream set your goals and follow a good Méthodologie
					</Text>
					<br />
					<Row>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								We teach JavaScript, but we want to stay language-agnostic
							</Text>
							<img id="goodthink" src="https://www.hubspot.com/hubfs/how-to-learn-coding.jpg" />

							<Text color="#fff" fontSize="14px" fontFamily="cursive" mb="4px">
								This means that no matter what language you learn, you will have the skills to be able
								to learn it.<br />
								This means that we want you to learn how to learn
							</Text>
						</Col>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								Difference between university & immersive
							</Text>
							<img id="goodthink" src="https://www.hubspot.com/hubfs/how-to-learn-coding.jpg" />
							<Text color="#fff" fontSize="14px" fontFamily="cursive" mb="4px">
								Learn more skills that realy you need them Working in team (pairs)<br />
								More practical experience
							</Text>
						</Col>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								Before you ask a lecturer a question please try the following:
							</Text>
							<img id="goodthink" src="https://www.hubspot.com/hubfs/how-to-learn-coding.jpg" />

							<Text color="#fff" fontSize="14px" fontFamily="cursive" mb="4px">
								Discuss it with your partner<br />
								Look in the documentation<br />
								Look at answers on Google and Stack Overflow<br />
								Ask your neighbor
							</Text>
						</Col>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								We want you to learn how to teach yourself
							</Text>
							<img id="goodthink" src="https://www.hubspot.com/hubfs/how-to-learn-coding.jpg" />

							<Text color="#fff" fontSize="14px" fontFamily="cursive" mb="4px">
								because one day, Pavel, Charlie and Gisela will not be there to answer your questions
							</Text>
						</Col>
					</Row>
				</Card>
				{/* Satisfaction Rate */}
				<Card gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }}>
					<CardHeader mb="24px">
						<Flex direction="column">
							<Text color="#fff" fontSize="lg" fontWeight="bold" mb="4px">
								Technical Skills & Technology
							</Text>
						</Flex>
					</CardHeader>

					<Row>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								React Js
							</Text>
							<img id="mytechnology" src={myreact} />
						</Col>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								Vue Js
							</Text>
							<img id="mytechnology" src={myvue} />
						</Col>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								Angular Js
							</Text>
							<img id="mytechnology" src={myangular} />
						</Col>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								Material Ui
							</Text>
							<img id="mytechnology" src={mymaterial} />
						</Col>
					</Row>
					<Row>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="2px" textDecoration="underline">
								Node Js
							</Text>
							<img id="mytechnology" src={mynode} />
						</Col>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								Express Js
							</Text>
							<img id="mytechnology" src={myexpress} />
						</Col>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								Next Js
							</Text>
							<img id="mytechnology" src={mynext} />
						</Col>
						<Col xs={6} md={3}>
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								My-SQL
							</Text>
							<img id="mytechnology" src={mymysql} />
						</Col>
					</Row>
				</Card>
				{/* Referral Tracking */}
				<Card gridArea={{ md: '2 / 2 / 3 / 3', '2xl': 'auto' }}>
					<Flex direction="column">
						<Flex justify="space-between" align="center" mb="40px">
							<Text color="#fff" fontSize="lg" fontWeight="bold" fontFamily="serif">
								Why NOJA Code ?
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
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', '2xl': '2fr 1.2fr 1.5fr' }} my="26px" gap="18px">
				{/* Welcome Card */}
				<Card
					p="10px"
					gridArea={{ md: '1 / 1 / 2 / 3', '2xl': 'auto' }}
					// bgImage={medusa}
					bgSize="cover"
					bgPosition="50%"
				>
								< JoinUs />

				</Card>
			</Grid>

		</Flex>
	);
}
