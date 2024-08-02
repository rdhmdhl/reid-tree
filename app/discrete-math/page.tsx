import React from 'react'
import Link
 from "next/link";

export default function DiscreteMath() {
  return (
    <div className="flex flex-col justify-center font-mono font-bold text-center m-10">
      <h2 className='text-2xl'>Discrete Math</h2>
      <p className='text-l m-5'>What is Discrete Mathematics?</p>
      <p className='text-sm font-thin text-left'>It's hard to explain. The counterpart to discrete math is continuous math, which can have a range of outcomes or results, whereas discrete math has distinct and separate values. Values in discreate math are countable and often integers. Continous math values are often real numbers, which can have an infinite amount of values within any interval.</p>
      <p className='text-sm font-thin text-left mt-3'>Discrete math is the seed of many complex roots in computer science, such as opperating systems, algorithms, data structures, networking, database systems, and more.</p>
      <div className="flex flex-col items-center">
        <div className="border-b-2 border-white h-8 mb-4"></div>
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center border-2 border-gray-400 rounded p-4 cursor-pointer hover:bg-gray-700">
            <Link href="discrete-math/set-theory" passHref>
              <p className="text-xl mb-2">Set Theory</p>
            </Link>
          </div>
          <div className="border-l-2 border-white h-8"></div>
          <div className="flex flex-col items-center border-2 border-gray-400 rounded p-4 cursor-pointer hover:bg-gray-700">
            <Link href="discrete-math/functions" passHref>
              <p className="text-xl mb-2">Functions</p>
            </Link>
          </div>
          <div className="border-l-2 border-white h-8"></div>
          <div className="flex flex-col items-center border-2 border-gray-400 rounded p-4 cursor-pointer hover:bg-gray-700">
            <Link href="/graph-theory" passHref>
              <p className="text-xl mb-2">Graph Theory</p>
            </Link>
          </div>
          <div className="border-l-2 border-white h-8"></div>
          <div className="flex flex-col items-center border-2 border-gray-400 rounded p-4 cursor-pointer hover:bg-gray-700">
            <Link href="/combinatorics" passHref>
              <p className="text-xl mb-2">Combinatorics</p>
            </Link>
          </div>
          <div className="border-l-2 border-white h-8"></div>
          <div className="flex flex-col items-center border-2 border-gray-400 rounded p-4 cursor-pointer hover:bg-gray-700">
            <Link href="/logic" passHref>
              <p className="text-xl mb-2">Logic</p>
            </Link>
          </div>
          <div className="border-l-2 border-white h-8"></div>
          <div className="flex flex-col items-center border-2 border-gray-400 rounded p-4 cursor-pointer hover:bg-gray-700">
            <Link href="/number-theory" passHref>
              <p className="text-xl mb-2">Number Theory</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
