import CardLogin from "@/components/CardLogin";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex justify={"center"} align={"center"}>
        <CardLogin />
      </Flex>
    </>
  );
}

