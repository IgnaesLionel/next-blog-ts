import React from "react";
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";

const ContactMe = () => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");
  return (
    <div>
      <Box
        p="10"
        bg={bgColor}
        fontFamily="'Merienda One', sans-serif"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Interested in working together ?
        <Button ml="20px" colorScheme="red">
          contact me !
        </Button>
      </Box>
    </div>
  );
};

export default ContactMe;
