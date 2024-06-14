import React from 'react'
import TopicCard from '../components/TopicCard'
import ContentCard from '../components/ContentCard'

function oop() {
  return (
    <div className="container">
        <TopicCard
            title="Object Oriented Programming"
            subtitle="What is OOP?"
            body="It might make sense to define what an object is first. An object is anything of interest to the software application. An encapsulated unit of data and behavior. Object oriented programming is a programming paradigm, or style, that organizes software around objects, instead of functions. "
        />
        <ContentCard>
            <p className='font-bold text-center'>Fundamental Concepts</p>
            <p className='mt-2'>Encapsulation: Bundling the data (properties), and the methods that operate on the data into a single unit (class). Think of this as a car engine. The engine has its own set of properties and functionalities (like horsepower, fuel consumption, engine-on, engine-off, ect.) The properties and functionality of the engine is kept within the engine, and not exposed to other parts of the car, like the transmission. </p>
            <p className='mt-2'>Abstraction: To simplify and focus on the data and processes relevant to the application being built. Allows developers to work with complex information without worrying about its inner workings. A car driver can interact with the engine through its provided interface (accelerator and brake pedals), but they don't need to know its inner workings to do so. </p>
            <p className='mt-2'>Inheritance: A class can derive, or re-use it's properties and/or methods from another class. Any class that inherits these properties or methods are called a "subclass", while the class that passes down its properties or methods is called a "superclass". A car body has multiple properties that it can pass down to its fenders, hood, trunklid, such as sheet metal material, primer, paint and clear coat.</p>
            <p className='mt-2'>Polymorphism: Using a unified interface for different underlying forms. It allows objects of different classes to be treated as objects of a common superclass. For instance, you can use a single interface, like a drivers license, to interact with different types of vehicles (cars, bikes, trucks). This means that the specific type of vehicle does not matter; the driver's license provides a consistent way to interact with any vehicle. </p>

        </ContentCard>
        <ContentCard>
            <p className='font-bold text-center'>Building Blocks</p>
            <p className='mt-2'>Classes: Blueprints for creating objects, defining properties and behaviors. Each object is an instance of a class in the computer's memory. Creating an object from a class is called "instantiation".</p>
            <p className='mt-2'>Properties: Attributes or data stored in an object, defining its state. It's possible to assign properties while instantiating a object, using a constructor.</p>
            <p className='mt-2'>Methods: Functions defined within a class, describing behaviors and actions.</p>

        </ContentCard>
    </div>
  )
}

export default oop