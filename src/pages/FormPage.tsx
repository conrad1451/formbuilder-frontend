/* Sources:

[AP]: https://medium.com/@gecno/creating-dynamic-components-in-react-with-typescript-f965bc8cd5fd 

[AR]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role

[AV]: https://react.dev/reference/react/memo#updating-a-memoized-component-using-state

[AU]: https://www.pluralsight.com/resources/blog/guides/how-to-use-radio-buttons-in-reactjs

[VB]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator


[ZA]: https://daily.dev/blog/pop-and-push-in-javascript-array-essentials

 [ZB]: https://react.dev/learn/updating-arrays-in-state#removing-from-an-array

[AT]: https://www.w3schools.com/jsref/prop_style_visibility.asp

[AS]: https://learn.shayhowe.com/html-css/positioning-content/#inline-block


[AZ]: https://www.geeksforgeeks.org/how-to-make-your-content-editable-in-html/#

[AJ]: https://react.dev/reference/react/createElement#usage

*/
// 
//
// import { createElement } from 'react';
 import React from "react";

 import { useState } from "react";
 import { useNavigate } from "react-router-dom";

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
  isProductionState: boolean;
  captureState?: object
  // isProductionState?: boolean;
  // captureState?: object
}

interface TestBro {
  theType: React.createElement(DynamicShortAnswer, { text: "test me", isProductionState: false})
 }
// interface Bro implements DynamicComponentProps{
  
// }

interface DynamicFITB {
  text: string;
  textSnippets: [];
  isFillInTheBlank: [];
}


interface DynamicTF {
  text: string;
  isProductionState: boolean;
}


interface DynamicMCProps {
  text: string;
  checkedCondition: boolean;
  hasEditorOpened: boolean;
  // checkedFunction: Function;
  // checkedFunction: function;
    // checkedFunction: function name(params:type) {
    
  // }
}
// function UseGreeting()
// {
//   return  React.createElement(Greeting, { name: 'Taylor', age: 25 });
// }
 const createDynamicComponent2 = (
   component: React.ComponentType<any>,
   props?: any
 ) => {
   if ((props = undefined)) {
     return React.createElement(component);
   } else {
     return React.createElement(component, props);
    // return React.createElement(component, ...props);
   }
 };

// [AP]

 
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
 
  
 
 const DynamicTextEntry: React.FC<DynamicComponentProps> = ({ text }) => {
  // Property 'text' does not exist on type '{}'.ts(2339)
  // const DynamicShortAnswer: React.FC<{}> = ({ text }) => {
  // const DynamicShortAnswer: React.FC<{}> = () => {
    const [field, setField] = useState('');
      
    // [AR]
    return (
      <>
      <label>
        {/* {text}{': '} */}
        <br />
        <input
        type="textarea"
        // type="text"
        value={field}
        onChange={e => setField(e.target.value) }
        size={10}
        // contentEditable="true"
        aria-multiline="true"
        //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
        // rows={10}
        maxLength={280} 
        />
      </label> 
      <br />
      </>
    );
  };
  

 const DynamicShortAnswer: React.FC<DynamicComponentProps> = ({ text, isProductionState, captureState }) => {
// Property 'text' does not exist on type '{}'.ts(2339)
// const DynamicShortAnswer: React.FC<{}> = ({ text }) => {
// const DynamicShortAnswer: React.FC<{}> = () => {
  const [field, setField] = useState('');

  const removeComponent = () => {
    // history.push("/new-form")
    // navigate("/new-form")
  }
  // [AR]
  return (
    <>

    <div className="Component-leftside">
      {/* CHQ: not doing much useful so removing use of class componentWidth */}
      {/* <div className="componentWidth"> */}
      <div>
        <EditableTextModule myText={text} isEditing={true} theFontSize={"p"}/>
        <label> {/* {text}{': '} */} 
          <input
            type="textarea"
            // type="text"
            value={field}
            onChange={e => setField(e.target.value) }
            size={50}
            // contentEditable="true"
            aria-multiline="true"
            //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
            // rows={10}
            maxLength={280} 
          />
        </label>
      </div>
      <br />
    </div>
    <div className="Component-rightside">
      <button className='compdelbutton' onClick={removeComponent}>Delete</button>
{/* Type 'void' is not assignable to type 'MouseEventHandler<HTMLButtonElement> | undefined'.ts(2322)
 */}
      {/* <button id="component-delete" onClick={removeComponent()}></button> */}

    </div>

    </>
  ); 
};

