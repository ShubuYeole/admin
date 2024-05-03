import React from 'react';

const SearchInput = ({ placeholder }) => {
  return (
    <div className="mr-2">
      <input
        type="text"
        className="bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md py-1 px-3"
        placeholder={placeholder}
      />
      <button className="px-3 py-1"> {/* Icon for search button (optional) */}</button>
    </div>
  );
};

export default SearchInput;
