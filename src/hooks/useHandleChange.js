import React, { useState } from "react";

function useHandleChange(initialValue) {
  // Declare a new state variable, which we'll call "count"
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

export default useHandleChange;
