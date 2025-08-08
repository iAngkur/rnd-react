import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function ProfileCard() {
  return (
    <Center h="100vh" bg="gray.50">
      <Flex
        gap={10}
        alignItems="flex-start"
        width="600px"
        p={10}
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
      >
        <Image
          src="https://bit.ly/dan-abramov"
          alt="Profile photo of a men"
          width="200px"
          borderRadius="md"
          objectFit="cover"
        />
        <Stack spacing={4} maxW="300px">
          <Heading as="h2" size="lg">
            John Doe
          </Heading>
          <Heading size="md" color="gray.600">
            Frontend Developer
          </Heading>
          <Text textAlign="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            voluptates deleniti maiores vitae numquam atque repellendus iure
            earum accusantium ipsam, aut dolor at.
          </Text>
          <Button colorScheme="purple" width="fit-content">
            Follow
          </Button>
        </Stack>
      </Flex>
    </Center>
  );
}

export default ProfileCard;