// [AV]

 const DynamicLongAnswer: React.FC<DynamicComponentProps> = ({ text, isProductionState, captureState }) => {
  // const DynamicLongAnswer: React.FC<{}> = () => {
    const [field, setField] = useState('');
    
  return (
    <>
    <div className="componentWidth">
      <EditableTextModule myText={text} isEditing={true} theFontSize={"p"}/>
      <label> {/* {text}{': '} */} <input
          type="textarea"
          // type="text"
          value={field}
          onChange={e => setField(e.target.value) }
          size={50}
          // contentEditable="true"
          aria-multiline="true"
          //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
          // rows={10}
          maxLength={560}
        />
      </label> 
    </div>
    <br />
    </>
  );
};
// const DynamicTrueFalse: React.FC<DynamicTF> = ({ text }) => {
   const DynamicTrueFalse: React.FC<DynamicComponentProps> = ({ text, isProductionState, captureState }) => {
//  const DynamicTrueFalse: React.FC<DynamicTF> = ({ text, isProductionState }) => {
  // const DynamicTrueFalse: React.FC<{}> = () => {
    const [truth, setTruth] = useState(false);
    // [AU]
  return (
    <>
    <div className="componentWidth">
    <EditableTextModule myText={text} isEditing={true} theFontSize={"p"}/>

      {/* <EditableTextModule myText={text} isEditing={isProductionState} theFontSize={"p"}/> */}
            <label>
      True
      <input
      type="radio"  
      checked={truth} 
      onChange={e => setTruth(true) }
      // onClick={setTruth(true)} 
      />
    </label>  

    <br/>
    <label>
      False
      <input
      type="radio"  
      checked={!truth}
      onChange={e => setTruth(false) }
      // onClick={setTruth(true)} 
      />
    </label> 
      </div>

    {/* <br /> */}
    <br />
    
    </>
  );
};
 
  

function SmallTextField({isVisible}){
  const [field, setField] = useState('');

  // CHQ: an optimization I put here. Far better than returning 
  // one component when isVisible and a whole nother component
  // when !isVisible, since the only difference between the
  // two is the type of input (text area vs hidden)
  // [VB]
  return(    
  <div className="testMe">
  {/* <p>dddd</p> */}
    <label>
      {/* {text}{': '} */}
      {/* <br /> */}
      <input
      // type="textarea"
      // type="hidden"
      type = {isVisible ? "textarea" : "hidden"}
      // type="text"
      value={field}
      onChange={e => setField(e.target.value) }
      size={10}
      // contentEditable="true"
      aria-multiline="true"
      //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
      // rows={10}
      maxLength={280} 
      />
    </label> 
    {/* <br /> */}
    </div>)
}

// function SmallTextFieldAlt({isVisible}){
function SmallTextFieldAlt({isVisible, thisText, setThisText}){
  // const [field, setField] = useState('');

  // CHQ: an optimization I put here. Far better than returning 
  // one component when isVisible and a whole nother component
  // when !isVisible, since the only difference between the
  // two is the type of input (text area vs hidden)
  // [VB]
  return(    
  <div className="testMe">
          <h1 className="hasBorder"  contentEditable={isVisible}> {setThisText} </h1>

  {/* <p>dddd</p> */}
    {/* <label> */}
      {/* {text}{': '} */}
       {/* <input 
      // type = {isVisible ? "textarea" : "hidden"}
      type =  "textarea" 
      value={thisText}
      onChange={e => setThisText(e.target.value) }
      size={10}
      // contentEditable="true"
      aria-multiline="true"
      maxLength={280} 
      /> */}
    {/* </label>  */}
     </div>
    )
}

