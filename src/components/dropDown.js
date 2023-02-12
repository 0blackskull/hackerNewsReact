import React, { useState } from "react";

const Dropdown = ({ handleSelect, values, filter, label, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVal, setSelectedVal] = useState(defaultValue);
  const handleChange = (event) => {
    setSelectedVal(event.target.innerHTML);
    handleSelect(selectedVal);
    setIsOpen(!isOpen)
  };
  //  React.useEffect(() => {
  //    handleSelect(selectedVal);
  //  }, [selectedVal]);
  return (
    <div className="relative ml-2 ">
      <button
        className="bg-white  border border-gray-400 p-2 flex flex-row mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedVal}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute bg-white rounded border border-gray-400">
          <ul className="list-reset" onClick={handleChange} label={filter}>
            {values.map((valueTemp) => (
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">
                {valueTemp}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
