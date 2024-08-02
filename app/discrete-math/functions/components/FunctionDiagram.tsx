"use client";

import React from 'react';

const FunctionDiagram = () => {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="white" strokeWidth="2">
      <line x1="50" y1="50" x2="100" y2="150" markerEnd="url(#arrow)" />
        <line x1="100" y1="50" x2="50" y2="150" markerEnd="url(#arrow)" />
        <line x1="150" y1="50" x2="150" y2="150" markerEnd="url(#arrow)" />
      </g>
      <g fontSize="20" textAnchor="middle" fill="white">
        <text x="50" y="40">1</text>
        <text x="100" y="40">2</text>
        <text x="150" y="40">3</text>
        <text x="50" y="180">1</text>
        <text x="100" y="180">2</text>
        <text x="150" y="180">3</text>
      </g>
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 Z" fill="white" />
        </marker>
      </defs>
    </svg>
  );
};

export default FunctionDiagram;
