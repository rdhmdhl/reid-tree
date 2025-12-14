import React from "react";

function SetTheory() {
  return (
    <div className="flex flex-col justify-center font-mono font-bold text-center m-10">
      <h2 className="text-2xl">Set Theory</h2>
      <div className="members outline p-5 m-4 rounded">
        <p className="text-l mb-4">Members</p>
        <p className="text-sm font-thin text-left">
          Every item of a set is a &quote;member&quote;. A set can also be a
          &quote;member&quote; of another set. The character &#8712; represents
          &quote;is a member&quote;, while the character &#8713; represents
          &quote;is not a member of&quote;. Set members are the unique values
          within the set itself.{" "}
        </p>
        <p className="text-sm font-thin m-5">
          {"s = {"} 0, 0, 1, 1, 0 {"}"}
        </p>
        <p className="text-sm font-thin">is the same as: </p>
        <p className="text-sm font-thin mt-5">
          {"s = {"} 0, 1 {"}"}
        </p>
      </div>
      <div className="set-builder-notation outline p-5 m-4 rounded">
        <p className="text-l mb-4">Set Builder Notation</p>
        <p className="text-sm font-thin text-left">
          The vertical bar in set building notation represents &quot;such
          that&quot;. ℤ<sup>+</sup> below represents the set of positive
          integers. The notation below can be read as &quot;x is a member of the
          positive integer set, and is less than 103&quot;.
        </p>
        <p className="text-sm font-thin m-5">
          {"x = {"} x | x satisfies one or more requirements {"}"}
        </p>
        <p className="text-sm font-thin m-5">
          {"s = {"} x | x&#8712;ℤ<sup>+</sup> and x {"<"} 103{"}"}
        </p>
        <p className="text-sm font-thin m-5"> this can also be wrote as:</p>
        <p className="text-sm font-thin m-5">
          {"s = {"} x&#8712;ℤ<sup>+</sup> | x {"<"} 103{"}"}
        </p>
      </div>
      <div className="cardinality outline p-5 m-4 rounded">
        <p className="text-l mb-4">Cardinality</p>
        <p className="text-sm font-thin m-5">Number of distinct members of S</p>
        <p className="text-sm font-thin m-5">
          {"s = {"} 1, 2, 3, 3, 2, 1 {"}"}
        </p>
        <p className="text-sm font-thin m-5">|s| = 3</p>
        <p className="text-sm font-thin m-5">
          Finite sets have distinct members, while infite sets do not have a
          distinct number of member.
        </p>
      </div>
      <div className="more-properties outline p-5 m-4 rounded">
        <p className="text-l mb-4">More Set Properties</p>
        <p className="text-sm font-thin m-5">A and B are equal if </p>
        <p className="text-sm font-thin m-5">can be wrote as:</p>
        <p className="text-sm font-thin m-5">
          A = B if &#8704; x(x&#8712;A &#8660; x&#8712;B)
        </p>
        <p className="text-sm font-thin m-5">
          &#8704; represents &quot;for all&quot;, and &#8660; represents
          &quot;if and only if&quot;
        </p>

        <p className="text-sm font-thin m-5">
          A is a subset of B if every element in A is also an element of B
        </p>
        <p className="text-sm font-thin m-5">this can be discribed as:</p>
        <p className="text-sm font-thin m-5">A &#8838; B</p>
        <p className="text-sm font-thin m-5">
          where &#8838; represents &quot;is a subset or equal&quot;
        </p>
        <p className="text-sm font-thin m-5">
          &#8840; would represent &quot;is a subset and not equal&quot;
        </p>
      </div>
    </div>
  );
}

export default SetTheory;

