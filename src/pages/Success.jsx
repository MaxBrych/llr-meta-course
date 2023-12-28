// Success.jsx
import React from "react";
import { CheckCircle } from "lucide-react";
import { Flex, Box, Link, VStack } from "@chakra-ui/react";
import BookingDataTable from "../components/BookingDataTable";

const Success = () => {
  const bookingData = JSON.parse(localStorage.getItem("bookingData")) || []; // Retrieve from local storage

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      h="800px"
      bg="white"
      gap="8"
    >
      <VStack spacing={4} textAlign="center">
        <CheckCircle size={64} color="#495e57" />
        <h2>Successfully reserved a table</h2>
        <Link href="/" class="button" color="blue.500">
          Finish
        </Link>
      </VStack>
      <BookingDataTable bookingData={bookingData} />
    </Flex>
  );
};

export default Success;
