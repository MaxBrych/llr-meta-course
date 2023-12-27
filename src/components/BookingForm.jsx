import React from "react";

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

  return (
    <>
      <div className="about">
        <div className="col-left">
          <h2>Make a reservation</h2>
          <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={handleDateChange}
            />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleTimeChange}>
              {Array.isArray(availableTimes) &&
                availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={handleGuestsChange}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={handleOccasionChange}
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
          </form>
        </div>
        <div className="col-right">Restaurant select</div>
      </div>
    </>
  );
}
