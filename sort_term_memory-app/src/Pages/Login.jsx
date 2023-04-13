import { Flex, Box, Image, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/Auth/auth.action";
import {useDispatch, useSelector} from "react-redux"

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secretKey,setSecretkey]=useState("");
    const isAuth = useSelector((store)=>store.authReducer.isAuth);
    const adminAuth = useSelector((store)=>store.authReducer.adminAuth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email.length>0&&password.length>0&&secretKey.length>0){
            dispatch(login({email:email,password:password,secretKey:secretKey}));
        }else{
            alert("Please fill all details properly")
        }
    };

    useEffect(()=>{
        if(adminAuth){
            navigate("/admin")
        }else if(isAuth){
            navigate("/")
        }
    })

    return (
        <Flex direction={{ base: "column", md: "row" }} >
            <Box w={{ base: "100%", md: "50%" }}>
                <img src="https://gamerwall.pro/uploads/posts/2022-09/1663071203_30-gamerwall-pro-p-samolet-v-oblakakh-vkontakte-54.jpg" alt="Background" width={"100%"} />
            </Box>
            <Box w={{ base: "100%", md: "50%" }} flex="1" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }} bg="white">
                <Heading as="h2" size="xl" mb={{ base: 8, md: 12 }}>Log In</Heading>
                <form onSubmit={handleSubmit}>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <Link to="/forgetpassword">Forget Password</Link>
                    <FormControl id="password" mb={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    <FormControl id="secretKey" mb={4}>
                        <FormLabel>SecretKey</FormLabel>
                        <Input type="text" value={secretKey} onChange={(e) => setSecretkey(e.target.value)} />
                    </FormControl>
                    <Button colorScheme="teal" type="submit">Log In</Button>
                </form>
                <Box display={"flex"} gap={"5px"} justifyContent={"center"}>Create a account<Text color={"blue"} textDecoration={"underline"}><Link to="/signup">here</Link></Text></Box>
            </Box>
        </Flex>
    );
}

export default LoginPage;
