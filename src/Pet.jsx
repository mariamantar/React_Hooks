import React from "react";

export default function Pet({ name, animal, breed }) {
  const x = name.toUpperCase();
  return (
    <div>
      <h1>
        {name}
        {x}
      </h1>
      <h1>{animal}</h1>
      <h1>{breed}</h1>
    </div>
  );
}
