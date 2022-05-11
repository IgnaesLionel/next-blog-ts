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
      <Box
        zIndex={0}
        w="100%"
        h="full"
        top="0"
        right="0"
        left="0"
        bottom="0"
        opacity="0.051"
        bgImage="url('/images/codebg.jpg')"
        bgSize="cover"
        position="absolute"
      ></Box>
      <VStack w="full">
        <Text
          fontFamily="'Merienda One', sans-serif"
          fontSize={["20px", "30px", "40px"]}
          textAlign="center"
        >
          Lionel Ignaes
        </Text>
        <Text
          fontFamily="'Merienda One', sans-serif"
          fontSize={["10px", "15px", "20px"]}
          textAlign="center"
        >
          Software developer
        </Text>
        <Flex
          w="full"
          h="full"
          display="flex"
          justifyContent={["center", "center", "center"]}
          alignItems={["center", "center", "center"]}
          direction={["column", "column", "row"]}
        >
          <Box
            h={["100px", "200px", "250px"]}
            w={["100px", "200px", "250px"]}
            borderColor="red"
            borderWidth="1px"
            borderStyle="solid"
          >
            <Box w="full" position="relative">
              <Text
                bottom={["-15px", "-30px", "-50px"]}
                position="absolute"
                w="full"
                textAlign="center"
                fontSize={["10px", "20px", "40px"]}
                fontFamily="'Merienda One', sans-serif"
              >
                Your ideas
              </Text>
              <Flex justifyContent="center" alignItems="center" w="full">
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
                fontFamily="Mono, sans-serif"
                className="spin"
                color="white"
              >
                €
              </Box>
              <Box
                position="absolute"
                top={["14px", "24px", "27px"]}
                left={["13px", "42px", "45px"]}
                fontSize={["7px", "10px", "18px"]}
                fontFamily="'Merienda One', sans-serif"
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
                fontFamily="'Merienda One', sans-serif"
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
                fontFamily="'Merienda One', sans-serif"
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
              <Box
                position="absolute"
                top={["43px", "68px", "90px"]}
                left={["53px", "105px", "132px"]}
                h={["3px", "5px", "6px"]}
                w={["3px", "5px", "6px"]}
              >
                <Img className="hshake" src="../../images/musique1.png" />
              </Box>
              <Box
                position="absolute"
                top={["48px", "75px", "100px"]}
                left={["56px", "113px", "140px"]}
                h={["7px", "10px", "12px"]}
                w={["7px", "10px", "12px"]}
              >
                <Img
                  className="hshakeDelayed"
                  src="../../images/musique2.png"
                />
              </Box>
              <Box
                position="absolute"
                top={["25px", "40px", "50px"]}
                left={["58px", "110px", "140px"]}
                h={["4px", "6px", "8px"]}
                w={["4px", "6px", "8px"]}
              >
                <Img className="hshakeDelayed" src="../../images/intero.png" />
              </Box>
              <Box
                position="absolute"
                top={["70px", "105px", "140px"]}
                left={["58px", "113px", "143px"]}
                h={["10px", "14px", "18px"]}
                w={["10px", "14px", "18px"]}
              >
                <Img className="ghostlyShake" src="../../images/lamp.png" />
              </Box>
              <Box
                position="absolute"
                top={["70px", "105px", "140px"]}
                left={["58px", "113px", "143px"]}
                h={["10px", "14px", "18px"]}
                w={["10px", "14px", "18px"]}
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
          <Box
            position="relative"
            h={["100px", "200px", "250px"]}
            w={["100px", "200px", "250px"]}
            borderColor="red"
            borderWidth="1px"
            borderStyle="solid"
          >
            <Flex justifyContent="center">
              <Img
                borderRadius="50%"
                src="../../images/me.png"
                w={["100px", "150px", "200px"]}
              />
            </Flex>
            <Text
              textAlign="center"
              bottom={["-15px", "-30px", "15px"]}
              position="absolute"
              w="full"
              fontSize={["10px", "20px", "40px"]}
              fontFamily="'Merienda One', sans-serif"
            >
              turn into
            </Text>
          </Box>

          <Box
            h={["100px", "200px", "230px"]}
            w={["100px", "200px", "230px"]}
            position="relative"
          >
            <Text
              position="absolute"
              w="full"
              textAlign="center"
              bottom={["-15px", "-30px", "15px"]}
              fontSize={["10px", "20px", "40px"]}
              fontFamily="'Merienda One', sans-serif"
            >
              concrete projects
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
        ></VStack>
      </VStack>
    </Box>
  );
};

export default Header;
