import React from "react";
import { useState, useEffect } from "react";
import "@material/web/button/filled-button.js";
import "@material/web/checkbox/checkbox.js";
import "@material/web/field/outlined-field.js";
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
} from "@chakra-ui/react";

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
  const handleGuestsChange = (event) => setGuests(event.target.value);
  const handleOccasionChange = (event) => setOccasion(event.target.value);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = date && time && guests > 0 && occasion;
    console.log({ date, time, guests, occasion, isValid });
    setIsFormValid(isValid);
  }, [date, time, guests, occasion]);

  return (
    <>
      <Flex>
        <div className="col-left">
          <h2>Make a reservation</h2>
          <Box
            as="form"
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          >
            <FormControl id="res-date">
              <FormLabel>Choose date</FormLabel>
              <Input type="date" value={date} onChange={handleDateChange} />
            </FormControl>

            <FormControl id="res-time">
              <FormLabel>Choose time</FormLabel>
              <Select value={time} onChange={handleTimeChange}>
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
                min={1}
                max={10}
                value={guests}
                onChange={(valueString) => setGuests(parseInt(valueString))}
              >
                <NumberInputField />
              </NumberInput>
            </FormControl>

            <FormControl id="occasion">
              <FormLabel>Occasion</FormLabel>
              <Select value={occasion} onChange={handleOccasionChange}>
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Select>
            </FormControl>

            <Button type="submit" disabled={!isFormValid} colorScheme="blue">
              Submit
            </Button>
          </Box>
        </div>
        <div className="booking-col">Restaurant select</div>
      </Flex>
    </>
  );
}