// function EditableTextModule({myText}) {
  function EditableTextModuleTitle({myText, setMyText, isEditing, theFontSize}) {
    // function EditableTextModule({isEditing}) { 
    // const [theText, setTheText] = useState(myText);
  
    let theText=myText;
  
    switch(theFontSize){
      case "h1":
        return (<h1 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h1>);
      case "h2":
        return (<h2 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h2>);
      case "h3":
        return (<h3 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h3>);  
      case "h4":
        return (<h4 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h4>);  
      case "h5":
        return (<h5 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h5>);  
      case "h6":
        return (<h6 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h6>);  
      case "p":
        return (<p className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </p>); 
      case "default":
        return (<p className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </p>);   
    }
    
  
  
    // [AR] // [AT]
  /* CHQ: the contentEditable field eilminates the need for a hidden text box altogether!
  /* <SmallTextFieldAlt isVisible={isEditing} thisText={theText} setThisText={setTheText} /> */ 
  /* CHQ: using a callback function is how the visitor pattern is implemented in functional programming */
  /* [AZ] */
    // return (<p color="white" text-indent="30px" className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </p>);
    // return (<h2 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h2>);
    // return (<p className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </p>);
  }
  

// function EditableTextModule({myText}) {
function EditableTextModule({myText, isEditing, theFontSize}) {
  // function EditableTextModule({isEditing}) { 
  // const [theText, setTheText] = useState(myText);

  let theText=myText;

  switch(theFontSize){
    case "h1":
      return (<h1 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h1>);
    case "h2":
      return (<h2 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h2>);
    case "h3":
      return (<h3 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h3>);  
    case "h4":
      return (<h4 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h4>);  
    case "h5":
      return (<h5 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h5>);  
    case "h6":
      return (<h6 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h6>);  
    case "p":
      return (<p className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </p>); 
    case "default":
      return (<p className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </p>);   
  }
  


  // [AR] // [AT]
/* CHQ: the contentEditable field eilminates the need for a hidden text box altogether!
/* <SmallTextFieldAlt isVisible={isEditing} thisText={theText} setThisText={setTheText} /> */ 
/* CHQ: using a callback function is how the visitor pattern is implemented in functional programming */
/* [AZ] */
  // return (<p color="white" text-indent="30px" className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </p>);
  // return (<h2 className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </h2>);
  // return (<p className={isEditing ? "hasBorder" : "noBorder"} contentEditable={isEditing}> {theText} </p>);
}

// const DynamicMutliChoiceOption: React.FC<DynamicMCProps> = ({ text, checkedCondition, checkedFunction }) => {
  const DynamicMutliChoiceOption: React.FC<DynamicMCProps> = ({ text, checkedCondition, hasEditorOpened }) => {
  // const [isChecked, setIsChecked] = useState(false);
  // const [isChecked, setIsChecked] = useState(checkedCondition);
  // const [optionText, setOptionText] = useState(text);
  const [hasEditorOpen, setHasEditorOpen] = useState(hasEditorOpened);
  
  // let myListing = [createDynamicComponent2(DynamicTextEntry)];
  const [truth, setTruth] = useState(checkedCondition);   
  //  const [inputView, setInputView] = useState(myListing);

  // if I click on the option and it is not already selected, now it will be selected
  // if I click on the option and it is already selected, it is just selected - indempotent action
  return (
    <>
    <div className="multiChoiceOptLayout">
    <input
      type="radio"
      checked={truth}
      // onChange={e => setTruth(e.target.value) }
      // onChange={e => setTruth(false) }
      onChange={() => setTruth(!truth) }
      />
      <EditableTextModule myText={text} isEditing={hasEditorOpen} theFontSize={"p"}/>
    </div>

      <button id="some-inner-answer"
        onClick={() => { setHasEditorOpen(!hasEditorOpen) }}
        >
          {hasEditorOpen ? "Save Changes": "Edit Option"}
          </button>
          <br/>
    </>
  );
};
 

//  [ZA]

