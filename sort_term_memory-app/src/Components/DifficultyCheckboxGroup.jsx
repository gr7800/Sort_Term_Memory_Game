import { CheckboxGroup, Checkbox, Stack, Button, Icon, Box, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight, FaSquare } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

function DifficultyCheckboxGroup() {
    const [value, setValue] = useState("");

    const options = [
        { label: "Easy", value: "easy" },
        { label: "Medium", value: "medium" },
        { label: "Hard", value: "hard" },
    ];

    const navigate=useNavigate()

    const startgame=()=>{
        if(value===""){
            alert("Please select difficuty level first")
        }else{
            localStorage.setItem("difficulty",value);
            navigate("/startgame")
        }
    }
    const startpractice=()=>{
        if(value===""){
            alert("Please select difficuty level first")
        }else{
            localStorage.setItem("difficulty",value);
            navigate("/startpractice")
        }
    }

    const handleCheckboxChange = (newValue) => {
        if (value === newValue) {
            setValue("");
        } else {
            setValue(newValue);
        }
    };
    console.log(value)

    const stackDirection = useBreakpointValue({ base: "column", md: "row" });

    return (
        <Box maxW="100%" p="10px">
            <CheckboxGroup value={value} onChange={(value) => setValue(value)}>
                <Stack direction={stackDirection}>
                    {options.map((option) => (
                        <Checkbox
                            key={option.value}
                            value={option.value}
                            onChange={() => handleCheckboxChange(option.value)}
                            icon={
                                <FaSquare
                                    color={value === option.value ? "black" : "white"}
                                />
                            }
                        >
                            {option.label}
                        </Checkbox>
                    ))}
                </Stack>
            </CheckboxGroup>
            <Box display="flex" justifyContent="space-between" m="20px">
                <Button
                    bg="black"
                    color="white"
                    _hover={{ bg: "white", color: "black" }}
                    rightIcon={<Icon as={FaArrowRight} />}
                    size="md"
                    onClick={startpractice}
                >
                    Practice
                </Button>
                <Button
                    bg="black"
                    color="white"
                    _hover={{ bg: "white", color: "black" }}
                    rightIcon={<Icon as={FaArrowRight} />}
                    size="md"
                    onClick={startgame}
                >
                    Start Game
                </Button>
            </Box>
        </Box>
    );
}

export default DifficultyCheckboxGroup;
