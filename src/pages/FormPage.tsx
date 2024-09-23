/* Sources:

[AE]: https://stackoverflow.com/questions/41052598/reactjs-array-push-function-not-working-in-setstate 
 [AG]: https://www.freecodecamp.org/news/how-to-render-lists-in-react/ 
 */


 import { useState } from "react";
 import React from "react";
 // import Dialog from "./MyDialog";
 import Dialog from "../modules/MyDialog";
 
 import logo from '../logo.svg';
 import '../App.css';
 // import 'axios';
 // import Axios from 'axios';
 import axios from 'axios';
 
 const formField = []
 
 
 // CHQ: TODO: set margins between buttons

interface DynamicComponentProps {
  text: string;
}

 
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
     return(<p>mue</p>);
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
     {/* <br />  */}
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
 
//  const DynamicShortAnswer: React.FC<DynamicComponentProps> = ({ text }) => {
  const DynamicShortAnswer: React.FC<{}> = () => {
  return (
    <>
      <input
        // className="formFields --nameField"
        //   type="text"
        id="name"
        name="name"
        placeholder="John Doe"
        size={50}
        maxLength={4}
        minLength={4}
        required
      />
      <br />
      {/* <br /> */}
    </>
  );
};

//  const DynamicLongAnswer: React.FC<DynamicComponentProps> = ({ text }) => {
  const DynamicLongAnswer: React.FC<{}> = () => {
  return (
    <>
      <input
        // className="formFields --nameField"
        //   type="text"
        id="name"
        name="name"
        placeholder="John Doe"
        size={50}
        maxLength={4}
        minLength={4}
        required
      />
      <br />
      {/* <br /> */}
    </>
  );
};

 const DynamicTrueFalse: React.FC<DynamicComponentProps> = ({ text }) => {
  // const DynamicTrueFalse: React.FC<{}> = () => {

  return (
    <>
      <>{text}</>
      <button
      //  onClick={() =>
      //   // @ts-ignore comment
      //   setThePlatform((thePlatform) =>
      //     thePlatform.concat(createDynamicComponent2(DynamicShortAnswer))
      //   )
      // }
      >
        True
      </button>
      <button
      //  onClick={() =>
      //   // @ts-ignore comment
      //   setThePlatform((thePlatform) =>
      //     thePlatform.concat(createDynamicComponent2(DynamicShortAnswer))
      //   )
      // }
      >
        False
      </button>
      <br />
      {/* <br /> */}
    </>
  );
};

 const createDynamicComponent2 = (
   component: React.ComponentType<any>,
   props?: any
 ) => {
   if ((props = undefined)) {
     return React.createElement(component);
   } else {
     return React.createElement(component, props);
   }
 };
 
 let myList3 = [createDynamicComponent2(DynamicShortAnswer)];

 const App2: React.FC = () => {
  const [count, setCount] = useState(0);
  // @ts-ignore comment
  //   const [thePlatform, setThePlatform] = [];
  const [thePlatform, setThePlatform] = useState(myList3);
  
  return (
    <>
      {" "}
      {/* <button
        // className="formbuttons"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>{" "} */}
      <button
        // className="formbuttons"
        onClick={() =>
          // @ts-ignore comment
          setThePlatform((thePlatform) =>
            thePlatform.concat(createDynamicComponent2(DynamicShortAnswer))
          )
        }
      >
        Add short answer
      </button>
      <button
        onClick={() =>
          // @ts-ignore comment
          setThePlatform((thePlatform) =>
            thePlatform.concat(createDynamicComponent2(DynamicLongAnswer))
          )
        }
      >
        Add long answer
      </button> 
      <button
        onClick={() =>
          // @ts-ignore comment
          // CHQ: the following doesn't work.
          setThePlatform((thePlatform) =>
            thePlatform.concat(
              createDynamicComponent2(DynamicTrueFalse, {
                text: "First component stored in a list",
              })
            )
          )
        }
      >
        Add True/False
      </button>
      
      <p>total number of questions: {thePlatform.length}</p>
      {/* <div>{myList3}</div> */}
      <div>{thePlatform}</div>
    </>
  ); 
};

 function FormPage() {
   // const [formArea, setFormArea] = useState(String[]); // CHQ: didn't work
   // const [formArea, setFormArea] = useState(Array<String>); // CHQ: didn't work
       const [formArea, setFormArea] = useState(formField);
      //  const [compList, setCompList] = [];
 
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
                 {/* <button className='formbuttons' onClick={() => setCompList((compList) => compList.concat(<MyComponent/>))}>Test button</button> */}
 
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
             <App2/>
             {/* <>{compList}</> */}
             {/* <MyComponent/> */}
             {/* <MyComp1/> */}
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
 