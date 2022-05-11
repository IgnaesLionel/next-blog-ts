import React from "react";
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";

const ContactMe = () => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");
  return (
    <div>
      <Box p="10" bg={bgColor}>
        Interested in working together ? let's <Button>contact me !</Button>
      </Box>
    </div>
  );
};

export default ContactMe;
