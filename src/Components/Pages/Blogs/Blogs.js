import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 text-center">
                        <FaBookOpen className='w-25 book-icon'></FaBookOpen>
                        <h2 className='text-center'>BLOGS</h2>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <h4>What are the different ways to manage a state in a React application?</h4>
                        <p>
                            There are four main types of state you need to properly manage in your React apps: <br />
                           1. Local state <br />
                           2. Global state <br />
                           3. Server state <br />
                           4. URL state
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <h4>How does prototypical inheritance work?</h4>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
                    </div>
                    <div className="col-lg-6">
                        <h4>What is a unit test? Why should we write unit tests?</h4>
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                    <div className="col-lg-6">
                        <h4>React vs. Angular vs. Vue?</h4>
                        <p> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;