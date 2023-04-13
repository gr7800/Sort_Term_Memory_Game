import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { updateScore } from '../Redux/Auth/auth.action';
// import { BaseUrl } from '../utills/helper';

const Result = () => {
  let Count = localStorage.getItem("noquestion")
  const [data, setData] = useState({
    altitude: '',
    heading: '',
    radio: '',
    speed: '',
  });
  const [answerseet,setAnswersheet] = useState(JSON.parse(localStorage.getItem("questions"))||{})
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let score = JSON.parse(localStorage.getItem("userscore")) || {
    "easy": 0,
    "medium": 0,
    "hard": 0,
  }

  const handleClick = (e) => {
    e.preventDefault();
    let difficulty = localStorage.getItem("difficulty");
    let answerseet = JSON.parse(localStorage.getItem("questions"));
    if (+answerseet.altitude === +data.altitude && +answerseet.heading === +data.heading && +answerseet.radio === +data.radio && +answerseet.speed === +data.speed) {
      alert("Congrats you are win this")
      score[difficulty] = Number(score[difficulty]) + 1;
      localStorage.setItem("userscore", JSON.stringify(score));
    } else {
      alert("sorry try next")
    }
    Count = Number(Count) + 1;
    localStorage.setItem("noquestion", Count);
    let temp = {};
    temp[`${difficulty}Score`] = +(score[difficulty])*10
    if (+Count === 10) {
      console.log(temp);
      dispatch(updateScore(temp))
    }
    navigate(-1);
  }

  useEffect(() => {

  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Heading m={"20px"}>Result</Heading>
      <Text color={"red"} >Fill the data here as mentioned previously</Text>
      <Box w={"100%"} display="flex" flexDirection={"column"} alignItems="center">
        <Box
          bg="#1a1a1a"
          w="80vw"
          maxW="800px"
          position="absolute"
          borderRadius="10px"
          border="20px solid silver"
          boxShadow="inset 0px 0px 10px 0px rgba(255, 255, 255, 0.5)"
          margin={"auto"}
          p="25px"
        >
          <Flex color={"white"} direction="column">
            <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
              <Text>Altitude</Text>
              <Text>{"(A)"}</Text>
              <Input variant="flushed" fontWeight={"bold"} textAlign={"center"} bg={(+answerseet.altitude === +data.altitude)?"green":"red"} color={'white'} name="altitude" value={data.altitude} onChange={handleInputChange} />
            </Box>
            <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
              <Text>Heading</Text>
              <Text>{"(H)"}</Text>
              <Input variant="flushed" fontWeight={"bold"} textAlign={"center"} bg={(+answerseet.heading === +data.heading)?"green":"red"} color="white" name="heading" value={data.heading} onChange={handleInputChange} />
            </Box>
            <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
              <Text>Radio</Text>
              <Text>{"(R)"}</Text>
              <Input variant="flushed" fontWeight={"bold"} textAlign={"center"} bg={(+answerseet.radio === +data.radio)?"green":"red"} color='white' name="radio" value={data.radio} onChange={handleInputChange} />
            </Box>
            <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
              <Text>Speed</Text>
              <Text>{"(S)"}</Text>
              <Input variant="flushed" fontWeight={"bold"} textAlign={"center"} bg={(+answerseet.speed === +data.speed)?"green":"red"} color='white' name="speed" value={data.speed} onChange={handleInputChange} />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box mt={"260px"} color={"white"} mb={"50px"}>
        <Button bg={"blue.800"} _hover={{bg:(+answerseet.altitude === +data.altitude && +answerseet.heading === +data.heading && +answerseet.radio === +data.radio && +answerseet.speed === +data.speed)?"green":"red"}} onClick={handleClick}>Submit</Button>
      </Box>
    </>
  )
}

export default Result
