import React from "react";
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";

const ContactMe = () => {
  const bgColor = useColorModeValue("#0066ff", "#033278");
  return (
    <div>
      <Box p="10" bg={bgColor}>
        Interested in working together ? let's <Button>contact me !</Button>
      </Box>
    </div>
  );
};

export default ContactMe;
