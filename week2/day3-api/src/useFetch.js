import { useState, useEffect } from "react";

// Custom hook for fetching API data
function useFetch(url) {
  const [data, setData] = useState(null); // To store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    setLoading(true); // Start loading
    setError(null); // Reset errors

    fetch(url) // Make API request
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json(); // Convert to JSON
      })
      .then((json) => {
        setData(json); // Store data
        setLoading(false); // Finished loading
      })
      .catch((err) => {
        setError(err.message); // Store error
        setLoading(false); // Finished loading
      });
  }, [url]); // Re-run effect if URL changes

  return { data, loading, error }; // Return states
}

export default useFetch;
