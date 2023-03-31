import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className='container questionAnswer my-5'>
          <h4>1.Difference between props and state?</h4>
          <p>** props are read-only but State changes can be asynchronous.
        Props allow you to pass data from one component to other components as an argument but State holds information about the components.Props are used to communicate between components but States can be used for rendering dynamic changes with the component.Props make components reusable but State cannot make components reusable.</p>
        <h4>2.How does useState work?</h4>
        <p>** useState is a one kind of React Hook.It allows the user to add state to a functional component.t returns an array with two values: the current state and a function to update it.
        It works by: Checking if the current index has a value in the state, if not set the default. Then build the setter for the current state index value. Finally increment the index (for the next Hook) and return the setter and current value.
        </p>
        <h4>3.What else can useEffect() do other than load data?</h4>
        <p>** Validating an input while it's receiving characters is another great application for useEffect . Whilst the input is being stored in a state using useState , the validation takes place every time the input changes, giving immediate feedback to the user.
        </p>
        <h4>4.How does React work?</h4>
        <p>** The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
</p>
        </div>
    );
};

export default QuestionAnswer;