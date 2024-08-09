import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import TruthTable from "./components/TruthTable";

const ProofExplanation: React.FC = () => {
  return (
    <div className="flex flex-col justify-center font-mono font-bold text-center m-10">
      <h2>What is a proof?</h2>
      <div className="members outline p-5 m-4 rounded">
        <p className="mt-4">
          A method for ascertaining truth. Some ways to ascertain truth are:
          experimenting & observing, sampling & counter examples, judge/jury,
          and the word of God.
        </p>
        <p className="mt-4 font-bold">
          A mathematical proof is a verification of a proposition by a chain of
          logical deductions from a set of axioms.
        </p>
        <p className="mt-4">
          A proposition is a statement that is either true or false.
        </p>
        <p className="mt-4">
          A predicate is a proposition whose truth depends on the value of
          variable(s);
        </p>
        <p className="mt-4">When writing proofs, an important symbol is:</p>
        <InlineMath math={"\\implies"} />
        <p className="mt-4">This means "implies". An implication.</p>
        <p className="mt-4">
          The direction of the arrow in <InlineMath math={"p \\implies q"} />{" "}
          indicates that if proposition <InlineMath math={"p"} /> is true, then
          proposition <InlineMath math={"q"} /> must also be true for the
          implication to hold. In other words, <InlineMath math={"p"} /> implies{" "}
          <InlineMath math={"q"} />. However, the statement{" "}
          <InlineMath math={"p \\implies q"} /> is also true when{" "}
          <InlineMath math={"p"} /> is false, regardless of the truth value of{" "}
          <InlineMath math={"q"} />.
        </p>
        <p className="mt-4">
          <InlineMath math={"p \\implies q"} /> is true if{" "}
          <InlineMath math={"p"} /> is false, or <InlineMath math={"q"} /> is
          true.
        </p>
        <p className="mt-4 underline">
          <strong>
            Key Idea: No Promise is Broken When <InlineMath math={"p"} /> is
            False
          </strong>
        </p>
        <p className="mt-4">
          The key idea here is that when <InlineMath math={"p"} /> (the
          condition) is false, the implication doesn’t make any demand on{" "}
          <InlineMath math={"q"} />. Since the situation where{" "}
          <InlineMath math={"p"} /> is true never happens, it doesn’t matter
          what happens with <InlineMath math={"q"} />. Therefore, the
          implication is considered true in these cases because you can't accuse
          the statement of being wrong—- it never had to fulfill its condition.
        </p>
        <p className="mt-4">
          <strong>Why This is Useful in Logic</strong>
        </p>
        <p className="mt-4">
          In logic and mathematics, we need rules that are consistent and work
          in all situations. The rule that <InlineMath math={"p \\implies q"} />{" "}
          is true when <InlineMath math={"p"} /> is false helps us maintain
          consistency in reasoning:
        </p>
        <ul className="mt-4 list-disc list-inside">
          <li>
            <strong>Logical Reasoning</strong>: It allows us to make deductions
            in a consistent way, even when the initial condition isn’t met.
          </li>
          <li className="mt-2">
            <strong>Proof by Contradiction</strong>: This principle is crucial
            in proofs where we assume the opposite of what we want to prove and
            show that it leads to a contradiction.
          </li>
        </ul>
        <p className="mt-4">
          Another important symbol in logic is the double arrow{" "}
          <InlineMath math={`\\iff`} />, which stands for "if and only if"
          (iff). The statement <InlineMath math={"p \\iff q"} /> means that both{" "}
          <InlineMath math={"p"} /> and <InlineMath math={"q"} /> have the same
          truth value. In other words, <InlineMath math={"p"} /> implies{" "}
          <InlineMath math={"q"} />, and <InlineMath math={"q"} /> also implies{" "}
          <InlineMath math={"p"} />. This is known as logical equivalence.
        </p>
        <p className="mt-4">
          <InlineMath math={"p \\iff q"} /> is true if both{" "}
          <InlineMath math={"p"} /> and <InlineMath math={"q"} /> are either
          true or false.
        </p>
        <TruthTable />

        {/* AXIOMS */}
        <p className="mt-16 mb-4">
        <p className="mt-4 italic">
            An axiom is a proposition that is assumed to be true without proof. 
            </p>
          <p className="mt-4">
              It
              serves as a fundamental starting point in mathematics and logic, from
              which other truths are derived through logical reasoning and proofs.
          </p>
        </p>
        <p>
          For example, consider the transitive property of equality:{" "}
          <InlineMath math={"a = b"} />, <InlineMath math={"b = c"} />,
          therefore <InlineMath math={"a = c"} />. This property is not
          something that we prove each time we use it; rather, it is accepted as
          a fundamental truth within the system of arithmetic. It is an example
          of an axiom, something we assume to be true because it forms the
          foundation of our logical reasoning in mathematics.
        </p>

        <p className="mt-4">Axioms should be consistant and complete.</p>
        <p className="mt-4">
          A set of axioms is <strong>consistent</strong> if no proposition can
          be proved to be both true and false. Consistency ensures that the
          logical framework built on these axioms does not contain
          contradictions. In other words, it is impossible to derive both a
          statement and its negation from the same set of axioms.
        </p>

        <p className="mt-4">
          A set of axioms is <strong>complete</strong> if it can be used to
          prove that every proposition is either true or false. Completeness
          means that there are no gaps in the logical system; every possible
          statement can be determined as true or false based on the axioms.
        </p>

        <p className="mt-4">
          However, according to Gödel's Incompleteness Theorems, in any
          sufficiently complex system (such as arithmetic), it is impossible for
          a set of axioms to be both complete and consistent if the system is
          capable of expressing the basic truths of arithmetic. This means that
          there will always be some true statements that cannot be proven within
          the system.
        </p>

        <p>
          In practice, mathematicians often prioritize consistency over
          completeness to ensure that their logical systems are free from
          contradictions, even if this means accepting that some truths may be
          unprovable within that system.
        </p>
      </div>
    </div>
  );
};

export default ProofExplanation;
