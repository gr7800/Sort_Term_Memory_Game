import { Box, Flex, Grid, GridItem, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Startgame = () => {
    const [data, setData] = useState({
        altitude: '',
        heading: '',
        radio: '',
        speed: '',
    });

    const generateRandomNumber = (min, max) => {
        return Math.floor(10 + Math.random(4) * 90);
    };
    const naviagte = useNavigate();

    useEffect(() => {
        let difficulty = localStorage.getItem("difficulty");
        let time=5000
        if(difficulty=="easy"){
            time=9000
        }else if (difficulty=="medium"){
            time=5000
        }else{
            time=3000
        }
        const interval = setInterval(() => {
            localStorage.setItem('questions', JSON.stringify(data));
            naviagte("/result");
        }, time);
        return () => clearInterval(interval);
    }, [data]);

    useEffect(() => {
        setData({
            altitude: generateRandomNumber(0, 36000),
            heading: generateRandomNumber(0,360),
            radio: generateRandomNumber(0,360),
            speed: generateRandomNumber(0,300),
        });
    }, []);

    return (
        <>
            <Heading m={"20px"}>Play Now</Heading>
            <Text color={"red"} >Memorise the data below</Text>
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
                            <Input variant="flushed" bg="#333" color="white" value={data.altitude} />
                        </Box>
                        <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
                            <Text>Heading</Text>
                            <Text>{"(H)"}</Text>
                            <Input variant="flushed" bg="#333" color="white" value={data.heading} />
                        </Box>
                        <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
                            <Text>Radio</Text>
                            <Text>{"(R)"}</Text>
                            <Input variant="flushed" bg="#333" color="white" value={data.radio} />
                        </Box>
                        <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
                            <Text>Speed</Text>
                            <Text>{"(S)"}</Text>
                            <Input variant="flushed" bg="#333" color="white" value={data.speed} />
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default Startgame