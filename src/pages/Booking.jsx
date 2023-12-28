import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import BookingDataTable from "../components/BookingDataTable";

const timesReducer = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.times;
    default:
      return state;
  }
};

export default function Booking() {
  // State variables for each form field

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [bookingData, setBookingData] = useState([]);

  const [availableTimes, dispatchAvailableTimes] = useReducer(timesReducer, []);

  useEffect(() => {
    const fetchTimes = async () => {
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0];
      if (window.fetchAPI) {
        try {
          const times = await window.fetchAPI(formattedDate);
          dispatchAvailableTimes({ type: "SET_TIMES", times });
        } catch (error) {
          console.error("Error fetching times:", error);
        }
      } else {
        console.error("fetchAPI function not loaded");
      }
    };

    fetchTimes();
  }, []);

  async function initializeTimes() {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    if (window.fetchAPI) {
      console.log("Calling fetchAPI from initializeTimes");
      return await window.fetchAPI(formattedDate);
    } else {
      console.error("fetchAPI function not loaded");
      return [];
    }
  }

  async function updateTimes(state, action) {
    if (action.type === "updateTimes" && window.fetchAPI) {
      console.log("Calling fetchAPI from updateTimes with date:", action.date);
      try {
        const newTimes = await window.fetchAPI(action.date);
        return Array.isArray(newTimes) ? newTimes : [];
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
      {console.log("Available times in BookingForm:", availableTimes)}

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
      {/**
      <BookingDataTable bookingData={bookingData} /> */}
    </>
  );
}
