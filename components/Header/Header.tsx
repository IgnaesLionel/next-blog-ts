import React from "react";
import Head from "next/head";
import {
  Text,
  Box,
  Center,
  useColorModeValue,
  VStack,
  HStack,
  Img,
} from "@chakra-ui/react";

const Header = () => {
  const bgColor = useColorModeValue("#010101", "#b4ddff");
  const bgColorWave1 = useColorModeValue("#9ad0ff", "#056fc0");
  const bgColorWave2 = useColorModeValue("#80c3ff", "#0668b8");
  const bgColorWave3 = useColorModeValue("#66b5ff", "#0661b0");
  const bgColorWave4 = useColorModeValue("#49a7ff", "#065aa8");
  const bgColorWave5 = useColorModeValue("#2998ff", "#0653a0");
  const bgColorWave6 = useColorModeValue("#0089ff", "#064d98");
  const bgColorWave7 = useColorModeValue("#0078ff", "#054690");
  const bgColorWave8 = useColorModeValue("#0066ff", "#053f88");
  const bgColorWave9 = useColorModeValue("#0066ff", "#043880");
  const bgColorWave10 = useColorModeValue("#0066ff", "#033278");

  return (
    <Box
      w="100%"
      borderStyle={"solid"}
      borderWidth={"3px"}
      borderColor="green"
      position="relative"
      overflow="hidden"
      display="inline-block"
    >
      <VStack w="full">
        <Text
          fontFamily="'Merienda One', sans-serif"
          fontSize={["4vw", "4vw", "2.0vw"]}
          textAlign="center"
        >
          Lionel Ignaes
        </Text>
        <Text
          fontFamily="'Merienda One', sans-serif"
          fontSize={["4vw", "4vw", "2.0vw"]}
          textAlign="center"
        >
          Software developer
        </Text>
        <Text textAlign="center">I help people to</Text>
        <Text textAlign="center">convert their</Text>
        <Box w="full" h="full">
          <Center>
            <Box h="20%" w="20%">
              <Img src="https://st2.depositphotos.com/1898481/6448/i/600/depositphotos_64486573-stock-photo-people.jpg" />
            </Box>
          </Center>
        </Box>

        <VStack
          pl="10px"
          w="50%"
          mt={[2, 10, 30]}
          fontFamily="'Merienda One', sans-serif"
          fontSize={["4vw", "4vw", "2.0vw"]}
          color={bgColor}
        >
          <Text textAlign="center">ideas into reality</Text>
          <Img src="../../images/portfolioBubble.png" />
        </VStack>
      </VStack>
    </Box>
  );
};

export default Header;
