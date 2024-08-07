import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const PascalTriangle = () => {
  return (
    <div className="flex flex-col items-center max-w-full p-4">
      <p className="text-sm text-center">The binomial theorem shows how to expand expressions like <InlineMath math={'(a + b)^n'}/></p>
      <div className='text-xs'>
        <BlockMath math={'(x + y)^0 = 1'} />
        <BlockMath math={'(x + y)^1 = x + y'} />
        <BlockMath math={'(x + y)^2 = x^2 + 2xy + y^2'} />
        <BlockMath math={'(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3'} />
        <BlockMath math={'(x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4'} />
        <BlockMath math={'...'} />
      </div>
      <p className="text-sm text-center">When we look at the coefficients in the expressions above, we find the following pattern:</p>
      <div className="p-2 text-xs">
        <BlockMath
          math={`
            \\begin{array}{c c c c c c c c c c c}
              & & & & & 1 & & & & & \\\\
              & & & & 1 & & 1 & & & & \\\\
              & & & 1 & & 2 & & 1 & & & \\\\
              & & 1 & & 3 & & 3 & & 1 & & \\\\
              & 1 & & 4 & & 6 & & 4 & & 1 & \\\\
            1 & & 5 & & 10 & & 10 & & 5 & & 1 \\\\
            \\end{array}
          `}
        />
      </div>
    </div>
  );
};

export default PascalTriangle;