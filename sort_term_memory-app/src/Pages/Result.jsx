import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const [data, setData] = useState({
    altitude: '',
    heading: '',
    radio: '',
    speed: '',
  });

  const navigate = useNavigate();

  let score = JSON.parse(localStorage.getItem("userscore")) || {
    "easy": 0,
    "medium": 0,
    "hard": 0,
  }
  


  useEffect(() => {
    let difficulty = localStorage.getItem("difficulty");
    let answerseet = JSON.parse(localStorage.getItem("questions"))
    const interval = setInterval(() => {
      if (+answerseet.altitude === +data.altitude && +answerseet.heading === +data.heading && +answerseet.radio === +data.radio && +answerseet.speed === +data.speed) {
        alert("Congrats you are win this")
        score[difficulty]=Number(score[difficulty])+1;
        localStorage.setItem("userscore",JSON.stringify(score));
      } else {
        alert("sorry try next")
      }
      navigate(-1);

    }, 50000);

    return () => clearInterval(interval);
  }, [data]);

  useEffect(() => {

  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(data)

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
              <Input variant="flushed" bg="#333" color="white" name="altitude" value={data.altitude} onChange={handleInputChange} />
            </Box>
            <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
              <Text>Heading</Text>
              <Text>{"(H)"}</Text>
              <Input variant="flushed" bg="#333" color="white" name="heading" value={data.heading} onChange={handleInputChange} />
            </Box>
            <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
              <Text>Radio</Text>
              <Text>{"(R)"}</Text>
              <Input variant="flushed" bg="#333" color="white" name="radio" value={data.radio} onChange={handleInputChange} />
            </Box>
            <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
              <Text>Speed</Text>
              <Text>{"(S)"}</Text>
              <Input variant="flushed" bg="#333" color="white" name="speed" value={data.speed} onChange={handleInputChange} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Result
