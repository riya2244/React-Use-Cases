//custom hook to handle form submission with loading, success, and error states

import { useState } from "react";

function useSubmit() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  async function submitData(url, body) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      console.log("API Response:", res.status, data); // debugging

      if (!res.ok) throw new Error("Submit failed");

      setSuccess("Form Submitted Successfully!");
      return data;
    } catch (err) {
      console.error("Fetch Error:", err); // Log full error
      setError(`Failed to fetch: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return { loading, success, error, submitData };
}

export default useSubmit;