const DynamicMultiChoice: React.FC<DynamicComponentProps> = ({ text, isProductionState, captureState }) => {
 // const DynamicTrueFalse: React.FC<{}> = () => {
  //  const [truth, setTruth] = useState(false);
  //  const [theChoice, setTheChoice] = useState("");
   // [AU] [AJ]
  let myListing = [
    React.createElement(DynamicMutliChoiceOption, { text: 'Option 1', checkedCondition: true, hasEditorOpened: false})
    ,React.createElement(DynamicMutliChoiceOption, { text: 'Option 2', checkedCondition: false, hasEditorOpened: false})
    ,React.createElement(DynamicMutliChoiceOption, { text: 'Option 3', checkedCondition: true, hasEditorOpened: false})
    ,React.createElement(DynamicMutliChoiceOption, { text: 'Option 4', checkedCondition: false, hasEditorOpened: false})
  ];
  const [optionList, setOptionList] = useState(myListing);
 
   return (
    <>
    <div>
      <div> 
        <br />
        <div className="componentWidth">
        <EditableTextModule myText={text} isEditing={true} theFontSize={"p"}/>
        <div>{optionList}</div>
        </div>
        <br />
      </div>
    <div>
   {/* <button className='formbuttons' id="some-inner-answer" */}
    <button id="some-inner-answer"
        onClick={() =>
          // @ts-ignore comment
          setOptionList((optionList) =>  
            optionList.concat(
              React.createElement(DynamicMutliChoiceOption, { text: 'another option', checkedCondition: false, hasEditorOpened: false})
            )
          )
        }
      >
        Add Option (+)
      </button>     
      <button id="some-inner-answer"
        onClick={() =>{
          // [ZB]
          setOptionList(optionList.slice(0, -1))} }
      >
        Remove Option (-)
      </button> 
      {/* CHQ: This is where I tested to prove that content editable would address my problems */}
      {/* <p>total number of inner things: {optionList.length}</p> */}

     </div>
     
     </div> 
     
     <br /> 
     <br />
  </>
 );
};


const DynamicFillInTheBlank: React.FC<DynamicFITB> = ({ text, textSnippets, isFillInTheBlank }) => {
  // const DynamicTrueFalse: React.FC<{}> = () => {
   //  const [truth, setTruth] = useState(false);
   //  const [theChoice, setTheChoice] = useState("");
    // [AU] [AJ]
   let myListing = [
    // React.createElement(EditableTextModule, { myText: {text}, isEditing: true})
    // React.createElement(EditableTextModule, { myText: text, isEditing: true}),
    // React.createElement(EditableTextModule, { myText: text, isEditing: true}),
    // React.createElement(EditableTextModule, { myText: text, isEditing: true})
   ];
   const [segmentList, setSegmentList] = useState(myListing);
   const [theTextSnippets, setTheTextSnippets] = useState(textSnippets);
   const [theFillInTheBlank, setTheFillInTheBlank] = useState(isFillInTheBlank);

    return (
     <>
     <div>
       <div> 
         <br />
         <div className="componentWidth">
         <EditableTextModule myText={text} isEditing={true} theFontSize={"p"}/>
         <div className="fitbComponent">{segmentList}</div>
         </div>
         <br />
       </div>
     <div>
    {/* <button className='formbuttons' id="some-inner-answer" */}
     <button id="some-inner-answer"
         onClick={() =>
           // @ts-ignore comment
           setSegmentList((segmentList) =>  
            segmentList.concat(
              //  React.createElement(DynamicMutliChoiceOption, { text: 'another option', checkedCondition: false, hasEditorOpened: false})
             )
           )
         }
       >
         Add Option (+)
       </button>     
       <button id="some-inner-answer"
         onClick={() =>{
           // [ZB]
           setSegmentList(segmentList.slice(0, -1))} }
       >
         Remove Option (-)
       </button> 
       {/* CHQ: This is where I tested to prove that content editable would address my problems */}
       {/* <p>total number of inner things: {segmentList.length}</p> */}
 
      </div>
       
 </div> 
    <br />
    <br />
    
    </>
  );
 };


 function QuestionSelector2({ exampleFunc }) {
  const [childData, setChildData] = useState("");

  return(
    <div> <button className='formbuttons' onClick={exampleFunc}>Multiple Choice</button> </div>
      );
}

 
let myList3 = [React.createElement(DynamicShortAnswer, { text: "test me", isProductionState: false, captureState:})];

