import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

beforeAll(() => {
  window.fetchAPI = jest.fn(() => Promise.resolve(["12:00", "13:00", "18:00"]));
});

describe("BookingForm", () => {
  test("updates available times when date is selected", async () => {
    // Mock functions
    const mockSetDate = jest.fn();
    const mockDispatchAvailableTimes = jest.fn();

    // Mock the fetchAPI function to return specific times for a given date
    window.fetchAPI = jest.fn((date) => {
      if (date === "2023-12-01") {
        return Promise.resolve(["17:00", "19:00", "21:00"]);
      }
      return Promise.resolve([]);
    });

    render(
      <BookingForm
        date=""
        setDate={mockSetDate}
        time=""
        setTime={() => {}}
        guests={1}
        setGuests={() => {}}
        occasion=""
        setOccasion={() => {}}
        availableTimes={[]}
        dispatchAvailableTimes={mockDispatchAvailableTimes}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2023-12-01" },
    });

    await waitFor(() => {
      expect(window.fetchAPI).toHaveBeenCalledWith("2023-12-01");
      expect(mockDispatchAvailableTimes).toHaveBeenCalled();
    });
  });

  test("allows the user to submit a booking", () => {
    // Mock functions
    const mockSetDate = jest.fn();
    const mockSetTime = jest.fn();
    const mockSetGuests = jest.fn();
    const mockSetOccasion = jest.fn();

    render(
      <BookingForm
        date=""
        setDate={mockSetDate}
        time=""
        setTime={mockSetTime}
        guests={1}
        setGuests={mockSetGuests}
        occasion=""
        setOccasion={mockSetOccasion}
        availableTimes={["17:00", "18:00", "19:00"]}
        dispatchAvailableTimes={() => {}}
      />
    );

    // Simulate user interactions
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2023-12-01" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 4 },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    // Simulate form submission
    fireEvent.submit(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    // Check if the mock functions were called
    expect(mockSetDate).toHaveBeenCalledWith("2023-12-01");
    expect(mockSetTime).toHaveBeenCalledWith("18:00");
    expect(mockSetGuests).toHaveBeenCalledWith(4);
    expect(mockSetOccasion).toHaveBeenCalledWith("Birthday");
  });
});
