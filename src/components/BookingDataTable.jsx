// BookingDataTable.jsx
import React from "react";
import { Box, VStack, HStack, Text, Divider } from "@chakra-ui/react";

const BookingDataTable = ({ bookingData }) => {
  return (
    <VStack
      border="1px solid gray"
      borderRadius="lg"
      p={4}
      alignItems="start"
      w="full"
      spacing={4}
      bg="white"
      shadow="md"
      maxWidth="xl"
    >
      {bookingData.map((booking, index) => (
        <>
          <h3 key={index}>Your Reservation {booking.name}</h3>
          <Box
            key={index}
            w="full"
            p={3}
            border="1px solid gray"
            borderRadius="md"
            bg="gray.50"
          >
            <VStack spacing={2}>
              <HStack justifyContent="space-between" w="full">
                <Text fontWeight="bold">Date:</Text>
                <Text color="black">{booking.date}</Text>
              </HStack>
              <Divider />
              <HStack justifyContent="space-between" w="full">
                <Text fontWeight="bold">Time:</Text>
                <Text color="black">{booking.time}</Text>
              </HStack>
              <Divider />
              <HStack justifyContent="space-between" w="full">
                <Text fontWeight="bold">Guests:</Text>
                <Text color="black">{booking.guests}</Text>
              </HStack>
              <Divider />
              <HStack justifyContent="space-between" w="full">
                <Text fontWeight="bold">Occasion:</Text>
                <Text color="black">{booking.occasion}</Text>
              </HStack>
            </VStack>
          </Box>
        </>
      ))}
    </VStack>
  );
};

export default BookingDataTable;
