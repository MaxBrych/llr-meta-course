import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import BookingDataTable from "../components/BookingDataTable";

export default function Booking() {
  // State variables for each form field

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [bookingData, setBookingData] = useState([]);

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  async function initializeTimes() {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    // Check if fetchAPI is loaded
    if (window.fetchAPI) {
      return await window.fetchAPI(formattedDate);
    } else {
      console.error("fetchAPI function not loaded");
      return []; // or some default value
    }
  }

  async function updateTimes(state, action) {
    if (action.type === "updateTimes" && window.fetchAPI) {
      try {
        const newTimes = await window.fetchAPI(action.date);
        return Array.isArray(newTimes) ? newTimes : []; // Ensure it's always an array
      } catch (error) {
        console.error("Error fetching times:", error);
        return [];
      }
    }
    return state;
  }

  useEffect(() => {
    initializeTimes().then((times) => {
      if (Array.isArray(times)) {
        dispatchAvailableTimes({ type: "init", times });
      }
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming you collect the booking info into an object
    const newBooking = {
      date,
      time,
      guests,
      occasion,
    };
    setBookingData([...bookingData, newBooking]);
  };

  return (
    <>
      <BookingForm
        handleSubmit={handleSubmit}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatchAvailableTimes}
      />
      <BookingDataTable bookingData={bookingData} />
    </>
  );
}
