import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

describe("BookingForm", () => {
  test("allows the user to submit a booking", () => {
    // Mock the props
    const mockSetDate = jest.fn();
    const mockSetTime = jest.fn();
    const mockSetGuests = jest.fn();
    const mockSetOccasion = jest.fn();
    const mockDispatchAvailableTimes = jest.fn();

    // Render the component with mock functions
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
        dispatchAvailableTimes={mockDispatchAvailableTimes}
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
    expect(mockDispatchAvailableTimes).toHaveBeenCalled();
  });
});
