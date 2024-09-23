/* Sources:

[AE]: https://stackoverflow.com/questions/41052598/reactjs-array-push-function-not-working-in-setstate 
 [AG]: https://www.freecodecamp.org/news/how-to-render-lists-in-react/ 
 */


import { useState } from "react";
// import Dialog from "./MyDialog";
import Dialog from "../modules/MyDialog";

import logo from '../logo.svg';
import '../App.css';
// import 'axios';
// import Axios from 'axios';
import axios from 'axios';

const formField = []


// CHQ: TODO: set margins between buttons


const apiCall = () => {
  axios.get('http://localhost:5000').then((data) => {
    // this console.log will be in our frontend console
    console.log(data)
  })
};
function FormModal3() {
    // const [open, setOpen] = useState(true);
  
    // CHQ: caused the page to break and not load
    // if (open) {
    //   // whether I called the method on thedialog or just as a function
    //   showTheDialog();
    //   thedialog.showTheDialog();
    // }
    // const [open, setOpen] = useState(false);
  
    return (
      <>
        {/* <button onClick={() => setOpen(true)}>Open Dialog</button> */}
        <Dialog id="dialog2" open={true}>

        {/* <Dialog id="dialog2" open={open}> */}

          <form id="form2" method="dialog">
            {/* <form method="dialog" action=""> */}
            <br />
            <label htmlFor="fname">Name: </label>
            {/* <br /> */}
            <input
              className="formFields --nameField"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
            />
            <br />
            <br />
            <label htmlFor="lname">Email: </label>
            {/* <br /> */}
            <input
              className="formFields --nameField"
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@gmail.com"
              required
            />
            <br />
            <br />
            <label htmlFor="DOB">Date of Birth:</label>
            <input
              className="formFields --nameField"
              type="date"
              id="dob"
              name="dob"
              max="2006-09-11"
              // I won't allow anyone to say they are 200 years old
              min="1806-09-11"
              required
            />
            {/* <input type="submit"></input> */}
            <br />
            <br />
            {/* <button onclick="closeDialog()">Cancel</button> */}
            <input className="my_button" type="submit" value="Submit" />
  
            {/* <button onclick="myFunc()" id="confirmBtn" value="default">
                Confirm
              </button> */}
          </form>
        </Dialog>
      </>
    );
  }

  function MultiChoice(){
    return(<p>multi choice</p>);
  }

  function InsertQuestion(){

  }

  function QuestionSelector()
  {
    return(
      <div>
        <button className='formbuttons' onClick={apiCall}>Multiple Choice</button>
        <br/>
        <button className='formbuttons' onClick={apiCall}>Short Answer</button>
        <br/>
        <button className='formbuttons' onClick={apiCall}>Long Answer</button>
        <button className='formbuttons' onClick={apiCall}>True/False</button>
        <br/>
        <button className='formbuttons' onClick={apiCall}>Multiple Select</button>
        <button className='formbuttons' onClick={apiCall}>Fill in the blank</button>
        <button className='formbuttons' onClick={apiCall}>Matching</button>
        </div> 
        );
  }


function MyComponent(){
  return (<div className="formTest">
    <form id="form2" method="dialog">
    {/* <form method="dialog" action=""> */}
    <br />
    <label htmlFor="fname">Name: </label>
    {/* <br /> */}
    <input
      className="formFields --nameField"
      type="text"
      id="name"
      name="name"
      placeholder="John Doe"
      required
    />
    <br />
    <br /> 
    <input className="my_button" type="submit" value="Submit" />

    {/* <button onclick="myFunc()" id="confirmBtn" value="default">
        Confirm
      </button> */}
  </form>
    </div>);
}

function MyComp1(){
  return(    <input
    className="formFields --nameField"
    type="text"
    id="name"
    name="name"
    placeholder="John Doe"
    required
  />)
}


function FormPage() {
  // const [formArea, setFormArea] = useState(String[]); // CHQ: didn't work
  // const [formArea, setFormArea] = useState(Array<String>); // CHQ: didn't work
      const [formArea, setFormArea] = useState(formField);
      const [compList, setCompList] = [];

      const theFormOptions = [
        {
          name: "Multiple Choice",
          component: "MC Question",
        },
        {
          name: "Short Answer",
          component: "Short Answer",
        },
        {
          name: "Long Answer",
          component: "Long Answer",
        },
        {
          name: "True/False",
          component: "True/False",
        },
        {
          name: "Multiple Select",
          component: "Multiple Select",
        },
        {
          name: "Fill in the blank",
          component: "Fill in the blank",
        },
        {
          name: "Matching",
          component: "Matching",
        },
      ];
      
      return (
        <div className="App"> 
          <FormModal3 />
          <div className='Button-section leftside'>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <button className='formbuttons' onClick={apiCall}>←</button>

            <p>
                Form Question Types
            </p>      
            <div>
                {/* [AE] */}
                <button className='formbuttons' onClick={() => setCompList((compList) => compList.concat(<MyComponent/>))}>Test button</button>

                <button className='formbuttons' onClick={() => setFormArea((formArea) => formArea.concat(theFormOptions[0]))}>Multiple Choice</button>
                <br/>
                <button className='formbuttons' onClick={() => setFormArea((formArea) => formArea.concat(theFormOptions[1]))}>Short Answer</button>
                <br/>
                <button className='formbuttons' onClick={() => setFormArea((formArea) => formArea.concat(theFormOptions[2]))}>Long Answer</button>
                <button className='formbuttons' onClick={() => setFormArea((formArea) => formArea.concat(theFormOptions[3]))}>True/False</button>
                <br/>
                <button className='formbuttons' onClick={() => setFormArea((formArea) => formArea.concat(theFormOptions[4]))}>Multiple Select</button>
                <button className='formbuttons' onClick={() => setFormArea((formArea) => formArea.concat(theFormOptions[5]))}>Fill in the blank</button>
                <button className='formbuttons' onClick={() => setFormArea((formArea) => formArea.concat(theFormOptions[6]))}>Matching</button>
                </div> 
    
          {/* <QuestionSelector/> */}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help
            </a>
    
          </div>
          <div className='rightside'>
    
          <img src={logo} className="App-logo" alt="logo" />
            <button onClick={apiCall}>Make API call</button>
            <p>
                THIS IS THE HOME PAGE
            </p>
            {/* <>{compList}</> */}
            <MyComponent/>
            <MyComp1/>
            {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
            <p className="listWindow">{JSON.stringify(formArea)}</p>
            
            
            {/* [AG] */}
            {/* <p>{(formArea => {})}</p> */}
            {/* <>
            {formArea.map(function(element) {
              return (
                <li>
                  {element.name}
                  </li>
                  )
                })}
            </> */}
            {/* <>{formArea.forEach(element => {
              <li>element</li>
            })}</> */}
            

          </div>
        </div>
      );
}

export default FormPage;
