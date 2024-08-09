import React from "react";
import DiscreteMathTree from "./DiscreteMathTree";
import Link from "next/link";

export default function DiscreteMath() {
  return (
    <div className="flex flex-col justify-center font-mono font-bold text-center m-10">
      <h2 className="text-2xl">Discrete Math</h2>
      <p className="text-l m-5">What is Discrete Mathematics?</p>
      <p className="text-sm font-thin text-left">
        It's hard to explain. The counterpart to discrete math is continuous
        math, which can have a range of outcomes or results, whereas discrete
        math has distinct and separate values. Values in discreate math are
        countable and often integers. Continous math values are often real
        numbers, which can have an infinite amount of values within any
        interval.
      </p>
      <p className="text-sm font-thin text-left mt-3">
        Discrete math is the seed of many complex roots in computer science,
        such as opperating systems, algorithms, data structures, networking,
        database systems, and more.
      </p>

      <DiscreteMathTree />
    </div>
  );
}
