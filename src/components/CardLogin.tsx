"use client";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { login } from "@/services/login";
import { useState } from "react";

export default function CardLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = (data: any) => {
    const { email, senha } = data;
    const validateUser = async (email: string, senha: string) => {
      const loggedIn = await login(email, senha);
      if (loggedIn) {
        return alert("Logado");
      } else {
        return alert("Senha ou email invalido");
      }
    };
    validateUser(email, senha);
  };

  return (
    <Flex
      w={["80%", "40%"]}
      maxW={"90%"}
      bg={"whitesmoke"}
      h={"50%"}
      p={"2rem"}
      borderRadius={"8px"}
      mt={"200px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        w={"full"}
        gap={"1rem"}
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          bg={"gray"}
          placeholder="E-mail"
          {...register("email", { required: "email obrigatorio" })}
        />
        {errors.email && (
          <Text color="red.500" fontSize="sm">
            E-mail obrigatório!
          </Text>
        )}
        <InputGroup size="md">
          <Input
            bg={"gray"}
            type={show ? "text" : "password"}
            placeholder="Senha"
            {...register("senha", { required: true })}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errors.senha && (
          <Text color={"red.500"} marginBottom={0} fontSize={"sm"}>
            Senha obrigatória!
          </Text>
        )}
        <Flex justifyContent={"center"} w={"full"}>
          <Button colorScheme="blue" w={"50%"} type="submit">
            Login
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
