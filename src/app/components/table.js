import React from 'react';

const Table = () => {
  const data=[
    { id: 1, name: 'Product 1', model: 'Model A', range: 'Range 1', type: 'Type X' },
    { id: 2, name: 'Product 2', model: 'Model B', range: 'Range 2', type: 'Type Y' },
    { id: 3, name: 'Product 3', model: 'Model C', range: 'Range 3', type: 'Type Z' },
  ];


  
  return (
    <div className="container mx-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Model</th>
            <th className="px-4 py-2">Range</th>
            <th className="px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.model}</td>
              <td className="border px-4 py-2">{item.range}</td>
              <td className="border px-4 py-2">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
