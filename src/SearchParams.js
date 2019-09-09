import React, { useState } from "react";

const SearchParams = () => {
  // we set the default state after defining it
  const [location, setLocation] = useState("Seattle Wa");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default SearchParams;
