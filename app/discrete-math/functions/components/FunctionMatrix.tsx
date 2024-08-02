"use client";

import React from 'react';
import { BlockMath } from 'react-katex';

const FunctionMatrix = () => {
  const matrix = `\\begin{pmatrix}
    0 & 1 & 2 & 3 & 4 \\\\
    3 & 3 & 2 & 4 & 1
  \\end{pmatrix}`;

  return (
    <div className="flex justify-center my-5">
      <BlockMath math={`f = ${matrix}`} />
    </div>
  );
};

export default FunctionMatrix;
