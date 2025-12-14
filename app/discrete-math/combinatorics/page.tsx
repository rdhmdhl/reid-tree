import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import PascalTriangle from "./components/PascalTriangle";

function Combinatorics() {
  return (
    <div className="flex flex-col justify-center font-mono font-bold text-center m-10">
      <h2 className="text-2xl">Combinatorics</h2>
      <div className="members outline p-5 m-4 rounded">
        <p className="text-sm font-thin mt-4 italic">What is it?</p>
        <p className="text-sm font-thin mt-4">
          Brilliant.org describes combinatorics well. They call it, the
          mathematics of counting and arranging. It applies mathematical
          operations to count quantities that are much too large to be counted
          the conventional way.
        </p>
        <p className="text-sm font-thin mt-4">
          This is useful in computer science, as it can be used to develop
          estimates about how many operations a computer algorithm will require.
        </p>
      </div>
      {/* PRODUCT AND SUM */}
      <h2 className="text-2xl mt-4">Rule of Product and Sum</h2>
      <div className="members outline p-5 m-4 rounded">
        <p className="text-sm font-thin mt-4">
          An arragement is a way objects could be grouped, and the simpliest
          rules regarding arragements is the rule of product and sum. These
          rules govern how to count arrangements using the operations of
          multiplication and addition.
        </p>
        <p className="text-sm font-bold mt-4">Rule of Product</p>
        <p className="text-sm font-thin">
          If there are <InlineMath math={"m"} /> ways to arrage something, and
          then <InlineMath math={"n"} /> ways to arrange something else after
          that, then the number of ways to arrange both of those things is{" "}
          <InlineMath math={"m \\times n"} />
        </p>
        <p className="text-sm font-bold mt-4">Rule of Sum</p>
        <p className="text-sm font-thin">
          If there are <InlineMath math={"m"} /> ways to arrage something, and
          then <InlineMath math={"n"} /> ways to arrange something else after
          that, then the number of ways to arrange both of those things is{" "}
          <InlineMath math={"m + n"} />
        </p>
        <p className="text-sm font-bold mt-4 underline">Example</p>
        <p className="text-sm font-thin">
          How many integers between 1 and 100 are divisible by 7 or 13?
        </p>
        <p className="text-sm font-thin mt-4">
          The number of integers between 1 and 100 that are divisible by 7 is{" "}
          <InlineMath
            math={"\\left\\lfloor \\frac{100}{7} \\right\\rfloor = 14"}
          />
        </p>
        <p className="text-sm font-thin mt-4">
          The number of integers between 1 and 100 that are divisible by 13 is{" "}
          <InlineMath
            math={"\\left\\lfloor \\frac{100}{13} \\right\\rfloor = 7"}
          />
        </p>
        <p className="text-sm font-thin mt-4">
          It seems like the answer would be <InlineMath math={"7 + 14 = 21"} />,
          however, this would be an error in double counting. One must consider
          that its possible for an integer to be divisible both by 7 and 14.
        </p>
        <p className="text-sm font-thin mt-4">
          The number of integers between 1 and 100 that are divisible by 7 and
          13 is{" "}
          <InlineMath
            math={
              "\\left\\lfloor \\frac{100}{7 \\times 13} \\right\\rfloor = 1"
            }
          />
        </p>
        <p className="text-sm font-thin mt-4">
          To account for the double counting, this amount is subtracted from the
          original answer of 21. That means there are 20 integers between 1 and
          100 that are divisible by 7 or 13.
        </p>
      </div>
      {/* Permutations and Combinations */}
      <h2 className="text-2xl mt-4">Permutations and Combinations</h2>
      <div className="members outline p-5 m-4 rounded">
        <p className="text-sm font-thin mt-4">
          A permutation is an arrangement of objects with regard to order. In
          combinatorics, the focus is usually on counting the number of elements
          in a set of permutations.
        </p>
        <p className="text-sm font-bold mt-4 underline">Example</p>
        <p className="text-sm font-thin">
          How many permutations are there of the letters ABC?
        </p>
        <p className="text-sm font-thin">
          The permutations are: ABC, ACB, BAC, BCA, CAB, CBA.
        </p>
        <p className="text-sm font-thin mt-4">There are six permutations.</p>
      </div>
      {/* Permutations and Combinations */}
      <h2 className="text-2xl mt-4">Binomial Theorem</h2>
      <div className="members outline p-5 m-4 rounded">
        <PascalTriangle />
        <p className="mt-4">
          This is called Pascal&apos;s Triangle. It&apos;s named after the 17th
          century French mathematician, Blaise Pascal (1623 - 1662). This
          triangle visualizes many properties of the binomial coefficient and
          the binomial theorem. Furthermore, its recursive nature and patterns
          are frequently found in dynamic programming, data structures, and even
          in optimization problems where understanding combinations and subsets
          is crucial.
        </p>
        <p className="text-sm font-bold mt-4 underline">Example</p>
        <p className="text-sm font-thin mt-4">
          What is the coefficient of the <InlineMath math={"x^3y^{13}"} /> term
          in the polynomial expansion of <InlineMath math={"(x + y)^{16}"} />
        </p>
        <p>We will use the binomial theorem to solve this.</p>
        <BlockMath
          math={"(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k"}
        />
        <p>
          In this case, <InlineMath math={"n = 16"} />. We are looking for the
          term where <InlineMath math={"x"} /> has the power of 3, and{" "}
          <InlineMath math={"y"} /> has the power of 13.
        </p>
        <p>
          This corresponds to <InlineMath math={"n - k = 3"} /> and{" "}
          <InlineMath math={"k = 13"} />
        </p>
        <p className="mt-4">
          so, <InlineMath math={"k = 13"} />.
        </p>
        <p className="mt-4">
          The binomial coefficient <InlineMath math={"\\binom{n}{k}"} /> is
          given by:
        </p>
        <BlockMath math={"\\binom{16}{13} = \\binom{16}{3}"} />
        <p className="mt-4">
          This is because{" "}
          <InlineMath math={"\\binom{n}{k} = \\binom{n}{n-k}"} />.
        </p>
        <p className="mt-4">
          Calculate <InlineMath math={"\\binom{16}{3}"} />:
        </p>
        <BlockMath
          math={
            "\\binom{16}{3} = \\frac{16!}{3!(16-3)!} = \\frac{16!}{3! \\cdot 13!}"
          }
        />
        <p>Simplifying this:</p>
        <BlockMath math={"\\binom{16}{3} ="} />
        <BlockMath
          math={"\\frac{16 \\times 15 \\times 14}{3 \\times 2 \\times 1} = "}
        />
        <BlockMath math={"\\frac{16 \\times 15 \\times 14}{6} = 560"} />

        <p className="m-5">
          Therefore, the coefficient of the <InlineMath math={"x^3 y^{13}"} />{" "}
          term in the polynomial expansion of{" "}
          <InlineMath math={"(x + y)^{16}"} /> is 560.
        </p>
      </div>
    </div>
  );
}

export default Combinatorics;
