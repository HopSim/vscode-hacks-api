import React, { useState, useEffect } from "react";
import axios from "axios";

function useHandleChange() {
  // Declare a new state variable, which we'll call "count"
  const [searchTerm, setSearchTerm] = useState("tip time");
  const [foundTip, setFoundTip] = useState("Tip");

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  const handleSearch = () => {
    axios.get(`/search?value=${searchTerm}`).then(response => {
      setFoundTip(response.data);
      console.log(response.data);
    });
  };

  return (
    <div>
      <form onChange={handleSearch}>
        <input onChange={handleChange} value={searchTerm} />
        {/* <button onClick={handleSearch}>give me something good</button> */}
      </form>
      <div>Search result: {foundTip}</div>
    </div>
  );
}

export default useHandleChange;
