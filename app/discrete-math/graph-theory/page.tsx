"use client"

import React from 'react'
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import SimpleGraph from './components/SimpleGraph';
import MultiGraph from './components/MultiGraph';
import Pseudograph from './components/PseudoGraph';
import MixedGraph from './components/MixedGraph';
import Tree from './components/Tree';

function GraphTheory() {
  return (
    <div className="flex flex-col justify-center font-mono font-bold text-center m-10">
    <h2 className="text-2xl">Graph Theory</h2>
    <div className="members outline p-5 m-4 rounded">
      <p>Often times graphs are thought of as pictures, or dots, connected by lines. In the book "Discrete Mathematics: An Open Introduction" by Oscar Levin, it provides a more precise definition:</p>
      <p className="text-sm font-thin mt-4">
      A graph is an ordered pair <InlineMath math={'G = (V, E)'}/> consisting of a nonempty set <InlineMath math={'V'}/> (called the vertices) and a set <InlineMath math={'E'}/> (called the edges) of two-element subsets of <InlineMath math={'V'}/>.
      </p>
    </div>
    <h2 className="text-2xl">How To Classify a Graph</h2>
    <div className="members outline p-5 m-4 rounded">
    <p className='mb-4'>Questions to ask:</p>
      <p className='italic'>
        Are the edges directed, undirected, or both? 
      </p>
      <p>
        Directed edges are represented using parenthesis: <InlineMath math={"(A, B)"}/> while undirected edges use curly braces: <InlineMath math={'\\{A, B\\}'} />
      </p>
      <p className='italic mt-4'>
        Are multiple edges allowed between two verticies?
      </p>
      <p>
        If A and B represent two cities, multiple routes, or edges are allowed to travel between them.
      </p>
      <p className='italic mt-4'>
        Are loops allowed?
      </p>
      <p>
        <InlineMath math={"(A, A)"}/> gives us a connection back to itself. Think about filling out a form, and you forgot to fill out a required part, this would allow you to go back. 
      </p>
    </div>
    <h2 className="text-2xl">Types of Graphs</h2>
    <div className="members outline p-5 m-4 rounded">
      <p className='mt-4'>
        Simple Graph:
      </p>
      <p>
        No loops, no multiple edges. A social network may be a good example of this. The connections represent who those individuals know. The edges are not directed, because these relationships are (hopefully) not one directional. It is not possible to have multiple paths either.  
      </p>
      <SimpleGraph/>
      <p className=''>
        Mixed Graph:
      </p>
      <p>
        Allows for multiple edges and loops. Think of this as a roadway system within Los Angeles. The multiple edges represent different routes between neighborhoods, and loops represent routes that start and end in the same neighborhood. Each edge signifies a different route, illustrating the complexity of travel options within the city. This type of graph is useful for modeling scenarios where multiple interactions and self-references need to be depicted clearly.
      </p>
      <MixedGraph/>
      <p className='mt-4'>
        Multi Graph:
      </p>
      <p>
        No loops, but multiple edges are allowed. A transportation network may be a good example of this. The multiple edges between nodes represent the various flights between the same pair of cities. Each edge signifies a different flight, showcasing the complexity of travel options between these cities. This type of graph is useful for modeling scenarios where multiple relationships or interactions need to be depicted clearly.
      </p>
      <p>
        add content here
      </p>
      <MultiGraph/>
      <p className='mt-4'>
        Pseudo Graph:
      </p>
      <p>
        Loops and multiple edges. A communication network may be a good example of this. The multiple edges between nodes represent different communication channels, and loops represent self-communication channels. Each edge signifies a different channel, illustrating the complexity of connections in the network. This type of graph is useful for modeling scenarios where multiple interactions and self-references need to be depicted clearly.
      </p>
      <Pseudograph/>
      <p className='mt-4'>
        Tree:
      </p>
      <p>
        A tree is a connected graph that contains no cycles. A cycle is a path of edges and verticies wherein a vertex is reachable from itself. Each node (except the root) has exactly one parent, and there is exactly one path between any two nodes. Trees are used in various applications like representing hierarchical data, organizing information, and more. For example, a family tree represents relationships between family members across generations.
      </p>
      <Tree/>
    </div>

  </div>
  )
}

export default GraphTheory