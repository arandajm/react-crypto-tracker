import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
const NewsCard = (props: any) => {
  const { news } = props;
  console.log(news);
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box bg={"gray.100"}>
          <Image
            src={news?.image?.thumbnail.contentUrl}
            boxSize="100px"
            objectFit="cover"
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            News
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {news.name}
          </Heading>
          <Text color={"gray.500"}>{news.description}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Image
              src={news.provider[0].image?.thumbnail.contentUrl}
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
            />
            <Text fontWeight={600}>{news.provider[0].name}</Text>
            <Text color={"gray.500"}>
              {new Intl.DateTimeFormat("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(news.datePublished))}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default NewsCard;
