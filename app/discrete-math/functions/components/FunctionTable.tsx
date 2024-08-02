"use client";

import React from 'react';

const FunctionTable = () => {
  return (
    <div className="flex justify-center my-5">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2">x</th>
            <th className="border border-gray-500 px-4 py-2">0</th>
            <th className="border border-gray-500 px-4 py-2">1</th>
            <th className="border border-gray-500 px-4 py-2">2</th>
            <th className="border border-gray-500 px-4 py-2">3</th>
            <th className="border border-gray-500 px-4 py-2">4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500 px-4 py-2">f(x)</td>
            <td className="border border-gray-500 px-4 py-2">3</td>
            <td className="border border-gray-500 px-4 py-2">3</td>
            <td className="border border-gray-500 px-4 py-2">2</td>
            <td className="border border-gray-500 px-4 py-2">4</td>
            <td className="border border-gray-500 px-4 py-2">1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FunctionTable;
