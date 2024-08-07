"use-client";

import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import FunctionGraph from "./components/FunctionGraph";
import FunctionDiagram from "./components/FunctionDiagram";
import FunctionTable from "./components/FunctionTable";
import FunctionMatrix from "./components/FunctionMatrix";

function functions() {
  return (
    <div className="flex flex-col justify-center font-mono font-bold text-center m-10">
      <h2 className="text-2xl">Functions</h2>
      <div className="members outline p-5 m-4 rounded">
        <p className="text-sm font-thin">
          A rule that assigns each input element of a set, called the domain, to
          one element of a second set, called the codomain.
        </p>
        <BlockMath math={"f: x \\to y"} />
        <p className="text-sm font-thin">
          Above describes a function with name f, domain X and codomain Y.
          However, it does not tell us which function f is though. To define the
          function, we must describe the rule. This is often done by giving a
          formula to compute the output for any input (although this is
          certainly not the only way to describe the rule).{" "}
        </p>
        <p className="text-sm font-thin">
          For example, consider the function: 
        </p>
          <BlockMath math={"f: N \\to N"} />{" "}
        <p>
            defined by 
        </p>
          <BlockMath math={"f(x) = x^2 + 3"} />
        <p>
          Here the domain and codomain are the same set (the natural numbers).
          The rule is: take your input, multiply it by itself and add 3. This
          works because we can apply this rule to every natural number (every
          element of the domain) and the result is always a natural number (an
          element of the codomain). Notice though that not every natural number
          is actually an output (there is no way to get 0, 1, 2, 5, etc.). The
          set of natural numbers that are outputs is called the range of the
          function (in this case, the range is{" "}
          <span>{"{3, 4, 7, 12, 19, 28, ...}"}</span>
          , all the natural numbers
          that are 3 more than a perfect square).
        </p>
        <p className="text-sm font-thin mt-4">
          The key thing that makes a rule a function is that there is exactly
          one output for each input. That is, it is important that the rule be a
          good rule. What output do we assign to the input 7? There can only be
          one answer for any particular function.
        </p>
      </div>
      {/* DESCRIBING FUNCTIONS */}
      <h2 className="text-2xl mt-4">Describing Functions</h2>
      <div className="members outline p-5 m-4 rounded">
        <p className="text-sm font-thin">
          It is worth making a distinction between a function and its
          description. The function is the abstract mathematical object that in
          some way exists whether or not anyone ever talks about it. But when we
          do want to talk about the function, we need a way to describe it. A
          particular function can be described in multiple ways.
        </p>
        <p className="text-sm font-thin mt-4">
          Some calculus textbooks talk about the Rule of Four, that every
          function can be described in four ways: algebraically (a formula),
          numerically (a table), graphically, or in words. In discrete math, any
          of these can be used to describe functions, but we can also be more
          specific since we are primarily concerned with functions that have ℕ
          or a finite subset of ℕ as their domain.
        </p>
        <p className="text-sm font-thin mt-4">
          Describing a function graphically usually means drawing the graph of
          the function: plotting the points on the plane. We can do this, and
          might get a graph like the following for a function
        </p>
        <div className="text-sm font-thin">
          <BlockMath math={"f: \\{ 1, 2, 3 \\} \\to \\{1, 2, 3\\}"} />
        </div>
        <FunctionGraph />
        <p className="text-sm font-thin mt-4">
            It would be absolutely WRONG to connect the dots or try to fit them to some curve. There are only three elements in the domain. A curve would mean that the domain contains an entire interval of real numbers.
        </p>
        <p className="text-sm font-thin mt-4">
            Here is another way to represent that same function:
        </p>
        <div className="text-sm font-thin flex justify-center ">
            <FunctionDiagram/>
        </div>
        <p className="text-sm font-thin mt-4">
            This shows that the function <InlineMath math={'f'}/> sends 1 to 2, 2 to 1 and 3 to 3: just follow the arrows.
        </p>
        <p className="text-sm font-thin mt-4">
            Here's what this function would look like in the table format:
        </p>
        <FunctionTable/>
        <p className="text-sm font-thin mt-4">This can be simplified further by using the matrix format, but not the same sort of matrix found in linear algebra. </p>
        <FunctionMatrix/>
      </div>
      
      {/* COMMON FUNCTIONS IN COMP SCI */}
      <h2 className="text-2xl mt-4">Common Functions in Computer Science</h2>
      <div className="members outline p-5 m-4 rounded">
        <p className="text-sm underline">
          Modulo Function:
        </p>
        <p className="text-sm font-thin">
          <InlineMath math={'M \\% N'} />
        </p>
        <p className="text-sm font-thin">
          Can also be described as the "remainder function". M divided by N, equals the remainder. 
        </p>
        <p className="text-sm mt-4 underline">
          Factorial Function:
        </p>
        <p className="text-sm font-thin">
          <InlineMath math={'n !'}/>
        </p>
        <p className="text-sm font-thin">
          <InlineMath math={'1 * 2 * 3 * 4 * 5 .... n'}/>
        </p>
        <p className="text-sm font-thin">
          Very important when dealing with "complexity", as values explode as they get closer to <InlineMath math={"n"}/>
        </p>
        <p className="text-sm mt-4 underline">
          Floor Function:
        </p>
        <p className="text-sm font-thin">
          <InlineMath math={'f(x) = [ x ]'}/>
        </p>
        <p className="text-sm font-thin">
          <BlockMath math={'x = 3.00001'}/>
          <BlockMath math={'[x] = 3'}/>
          or
          <BlockMath math={'x = -5.9834'}/>
          <BlockMath math={'[x] = -6'}/>
          Descibes the "floor" of the integer, or rounds to the lowest integer. The counterpart to this function is the "ceiling function", which is the inverse.
        </p>
        <p className="text-sm mt-4 underline">
          Exponential Function:
        </p>
        <p className="text-sm font-thin">
          <InlineMath math={'f(x) = 2^x'}/>
        </p>
        <p className="text-sm font-thin">
          Input variable x occurs as an exponent
        </p>
        <p className="text-sm mt-4 underline">
          Logarithm Function:
        </p>
        <p className="text-sm font-thin">
          <InlineMath math={'\\log_a(x) = ?'} />
        </p>
        <p className="text-sm font-thin m-1">
          <InlineMath math={'a^? = x'} />
        </p>
        <p className="text-sm font-thin m-4">
          "a" raised to what equals "x". There are many different logarithm bases. 
        </p>
        <p>
          Binary logarithm: <InlineMath math={'log_z(x) \\Rightarrow \\lg(x)'}/>
        </p>
        <p>
          Decimal logarithm: <InlineMath math={'\\log_{10}(x) \\Rightarrow \\log(x)'} />
        </p>
        <p>
          Natural logarithm: <InlineMath math={'log_e(x) \\Rightarrow \\ln(x)'}/>
        </p>
        
      </div>
      {/* Bijection, Injection, And Surjection */}
      <h2 className="text-2xl mt-4">Bijection, Injection, And Surjection</h2>
      <div className="members outline p-5 m-4 rounded">
        <p className="text-sm mt-4">
          Functions can be injections (one-to-one functions), surjections (onto functions) or bijections (both one-to-one and onto). Informally, an injection has each output mapped to by at most one input, a surjection includes the entire possible range in the output, and a bijection has both conditions be true.
        </p>
        <p className="text-sm mt-4">
          This concept allows for comparisons between cardinalities of sets, in proofs comparing the sizes of both finite and infinite sets.
        </p>
      </div>

    </div>
  );
}

export default functions;
