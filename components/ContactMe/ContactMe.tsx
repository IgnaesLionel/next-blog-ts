import React from "react";
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
const ContactMe = () => {
  return (
    <div>
      <Box
        p="10"
        fontFamily="'Merienda One', sans-serif"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Interested in working together ?
        <Link href="/contact">
          <a>
            <Button ml="20px" colorScheme="messenger" size="sm">
              contact me !
            </Button>
          </a>
        </Link>
      </Box>
    </div>
  );
};

export default ContactMe;
