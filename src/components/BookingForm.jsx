import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import "@material/web/button/filled-button.js";
import "@material/web/checkbox/checkbox.js";
import "@material/web/field/outlined-field.js";
import { CheckCircle } from "lucide-react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  NumberInput,
  NumberInputField,
  useToast,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

export default function BookingForm({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  dispatchAvailableTimes,
}) {
  // Event handlers for form field changes
  const handleDateChange = (event) => {
    setDate(event.target.value);
    dispatchAvailableTimes({ type: "updateTimes", date: event.target.value });
  };
  const handleTimeChange = (event) => setTime(event.target.value);
  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };
  const handleOccasionChange = (event) => setOccasion(event.target.value);

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setIsFormValid(date && time && guests > 0 && occasion);
  }, [date, time, guests, occasion]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
    } else {
      toast({
        title: "Missing information.",
        description: "Please fill all required fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (isSubmitted) {
    return (
      <Flex h={"800px"} bg={"white"}>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          gap={8}
        >
          <CheckCircle size={64} color="#495e57" />
          <h2>Successfully reserved a table</h2>
          <Link class="link" to="/">
            Finish
          </Link>
        </Flex>

        <div className="booking-col"></div>
      </Flex>
    );
  }

  return (
    <Flex h={"800px"} bg={"white"} flexDirection={["column", "column", "row"]}>
      <Box p={8} className="col-left" width="100%">
        <h2>Make a reservation</h2>
        <Box
          as="form"
          style={{ display: "grid", maxWidth: "640px", gap: "20px" }}
          color={"black"}
          borderColor={"black"}
          onSubmit={handleSubmit}
          width="100%"
        >
          <FormControl id="res-date" width="100%">
            <FormLabel>Choose date</FormLabel>

            <Input
              width="100%"
              borderColor="gray.300"
              _hover={{ borderColor: "gray.400" }}
              _focus={{ borderColor: "gray.500" }}
              _active={{ borderColor: "gray.500" }}
              color={"gray.500"}
              textColor={"gray.500"}
              colorScheme="gray"
              type="date"
              value={date}
              onChange={handleDateChange}
            />
          </FormControl>

          <FormControl id="res-time">
            <FormLabel>Choose time</FormLabel>
            <Select
              borderColor="gray.300"
              width="100%"
              _hover={{ borderColor: "gray.400" }}
              _focus={{ borderColor: "gray.500" }}
              bg={"white"}
              value={time}
              onChange={handleTimeChange}
            >
              {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
                availableTimes.map((timeOption) => (
                  <option key={timeOption} value={timeOption}>
                    {timeOption}
                  </option>
                ))
              ) : (
                <option disabled>Loading times...</option>
              )}
            </Select>
          </FormControl>

          <FormControl id="guests">
            <FormLabel>Number of guests</FormLabel>

            <NumberInput
              width="100%"
              min={1}
              max={10}
              value={guests}
              onChange={(valueString) => setGuests(parseInt(valueString))}
            >
              <NumberInputField
                width="100%"
                borderColor="gray.300"
                _hover={{ borderColor: "gray.400" }}
                _focus={{ borderColor: "gray.500" }}
              />
            </NumberInput>
          </FormControl>

          <FormControl id="occasion">
            <FormLabel>Occasion</FormLabel>
            <Select
              width="100%"
              borderColor="gray.300"
              value={occasion}
              onChange={handleOccasionChange}
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Select>
          </FormControl>

          <Button
            width="100%"
            bg={"#f4ce14"}
            className="button"
            colorScheme="yellow"
            type="submit"
            disabled={!isFormValid}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <div className="booking-col"></div>
    </Flex>
  );
}
