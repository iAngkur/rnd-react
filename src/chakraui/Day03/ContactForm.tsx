import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

function ContactForm() {
  const handleSubmit = () => {};

  return (
    <Center minH="100vh" bg="gray.50">
      <Stack
        spacing={6}
        maxW="lg"
        p={8}
        boxShadow="md"
        bg="white"
        borderRadius="lg"
        as="form"
        onSubmit={handleSubmit}
      >
        <FormControl isRequired isInvalid>
          <FormLabel>Name:</FormLabel>
          <Input placeholder="John" isInvalid errorBorderColor="red.400" />
          <FormErrorMessage>Please provide your name</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid>
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            placeholder="john@example.com"
            isInvalid
            errorBorderColor="red.400"
          />
          <FormErrorMessage>Please provide your email</FormErrorMessage>
        </FormControl>
        <FormControl>
          <Textarea placeholder="Your message" />
        </FormControl>
        <FormControl>
          <Checkbox>Subscribe to newsletter</Checkbox>
        </FormControl>
        <Button type="submit" colorScheme="purple">
          Submit
        </Button>
      </Stack>
    </Center>
  );
}

export default ContactForm;
