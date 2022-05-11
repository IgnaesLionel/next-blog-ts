import React from "react";
import Head from "next/head";
import {
  Text,
  Box,
  useColorModeValue,
  VStack,
  Img,
  Flex,
} from "@chakra-ui/react";

const Header = () => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");

  console.log("loaded");
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
                top={["63px", "100px", "130px"]}
                left={["11px", "39px", "45px"]}
                h={["10px", "17px", "17px"]}
                w={["7px", "11px", "13px"]}
              >
                <Img className="hourglass" src="../../images/sablier.png" />
              </Box>
              <Box
                position="absolute"
                top={["23px", "38px", "50px"]}
                left={["37px", "82px", "105px"]}
                h={["14px", "17px", "20px"]}
                w={["10px", "13px", "15px"]}
              >
                <Img className="spinReverse" src="../../images/circle.png" />
              </Box>
              <Box
                position="absolute"
                top={["0px", "-1px", "-5px"]}
                left={["37px", "79px", "97px"]}
                fontSize={["12px", "20px", "30px"]}
                fontFamily="mono"
                className="spin"
                color="white"
              >
                €
              </Box>
              <Box
                position="absolute"
                top="26px"
                left="57px"
                fontSize="0.8rem"
                fontFamily="mono"
                color="white"
                className="rotate-45"
              >
                ABC
              </Box>

              <Box
                position="absolute"
                top={["36px", "55px", "75px"]}
                left={["7px", "33px", "35px"]}
                fontSize={["5px", "9px", "11px"]}
                fontFamily="mono"
                color="white"
                className="rotate45"
              >
                123
              </Box>
              <Box
                position="absolute"
                top={["37px", "55px", "75px"]}
                left={["78px", "140px", "180px"]}
                fontSize={["5px", "9px", "11px"]}
                fontFamily="mono"
                color="white"
              >
                E=mc²
              </Box>
              <Box
                position="absolute"
                top={["50.5px", "77px", "104px"]}
                left={["25px", "63px", "72px"]}
                h={["9px", "13px", "15px"]}
                w={["5px", "8px", "10px"]}
              >
                <Img className="vshake" src="../../images/fiole.png" />
              </Box>
              <Box
                position="absolute"
                top={["72px", "110px", "148px"]}
                left={["28px", "64px", "79px"]}
                h={["10px", "14px", "18px"]}
                w={["10px", "14px", "18px"]}
              >
                <Img className="spin" src="../../images/roue.png" />
              </Box>
              <Box
                position="absolute"
                top={["67px", "105px", "138px"]}
                left={["35px", "75px", "90px"]}
                h={["7px", "10px", "13px"]}
                w={["7px", "10px", "13px"]}
              >
                <Img className="spinReverse" src="../../images/roue.png" />
              </Box>
              <Box position="absolute" top="90px" left="132px" h="6px" w="6px">
                <Img className="hshake" src="../../images/musique1.png" />
              </Box>
              <Box
                position="absolute"
                top="100px"
                left="140px"
                h="12px"
                w="12px"
              >
                <Img
                  className="hshakeDelayed"
                  src="../../images/musique2.png"
                />
              </Box>
              <Box position="absolute" top="50px" left="140px" h="8px" w="8px">
                <Img className="hshakeDelayed" src="../../images/intero.png" />
              </Box>
              <Box
                position="absolute"
                top="140px"
                left="143px"
                h="18px"
                w="18px"
              >
                <Img className="ghostlyShake" src="../../images/lamp.png" />
              </Box>
              <Box
                position="absolute"
                top="140px"
                left="143px"
                h="18px"
                w="18px"
              >
                <Img className="ghostlyShake2" src="../../images/lamp2.png" />
              </Box>
              <Box
                position="absolute"
                top="90px"
                left="140px"
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