// 'DynamicComponentProps' only refers to a type, but is being used as a value here.ts(2693)
// let myList3 = [React.createElement(DynamicComponentProps, { text: "test me"})];


//  let myList3 = [createDynamicComponent2(DynamicShortAnswer, "sss")];
//  let myList3 = [createDynamicComponent2(DynamicShortAnswer)];

 
// function Greeting({ name, age }) {
//   return React.createElement(
//     'h1',
//     { className: 'greeting' },
//     'Hello ',
//     React.createElement('i', null, name),
//     '. Welcome! You are ', React.createElement('i', null, age), ' years old.' 
//   );
// }

// CHQ: t his worked!
// function UseGreeting()
// {
//   return  React.createElement(Greeting, { name: 'Taylor', age: 25 });
// }

const App3: React.FC = () => {
// const App3: React.FC = ({getTheStore, setTheStore}) => {
  // const [count, setCount] = useState(0);
  // @ts-ignore comment
  //   const [thePlatform, setThePlatform] = [];
  const [thePlatform, setThePlatform] = useState(myList3);

  const [formName, setFormName] = useState("Untitled");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  // const [formArea, setFormArea] = useState(formField);

  let textSnippets= ["d", "d", "de"];
  let isFillInTheBlank=[true, true, true];  
  
  const navigate = useNavigate();

  const coursesPage = () => {
    // history.push("/new-form")
    navigate("/new-form")
  }

  const BackToHome = () => {
    // history.push("/new-form")
    navigate("/")
  }

  
  return (
    <> 
    {/* <UseGreeting/> */}
    
      <div className='Button-section App-leftside'>
        <img src={logo} width={200} className="App-logo" alt="logo"/>
        {/* <img src={logo} width={20} className="App-logo" alt="logo"/> */}
        
        <button className='formbuttons' onClick={BackToHome}>←</button>
        <p> Form Question Types</p>
        <button className='formbuttons' id="short-answer"
        onClick={() =>
          // @ts-ignore comment
          setThePlatform((thePlatform) =>
            thePlatform.concat(React.createElement(DynamicShortAnswer, { text: "test me", isProductionState: false}))
          // thePlatform.concat(createDynamicComponent2(DynamicShortAnswer, "sss"))
          )
        }
        >
          Add short answer
        </button>
        <br />
      <button className='formbuttons' id="long-answer"
        onClick={() =>
          // @ts-ignore comment
          setThePlatform((thePlatform) =>
            // thePlatform.concat(React.createElement(DynamicLongAnswer))
            thePlatform.concat(React.createElement(DynamicLongAnswer, { text: "test me", isProductionState: false}))
          )
        }
      >
        Add long answer
      </button> 
      <br />

     <button className='formbuttons' id="true-false"
        onClick={() =>
          // @ts-ignore comment
          // CHQ: the following doesn't work.
          setThePlatform((thePlatform) =>
            // thePlatform.concat(React.createElement(DynamicTrueFalse))
            thePlatform.concat(React.createElement(DynamicTrueFalse, { text: 'Question Title', isProductionState: false}))
          // thePlatform.concat(React.createElement(DynamicTrueFalse, { text: 'Question Title'}))
          )
        }
      >
        Add True/False
      </button>
      {/* <br /> */}

      <button className='formbuttons' id="multi-choice"
        onClick={() =>
          // @ts-ignore comment
          // CHQ: the following doesn't work.
          setThePlatform((thePlatform) =>
             
              thePlatform.concat(React.createElement(DynamicMultiChoice, { text: 'Question Title', isProductionState: false}))
             
          )
        }
      >
        Add Multiple choice
      </button>
      <br />

{/* No overload matches this call.
  Overload 1 of 2, '(...items: ConcatArray<FunctionComponentElement<DynamicComponentProps>>[]): FunctionComponentElement<DynamicComponentProps>[]', gave the following error.
    Argument of type 'DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>' is not assignable to parameter of type 'ConcatArray<FunctionComponentElement<DynamicComponentProps>>'.
      Type 'DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>' is missing the following properties from type 'ConcatArray<FunctionComponentElement<DynamicComponentProps>>': length, join, slice
  Overload 2 of 2, '(...items: (FunctionComponentElement<DynamicComponentProps> | ConcatArray<FunctionComponentElement<DynamicComponentProps>>)[]): FunctionComponentElement<...>[]', gave the following error.
    Argument of type 'DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>,  */}
      {/* <button className='formbuttons' id="fill-in-blank"
        onClick={() =>
          // @ts-ignore comment
          // CHQ: the following doesn't work.
          setThePlatform((thePlatform) =>
             
              thePlatform.concat(React.createElement(DynamicFillInTheBlank,  {text:'d', textSnippets: textSnippets, }))
             
          )
        }
      >
        Add Fill in the blank
      </button>
      <br /> */}
      
      {/* <p>total number of questions: {thePlatform.length}</p> */}
      {/* <div>{myList3}</div> */}
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
           <div className='App-rightside'>
            <div className="platformMargin">
            <p className={false ? "hasBorder" : "noBorder"} contentEditable={false}> {"."} </p>
              <button disabled={true} onClick={apiCall}>This button is actually meant to force  .</button>
            </div>
            <div className="platformContent">
               
            <div className="platformAlignment">
              {/* <button onClick={apiCall}>Make API call</button> */}
            <button onClick={apiCall}>Save Form</button>
            {/* <h2> New Form </h2> */}
            {/* FIXME: editing title isn't working */}
            <br/>
            {/* <SmallTextFieldAlt isVisible={isEditingTitle} thisText={formName} setThisText={setFormName} /> */}
            <EditableTextModuleTitle myText={formName} setMyText={setFormName} isEditing={isEditingTitle} theFontSize={"h2"}/>
            {/* <EditableTextModule myText={formName} isEditing={isEditingTitle} theFontSize={"h2"}/> */}
            <br/>
            <button id="some-inner-answer"
                onClick={() => { setIsEditingTitle(!isEditingTitle) }}
                >
                  {isEditingTitle ? "Save Changes": "Edit Title"}
                </button>
                {/* <p>Number of questions: {thePlatform.length}</p> */}
              <div>{thePlatform}</div>
            </div>
            <div className="platformAlignment">
            </div>

            </div>
            {/* <div className="platformMargin">
              <p color="red">dddd</p>
            </div> */}


           </div>
    </>
  ); 
}; 

 function FormPage1() {
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
             {/* FIXME: inserting component here did not work */}
             {/* Too many re-renders. React limits the number of renders to prevent an infinite loop. */}
                          {/* <QuestionSelector2 exampleFunc={setFormArea((formArea) => formArea.concat({
           name: "Multiple Choice",
           component: "MC Question",
         }))}/> */}

              <div>
              <button onClick={() =>
            // @ts-ignore comment
            setThePlatform((thePlatform) =>
              thePlatform.concat(createDynamicComponent2(DynamicShortAnswer, "sss"))
            // thePlatform.concat(createDynamicComponent2(DynamicShortAnswer))
            )
              }
            >
            Add short answer
            </button>


             </div>
            
             {/* <>{compList}</> */}
 
             {/* <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
             >
               Learn React
             </a> */}
             <p className="listWindow">{JSON.stringify(formArea)}</p>
             
              
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

//  let globalDataStore = [];

 function FormPage() {

  const [globalDataStore, setGlobalDataStore] = useState(0);


  // return(<FormPage1/>)
  // return(<App3 getTheStore={myList3} setTheStore={}/>)
  return(<App3/>);
  }
 
 export default FormPage;
 