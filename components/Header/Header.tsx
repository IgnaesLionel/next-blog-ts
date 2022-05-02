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
    <Box>
      <Head>
        <title>{}</title>
      </Head>

      <Box bg={bgColor}>
        <Box w="full" pos="relative">
          <HStack pos="absolute" w="full">
            <VStack
              pl="10px"
              w="50%"
              mt={[2, 10, 30]}
              fontFamily="'Merienda One', sans-serif"
              fontSize={["4vw", "4vw", "2.5vw"]}
              color={bgColor}
            >
              <Text textAlign="center">Hello, i am Lionel.</Text>
              <Text textAlign="center">I help people to</Text>
              <Text textAlign="center">turn their ideas into</Text>
              <Text textAlign="center">websites and apps</Text>
            </VStack>
            <Box w="50%">
              <Center>
                <Box h="150px" w="250px">
                  {" "}
                  <Img src="https://st2.depositphotos.com/1898481/6448/i/600/depositphotos_64486573-stock-photo-people.jpg" />
                </Box>
              </Center>
            </Box>
          </HStack>
        </Box>

        <Box maxHeight="350px">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="auto"
            height="auto"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <path
              d="M0 37L18.8 38C37.7 39 75.3 41 112.8 42C150.3 43 187.7 43 225.2 43C262.7 43 300.3 43 337.8 45C375.3 47 412.7 51 450.2 50C487.7 49 525.3 43 562.8 41C600.3 39 637.7 41 675.2 44C712.7 47 750.3 51 787.8 51C825.3 51 862.7 47 881.3 45L900 43L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
              fill={bgColorWave1}
            ></path>
            <path
              d="M0 61L18.8 62C37.7 63 75.3 65 112.8 67C150.3 69 187.7 71 225.2 73C262.7 75 300.3 77 337.8 80C375.3 83 412.7 87 450.2 83C487.7 79 525.3 67 562.8 62C600.3 57 637.7 59 675.2 64C712.7 69 750.3 77 787.8 79C825.3 81 862.7 77 881.3 75L900 73L900 41L881.3 43C862.7 45 825.3 49 787.8 49C750.3 49 712.7 45 675.2 42C637.7 39 600.3 37 562.8 39C525.3 41 487.7 47 450.2 48C412.7 49 375.3 45 337.8 43C300.3 41 262.7 41 225.2 41C187.7 41 150.3 41 112.8 40C75.3 39 37.7 37 18.8 36L0 35Z"
              fill={bgColorWave2}
            ></path>
            <path
              d="M0 133L18.8 132C37.7 131 75.3 129 112.8 130C150.3 131 187.7 135 225.2 139C262.7 143 300.3 147 337.8 147C375.3 147 412.7 143 450.2 138C487.7 133 525.3 127 562.8 127C600.3 127 637.7 133 675.2 137C712.7 141 750.3 143 787.8 141C825.3 139 862.7 133 881.3 130L900 127L900 71L881.3 73C862.7 75 825.3 79 787.8 77C750.3 75 712.7 67 675.2 62C637.7 57 600.3 55 562.8 60C525.3 65 487.7 77 450.2 81C412.7 85 375.3 81 337.8 78C300.3 75 262.7 73 225.2 71C187.7 69 150.3 67 112.8 65C75.3 63 37.7 61 18.8 60L0 59Z"
              fill={bgColorWave3}
            ></path>
            <path
              d="M0 205L18.8 205C37.7 205 75.3 205 112.8 206C150.3 207 187.7 209 225.2 214C262.7 219 300.3 227 337.8 231C375.3 235 412.7 235 450.2 228C487.7 221 525.3 207 562.8 207C600.3 207 637.7 221 675.2 222C712.7 223 750.3 211 787.8 206C825.3 201 862.7 203 881.3 204L900 205L900 125L881.3 128C862.7 131 825.3 137 787.8 139C750.3 141 712.7 139 675.2 135C637.7 131 600.3 125 562.8 125C525.3 125 487.7 131 450.2 136C412.7 141 375.3 145 337.8 145C300.3 145 262.7 141 225.2 137C187.7 133 150.3 129 112.8 128C75.3 127 37.7 129 18.8 130L0 131Z"
              fill={bgColorWave4}
            ></path>
            <path
              d="M0 235L18.8 235C37.7 235 75.3 235 112.8 235C150.3 235 187.7 235 225.2 239C262.7 243 300.3 251 337.8 257C375.3 263 412.7 267 450.2 260C487.7 253 525.3 235 562.8 234C600.3 233 637.7 249 675.2 251C712.7 253 750.3 241 787.8 235C825.3 229 862.7 229 881.3 229L900 229L900 203L881.3 202C862.7 201 825.3 199 787.8 204C750.3 209 712.7 221 675.2 220C637.7 219 600.3 205 562.8 205C525.3 205 487.7 219 450.2 226C412.7 233 375.3 233 337.8 229C300.3 225 262.7 217 225.2 212C187.7 207 150.3 205 112.8 204C75.3 203 37.7 203 18.8 203L0 203Z"
              fill={bgColorWave5}
            ></path>
            <path
              d="M0 283L18.8 284C37.7 285 75.3 287 112.8 285C150.3 283 187.7 277 225.2 281C262.7 285 300.3 299 337.8 307C375.3 315 412.7 317 450.2 307C487.7 297 525.3 275 562.8 273C600.3 271 637.7 289 675.2 295C712.7 301 750.3 295 787.8 293C825.3 291 862.7 293 881.3 294L900 295L900 227L881.3 227C862.7 227 825.3 227 787.8 233C750.3 239 712.7 251 675.2 249C637.7 247 600.3 231 562.8 232C525.3 233 487.7 251 450.2 258C412.7 265 375.3 261 337.8 255C300.3 249 262.7 241 225.2 237C187.7 233 150.3 233 112.8 233C75.3 233 37.7 233 18.8 233L0 233Z"
              fill={bgColorWave6}
            ></path>
            <path
              d="M0 427L18.8 420C37.7 413 75.3 399 112.8 388C150.3 377 187.7 369 225.2 380C262.7 391 300.3 421 337.8 437C375.3 453 412.7 455 450.2 447C487.7 439 525.3 421 562.8 410C600.3 399 637.7 395 675.2 402C712.7 409 750.3 427 787.8 425C825.3 423 862.7 401 881.3 390L900 379L900 293L881.3 292C862.7 291 825.3 289 787.8 291C750.3 293 712.7 299 675.2 293C637.7 287 600.3 269 562.8 271C525.3 273 487.7 295 450.2 305C412.7 315 375.3 313 337.8 305C300.3 297 262.7 283 225.2 279C187.7 275 150.3 281 112.8 283C75.3 285 37.7 283 18.8 282L0 281Z"
              fill={bgColorWave7}
            ></path>
            <path
              d="M0 535L18.8 531C37.7 527 75.3 519 112.8 520C150.3 521 187.7 531 225.2 536C262.7 541 300.3 541 337.8 542C375.3 543 412.7 545 450.2 543C487.7 541 525.3 535 562.8 532C600.3 529 637.7 529 675.2 531C712.7 533 750.3 537 787.8 539C825.3 541 862.7 541 881.3 541L900 541L900 377L881.3 388C862.7 399 825.3 421 787.8 423C750.3 425 712.7 407 675.2 400C637.7 393 600.3 397 562.8 408C525.3 419 487.7 437 450.2 445C412.7 453 375.3 451 337.8 435C300.3 419 262.7 389 225.2 378C187.7 367 150.3 375 112.8 386C75.3 397 37.7 411 18.8 418L0 425Z"
              fill={bgColorWave8}
            ></path>
            <path
              d="M0 565L18.8 564C37.7 563 75.3 561 112.8 562C150.3 563 187.7 567 225.2 568C262.7 569 300.3 567 337.8 568C375.3 569 412.7 573 450.2 575C487.7 577 525.3 577 562.8 575C600.3 573 637.7 569 675.2 568C712.7 567 750.3 569 787.8 571C825.3 573 862.7 575 881.3 576L900 577L900 539L881.3 539C862.7 539 825.3 539 787.8 537C750.3 535 712.7 531 675.2 529C637.7 527 600.3 527 562.8 530C525.3 533 487.7 539 450.2 541C412.7 543 375.3 541 337.8 540C300.3 539 262.7 539 225.2 534C187.7 529 150.3 519 112.8 518C75.3 517 37.7 525 18.8 529L0 533Z"
              fill={bgColorWave9}
            ></path>
            <path
              d="M0 601L18.8 601C37.7 601 75.3 601 112.8 601C150.3 601 187.7 601 225.2 601C262.7 601 300.3 601 337.8 601C375.3 601 412.7 601 450.2 601C487.7 601 525.3 601 562.8 601C600.3 601 637.7 601 675.2 601C712.7 601 750.3 601 787.8 601C825.3 601 862.7 601 881.3 601L900 601L900 575L881.3 574C862.7 573 825.3 571 787.8 569C750.3 567 712.7 565 675.2 566C637.7 567 600.3 571 562.8 573C525.3 575 487.7 575 450.2 573C412.7 571 375.3 567 337.8 566C300.3 565 262.7 567 225.2 566C187.7 565 150.3 561 112.8 560C75.3 559 37.7 561 18.8 562L0 563Z"
              fill={bgColorWave10}
            ></path>
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
