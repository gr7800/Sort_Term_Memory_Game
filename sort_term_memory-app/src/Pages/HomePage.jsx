import { Box, Flex, Heading, Text, Divider, Image, Select, Stack, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react'
import overviewImage from "../utills/overviewImg.jpg"
import DifficultyCheckboxGroup from "../Components/DifficultyCheckboxGroup";
const HomePage = () => {
    const [score,setScore] = useState({})
    
    useEffect(()=>{
        let temp= JSON.parse(localStorage.getItem("userscore"))||{
            "easy":0,
            "medium":0,
            "hard":0,
        }
        setScore(temp);
    },[]);
    return (
        <Flex bg="gray.200" direction={{ base: "column", md: "row" }} gap={"20px"} justify="center" align="center" minH="100vh" padding={"0px 25px 0px 25px"} bgColor="#e9e5d9" >
            <Box px={{ base: 4, md: 8 }} py={8} w={{ base: "100%", md: "70%" }} >
                <Heading as="h1" size="xl" fontWeight={"normal"} mb={4} w="100%" textAlign={"left"}>Short Term Memory Test</Heading>
                <Divider color={"white"} border={"1px solid white"} />
                <Heading as="h3" size="xl" fontWeight={"normal"} mb={4} w="100%" textAlign={"left"}>
                    Overview :
                </Heading>
                <Text fontSize="lg" mb={8} w={"100%"} textAlign="left">
                    This test assesses short-term memory and tolerance for stress. Once entering the test you must memorize the information displayed inside the black box. The information you need to memorize are altitude ,heading, speed and ratio, You will have 7 seconds to memorize these numbers. After the period to memorize the readings you will be asked to reproduce the information by inserting numbers inside the appropriate answeing feild. Yo eill have 20 seconds to type in the information.
                    <br />
                    For example you must memorize the following :<br />
                    Altitude 3000 <br />
                    Heading 240 <br />
                    In the next screen you answers should be 3000a and 240h. <br />
                </Text>
                <Box>
                    <Image src={overviewImage} alt="img" width={"90%"} />
                </Box>
                <Text fontSize="lg" mb={8} w={"100%"} textAlign="left">
                    Please note: You must type in the first letter of each category at the end of the numbers without using the space key. <br />
                    After you have typed the letter you must press enter key to continue. You must also press enter key to complete the questions and recive new information <br />
                    There is no order which information you type in first.<br />
                    Scoring is based on the accuracy of your short term memory.
                </Text>

            </Box>
            <Box px={{ base: 4, md: 8 }} py={8} w={{ base: "100%", md: "30%" }} p={"20px"} >
                <Box bg="white" border="2px solid black" borderBottom={"none"} w="100%"  p={4}>
                    <Heading as="h3" size="md" fontWeight={"medium"} m="auto" color={"#757575"} w={"80%"} textAlign="left">Easy</Heading>
                    <Text color={"#757575"} fontSize="lg">Your Average Score: <span style={{"color":"red"}}>{score.easy}%</span></Text>
                    <Text color={"#757575"} fontSize="lg">Global Score: 100%</Text>
                </Box>
                <Box bg="white" border="2px solid black" borderBottom={"none"} w="100%" p={4}>
                    <Heading as="h3" size="md" fontWeight={"medium"} m="auto" color={"#757575"} w={"80%"} textAlign="left">Medium</Heading>
                    <Text color={"#757575"} fontSize="lg">Your Average Score: <span style={{"color":"red"}}>{score.medium}%</span></Text>
                    <Text color={"#757575"} fontSize="lg">Global Score: 98%</Text>
                </Box>
                <Box bg="white" border="2px solid black" borderBottom={"none"} w="100%" p={4}>
                    <Heading as="h3" size="md" fontWeight={"medium"} m="auto" color={"#757575"} w={"80%"} textAlign="left">Hard</Heading>
                    <Text color={"#757575"} fontSize="lg">Your Average Score: <span style={{"color":"red"}}>{score.hard}%</span></Text>
                    <Text color={"#757575"} fontSize="lg">Global Score: 85%</Text>
                </Box>

                <Box>
                    <Heading size={"md"} as={"h3"} fontWeight="medium" w={"100%"} textAlign="left">Difficulty</Heading>
                    <DifficultyCheckboxGroup />
                </Box>
            </Box>
        </Flex >
    );
}

export default HomePage;
