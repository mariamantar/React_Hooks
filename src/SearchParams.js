import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // we set the default state after defining it
  const [location, setLocation] = useState("Seattle Wa");
  const [animal, setAnimal] = useState("dog");

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
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={e => setAnimal(e.target.value)}
              onBlur={e => setAnimal(e.target.value)}
            ></select>
            <option>All</option>
            {ANIMALS.map(animal => (
              <option value={animal}>{animal}</option>
            ))}
          </label>
        </label>
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default SearchParams;
