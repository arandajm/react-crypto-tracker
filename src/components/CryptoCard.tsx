import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Badge,
} from "@chakra-ui/react";
import millify from "millify";
import { Coin } from "../types";

type Props = {
  crypto: Coin;
};

const CryptoCard = (props: Props) => {
  const { crypto } = props;
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"300px"}
        w={"full"}
        bg={crypto.color}
        boxShadow={"2xl"}
        rounded={"lg"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          rounded={"lg"}
          mt={-12}
          height={"100px"}
          width={"fit-content"}
          bg={"white"}
          p={4}
        >
          <Image
            rounded={"lg"}
            height={100}
            width={100}
            objectFit={"cover"}
            src={crypto.iconUrl}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {crypto.name}
          </Heading>
          <Text fontWeight={800} fontSize={"xl"}>
            {Number(crypto.price).toLocaleString("US", {
              style: "currency",
              currency: "USD",
            })}
          </Text>
          <Badge variant="subtle" colorScheme="grey" fontSize="1em">
            {millify(Number(crypto.marketCap))}
          </Badge>
        </Stack>
      </Box>
    </Center>
  );
};

export default CryptoCard;
