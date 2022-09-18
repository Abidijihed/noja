// Chakra imports
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
	GridItem
} from '@chakra-ui/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Styles for the circular progressbar
import medusa from 'assets/img/cardimgfree.png';
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
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import BarChart from 'components/Charts/BarChart';
import LineChart from 'components/Charts/LineChart';
import IconBox from 'components/Icons/IconBox';
// Icons
import { CartIcon, DocumentIcon, GlobeIcon, RocketIcon, StatsIcon, WalletIcon } from 'components/Icons/Icons.js';
import DashboardTableRow from 'components/Tables/DashboardTableRow';
import TimelineRow from 'components/Tables/TimelineRow';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiHappy } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { IoCheckmarkDoneCircleSharp, IoEllipsisHorizontal } from 'react-icons/io5';
// Data
import {
	barChartDataDashboard,
	barChartOptionsDashboard,
	lineChartDataDashboard,
	lineChartOptionsDashboard
} from 'variables/charts';
import { dashboardTableData, timelineData } from 'variables/general';
import './index.css';
import { Carousel } from 'react-bootstrap';

export default function Dashboard() {
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
					<div class="container1">
						<img
							className="myimage"
							src="https://yetiacademy.com/wp-content/uploads/2020/09/5-Fantastic-Coding-Games-For-Students-scaled.jpeg"
							alt="Lake louise picture"
							class="image1"
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
				<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> NoJA School<br></br>Learn by Make</h3>
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
					<Text color="#fff" fontSize="lg" fontWeight="bold" mb="10px" textAlign="center" fontFamily="serif">
						Our Coding Bootcamps Schedule
					</Text>
					<br />
					<Row id='ourscaeule'>
						<Col xs={8} md={3} id="leson">
							<img id="goodthink" src="https://www.hubspot.com/hubfs/how-to-learn-coding.jpg" />
							<Text color="#fff" fontSize="18px" fontFamily="serif" mb="4px" textDecoration="underline">
								6 Weeks Onsite Junior Phase (Full Time)
							</Text>
							<Text color="#fff" fontSize="16px" fontFamily="cursive" mb="4px">
								During weeks 1-4, you’ll learn Full Stack JavaScript and computer science fundamentals
								by working through realistic code.<br />
								One Week you'll learn HTML, CSS, and moree ... <br />
								Your time will be spent on 2-day sprints, pair programming with classmates, and working
								through real industry problems.<br />
								The last week will hvae to work on solo project JavaScript (DOM), HTML,CSS
							</Text>
						</Col>
						<Col xs={8} md={3} id="leson">
						<img id="goodthink" src="https://www.hubspot.com/hubfs/how-to-learn-coding.jpg" />
						<Text color="#fff" fontSize="18px" fontFamily="serif" mb="4px" textDecoration="underline">
								14 Weeks Onsite Senior Phase (Full Time)
							</Text>
							<Text color="#fff" fontSize="16px" fontFamily="cursive" mb="4px">
							During weeks 6-18, you’ll bring everything together, building complete applications and learning industry practice<br></br>
                            We Will learn together the most famos technology,frameworks and library like ReactJs,NodeJs,My-SQL database etc...<br></br>
							During weeks 18-20, you'll bring everything did you learn and start building project in a team <br></br>
							We will working in two main project Full-Stack, MEAN Stack and MERN Stack 
							</Text>

						</Col>
						<Col xs={8} md={3} id="leson">
						<img id="goodthink" src="https://www.hubspot.com/hubfs/how-to-learn-coding.jpg" />
							<Text color="#fff" fontSize="17px" fontFamily="serif" mb="4px" textDecoration="underline">
								Before you ask a lecturer a question please try the following:
							</Text>
							<Text color="#fff" fontSize="14px" fontFamily="cursive" mb="4px">
								Discuss it with your partner<br />
								Look in the documentation<br />
								Look at answers on Google and Stack Overflow<br />
								Ask your neighbor
							</Text>
						</Col>
						
					</Row>
				</Card>
			</Grid>
		</Flex>
	);
}
