// This is a mock function to simulate fetching available reservation times
function fetchAPI(date) {
  // Simulating a server response based on the provided date
  // Normally, you would make an AJAX call here
  console.log("Fetching available times for:", date);

  // Mock data: an array of times
  const times = ["12:00", "13:00", "14:00", "18:00", "19:00", "20:00"];

  // Return a promise that resolves with the times
  return new Promise((resolve) => {
    setTimeout(() => resolve(times), 1000); // Simulate network delay
  });
}

// This is a mock function to simulate submitting form data
function submitAPI(formData) {
  // Simulating form submission
  console.log("Submitting form data:", formData);

  // Return a promise that resolves with true to indicate success
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000); // Simulate network delay
  });
}

// Expose the functions to the global scope
window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;
