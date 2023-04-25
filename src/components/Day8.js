import React, { useState, useEffect } from "react";

function Dpp() {
  const [message, setMessage] = useState("Hello dear one, learning React...?");

  useEffect(() => {
    console.log("use effect hook called");
    const timeoutId = setTimeout(() => {
      setMessage("Great.... This is time to learn about HOOKS");
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []); // empty array as second parameter to useEffect to only run once on mount

  return <div>{message}</div>;
}

export default Dpp;