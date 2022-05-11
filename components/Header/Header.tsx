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
  Flex,
} from "@chakra-ui/react";

const Header = () => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");

  return (
    <Box
      bg={bgColor}
      w="100%"
      position="relative"
      overflow="hidden"
      display="inline-block"
    >
      <VStack w="full">
        <Text textAlign="center">I help people to</Text>
        <Text textAlign="center">convert their</Text>
        <Flex
          w="full"
          h="full"
          display="flex"
          justifyContent={["center", "center", "center"]}
          alignItems={["center", "center", "center"]}
          direction={["column", "column", "row"]}
        >
          <Box h={["100px", "200px", "250px"]} w={["100px", "200px", "250px"]}>
            <Box
              w="full"
              position="relative"
              borderStyle="solid"
              borderWidth="1px"
              borderColor="red"
            >
              <Text
                bottom="-50px"
                position="absolute"
                w="full"
                textAlign="center"
                fontSize={["10px", "20px", "40px"]}
              >
                Your ideas
              </Text>
              <Flex
                justifyContent="center"
                alignItems="center"
                w="full"
                borderStyle="solid"
                borderWidth="1px"
                borderColor="red"
              >
                <Img
                  src="../../images/brain.png"
                  w={["100px", "150px", "200px"]}
                />
              </Flex>

              <Box
                position="absolute"
                top="155px"
                left="64px"
                h="17px"
                w="11px"
              >
                <Img className="hourglass" src="../../images/sablier.png" />
              </Box>
              <Box
                position="absolute"
                top="90px"
                left="105px"
                h="20px"
                w="15px"
              >
                <Img className="spinReverse" src="../../images/circle.png" />
              </Box>
              <Box
                position="absolute"
                top="-12px"
                left="115px"
                fontSize="50px"
                fontFamily="mono"
                className="spin"
                color="white"
              >
                €
              </Box>
              <Box
                position="absolute"
                top="76px"
                left="65px"
                fontSize="0.8rem"
                fontFamily="mono"
                color="white"
                className="rotate-45"
              >
                ABC
              </Box>

              <Box
                position="absolute"
                top="110px"
                left="65px"
                fontSize="0.6rem"
                fontFamily="mono"
                color="white"
              >
                123
              </Box>
              <Box
                position="absolute"
                top="132px"
                left="85px"
                h="15px"
                w="10px"
              >
                <Img className="vshake" src="../../images/fiole.png" />
              </Box>
              <Box
                position="absolute"
                top="168px"
                left="85px"
                h="18px"
                w="18px"
              >
                <Img className="spin" src="../../images/roue.png" />
              </Box>
              <Box
                position="absolute"
                top="158px"
                left="96px"
                h="13px"
                w="13px"
              >
                <Img className="spinReverse" src="../../images/roue.png" />
              </Box>
              <Box position="absolute" top="120px" left="130px" h="6px" w="6px">
                <Img className="hshake" src="../../images/musique1.png" />
              </Box>
              <Box
                position="absolute"
                top="130px"
                left="140px"
                h="12px"
                w="12px"
              >
                <Img
                  className="hshakeDelayed"
                  src="../../images/musique2.png"
                />
              </Box>
              <Box position="absolute" top="90px" left="140px" h="8px" w="8px">
                <Img className="hshakeDelayed" src="../../images/intero.png" />
              </Box>
              <Box
                position="absolute"
                top="160px"
                left="138px"
                h="18px"
                w="18px"
              >
                <Img className="ghostlyShake" src="../../images/lamp.png" />
              </Box>
              <Box
                position="absolute"
                top="160px"
                left="138px"
                h="18px"
                w="18px"
              >
                <Img className="ghostlyShake2" src="../../images/lamp2.png" />
              </Box>
              <Box
                position="absolute"
                top="90px"
                left="160px"
                h="30px"
                w="30px"
              >
                <Img src="../../images/bubble.png" />
              </Box>
            </Box>
          </Box>
          <Box h={["100px", "200px", "250px"]} w={["100px", "200px", "250px"]}>
            <Img src="../../images/me.png" />
          </Box>

          <Box
            h={["100px", "200px", "250px"]}
            w={["100px", "200px", "250px"]}
            position="relative"
          >
            <Text
              bottom="0px"
              position="absolute"
              w="full"
              textAlign="center"
              fontSize={["10px", "20px", "40px"]}
            >
              Real Projet
            </Text>
          </Box>
        </Flex>

        <VStack
          pl="10px"
          w="50%"
          mt={[2, 10, 30]}
          fontFamily="'Merienda One', sans-serif"
          fontSize={["4vw", "4vw", "2.0vw"]}
          color={bgColor}
        >
          <Text textAlign="center">ideas into reality</Text>
        </VStack>
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
      </VStack>
    </Box>
  );
};

export default Header;
