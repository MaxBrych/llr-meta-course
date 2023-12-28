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
  name,
  setName,
  dispatchAvailableTimes,

  handleSubmit,
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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();

  const [nameError, setNameError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [guestsError, setGuestsError] = useState("");
  const [occasionError, setOccasionError] = useState("");

  useEffect(() => {
    setIsFormValid(name && date && time && guests > 0 && occasion);
  }, [name, date, time, guests, occasion]);

  const validateForm = () => {
    let isValid = true;
    if (!name) {
      setNameError("Information is required.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!date) {
      setDateError("Information is required.");
      isValid = false;
    } else {
      setDateError("");
    }

    if (!time) {
      setDateError("Information is required.");
      isValid = false;
    } else {
      setTimeError("");
    }

    if (!guests) {
      setDateError("Information is required.");
      isValid = false;
    } else {
      setGuestsError("");
    }

    if (!occasion) {
      setDateError("Information is required.");
      isValid = false;
    } else {
      setOccasionError("");
    }

    return isValid;
  };

  const localHandleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const formData = { name, date, time, guests, occasion };
      handleSubmit(formData);
      setIsSubmitted(true);
    }
  };

  return (
    <Flex h={"800px"} bg={"white"} flexDirection={["column", "column", "row"]}>
      <Box p={8} className="col-left" width="100%">
        <h2>Make a reservation</h2>
        <Box
          as="form"
          style={{ display: "grid", maxWidth: "640px", gap: "20px" }}
          color={"black"}
          borderColor={"black"}
          onSubmit={localHandleSubmit}
          width="100%"
        >
          <FormControl id="res-name" width="100%" isInvalid={!!nameError}>
            <FormLabel>Your Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={handleNameChange}
              width="100%"
              borderColor="gray.300"
              _hover={{ borderColor: "gray.400" }}
              _focus={{ borderColor: "gray.500" }}
              _active={{ borderColor: "gray.500" }}
              color={"gray.500"}
              textColor={"gray.500"}
              colorScheme="gray"
            />
            {nameError && <FormErrorMessage>{nameError}</FormErrorMessage>}
          </FormControl>
          <FormControl id="res-date" width="100%" isInvalid={!!dateError}>
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
            {dateError && <FormErrorMessage>{dateError}</FormErrorMessage>}
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
            {timeError && <FormErrorMessage>{timeError}</FormErrorMessage>}
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
            {guestsError && <FormErrorMessage>{guestsError}</FormErrorMessage>}
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
            {occasionError && (
              <FormErrorMessage>{occasionError}</FormErrorMessage>
            )}
          </FormControl>

          <Button
            width="100%"
            bg={"#f4ce14"}
            className="button"
            colorScheme="yellow"
            type="submit"
            disabled={!isFormValid}
            onSubmit={localHandleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <div className="booking-col"></div>
    </Flex>
  );
}
