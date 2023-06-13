import React, { useState } from 'react';

export default function FilterContainer() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Przykładowe dane
  const elements = [
    { id: 1, name: 'Element 1', checked: true },
    { id: 2, name: 'Element 2', checked: false },
    { id: 3, name: 'Element 3', checked: true },
    { id: 4, name: 'Element 4', checked: false },
  ];

  // Filtruj dane na podstawie stanu pola wyboru (checkbox)
  const filteredElements = isChecked
    ? elements.filter((element) => element.checked)
    : elements;

  return (
    <div>
      <ul>
        {filteredElements.map((element) => (
          <><input type="checkbox" key={element.id} ></input><li key={element.id}>{element.name}</li></>
        ))}
      </ul>
    </div>
  );
};