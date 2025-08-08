import {
  Button,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: "$49.99",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$199.99",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$79.99",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 4,
    name: "Fitness Tracker",
    price: "$59.99",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 5,
    name: "Noise Cancelling Headphones",
    price: "$249.99",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 6,
    name: "USB-C Charger",
    price: "$29.99",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 7,
    name: "Portable Power Bank",
    price: "$39.99",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: "$69.99",
    image: "https://picsum.photos/300/300",
  },
];

function ProductCard() {
  return (
    <Center minH="100vh" bg="gray.50" p={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={10}>
        {products.map((product) => (
          <Stack
            boxShadow="lg"
            p={8}
            maxW="sm"
            h="auto"
            alignItems="center"
            spacing={4}
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              objectFit="cover"
              w="full"
              h="160px"
            />
            <Heading as="h3" size="md" textAlign="center">
              {product.name}
            </Heading>
            <Text color="green.500" fontWeight="semibold">
              Price: {product.price}
            </Text>
            <Button colorScheme="blue" size="sm" w="full">
              Add to Cart
            </Button>
          </Stack>
        ))}
      </SimpleGrid>
    </Center>
  );
}

export default ProductCard;
