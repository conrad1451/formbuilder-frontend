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

[AM]: https://stackoverflow.com/questions/46230992/html-placing-headers-side-by-side


[AEG]: https://amcereijo.medium.com/diving-into-object-cloning-exploring-alternatives-and-limitations-644f0c71315d

*/ 
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
 
import {
  updatingID,
  selectCompIDToDelete,
  updatingID2,
  addToDeletList,
  removeFromDeletList,
  selectCompIDToDelete2,
  updateArr,
  selectArr,
  } from '../features/counter/deleteComponentSlice';

import styles from './Counter.module.css';

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

 
interface IDeleteHandler {
  onWorkDone(): void;
  onError(message: string): void;
  // ...
}
interface DynamicComponentProps {
  text: string;  
  isProductionState: boolean;
  captureState?: any
  // isProductionState?: boolean;
  // captureState?: object
}

interface DynamicComponentPropsAlt {
  componentID: string;
  text?: string;  
  isProductionState?: boolean;
  captureState?: object
  // isProductionState?: boolean;
  // captureState?: object
}

//neither of the below work
// interface TestBro {
//   theType: React.createElement(DynamicShortAnswer, { text: "test me", isProductionState: false})
//  }
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


const randNum = () => {
  return Math.random().toString(36).substring(2,2+20);
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

  const [randomId, setRandomId] = useState(Math.random().toString(36).substring(2,2+20))

  // const randomIDLength = 20;
  // const randomId = Math.random().toString(36).substring(2,2+randomIDLength); 
  

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
      {/* <button className='compdelbutton' onClick={removeComponent}>Delete</button> */}
      {/* <button className='compdelbutton' onClick={ConfirmComponentDeletion(randomId, d)}>Delete</button> */}
      {/* <button onClick={removeComponent}>Delete</button> */}

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
          <h1 className="hasBorder1"  contentEditable={isVisible}> {setThisText} </h1>

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
        return (<h1 className={isEditing ? "hasBorder2" : "noBorder2"} contentEditable={isEditing}> {theText} </h1>);
      case "h2":
        return (<h2 className={isEditing ? "hasBorder2" : "noBorder2"} contentEditable={isEditing}> {theText} </h2>);
      case "h3":
        return (<h3 className={isEditing ? "hasBorder2" : "noBorder2"} contentEditable={isEditing}> {theText} </h3>);  
      case "h4":
        return (<h4 className={isEditing ? "hasBorder2" : "noBorder2"} contentEditable={isEditing}> {theText} </h4>);  
      case "h5":
        return (<h5 className={isEditing ? "hasBorder2" : "noBorder2"} contentEditable={isEditing}> {theText} </h5>);  
      case "h6":
        return (<h6 className={isEditing ? "hasBorder2" : "noBorder2"} contentEditable={isEditing}> {theText} </h6>);  
      case "p":
        return (<p className={isEditing ? "hasBorder2" : "noBorder2"} contentEditable={isEditing}> {theText} </p>); 
      case "default":
        return (<p className={isEditing ? "hasBorder2" : "noBorder2"} contentEditable={isEditing}> {theText} </p>);   
    }
    
  
  
    // [AR] // [AT]
  /* CHQ: the contentEditable field eilminates the need for a hidden text box altogether!
  /* <SmallTextFieldAlt isVisible={isEditing} thisText={theText} setThisText={setTheText} /> */ 
  /* CHQ: using a callback function is how the visitor pattern is implemented in functional programming */
  /* [AZ] */
    // return (<p color="white" text-indent="30px" className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </p>);
    // return (<h2 className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </h2>);
    // return (<p className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </p>);
}
  

// function EditableTextModule({myText}) {
function EditableTextModule({myText, isEditing, theFontSize}) {
  // function EditableTextModule({isEditing}) { 
  // const [theText, setTheText] = useState(myText);

  let theText=myText;

  switch(theFontSize){
    case "h1":
      return (<h1 className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </h1>);
    case "h2":
      return (<h2 className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </h2>);
    case "h3":
      return (<h3 className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </h3>);  
    case "h4":
      return (<h4 className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </h4>);  
    case "h5":
      return (<h5 className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </h5>); 
    case "h6":
      return (<h6 className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </h6>);  
    case "p":
      return (<p className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </p>); 
    case "default":
      return (<p className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </p>);   
  }
  


  // [AR] // [AT]
/* CHQ: the contentEditable field eilminates the need for a hidden text box altogether!
/* <SmallTextFieldAlt isVisible={isEditing} thisText={theText} setThisText={setTheText} /> */ 
/* CHQ: using a callback function is how the visitor pattern is implemented in functional programming */
/* [AZ] */
  // return (<p color="white" text-indent="30px" className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </p>);
  // return (<h2 className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </h2>);
  // return (<p className={isEditing ? "hasBorder1" : "noBorder1"} contentEditable={isEditing}> {theText} </p>);
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
    {/* [AM] */}
    <div className="multiChoiceOptLayout">
      {/* <div>  */}
    <input
      type="radio"
      checked={truth}
      // onChange={e => setTruth(e.target.value) }
      // onChange={e => setTruth(false) }
      onChange={() => setTruth(!truth) }
      />
      <EditableTextModule myText={text} isEditing={hasEditorOpen} theFontSize={"h6"}/>
    </div>

      <button id="some-inner-answer"
        onClick={() => { setHasEditorOpen(!hasEditorOpen) }}
        >
          {hasEditorOpen ? "Save Changes": "Edit Option"}
          </button>  
          {/* <br/> */}
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
 
  // TODO: CHQ: I see now that I was using an arbitrary component width to force the multuipelchoice options onto new lines, RATHER than just listing them via a map. I see how that caused issues when text overflowed a certain size
   return (
    <>
    <div>
      <div> 
        <br />
        <div className="componentWidth">
        {/* <div > */}
        <EditableTextModule myText={text} isEditing={true} theFontSize={"h3"}/>

        {/*CHQ: This lists the list elements (components) side by side - we dont wan't that  */}
        {/* <div>{optionList}</div> */}

        <ul>
          {optionList.map((mcOption) => { return (<li>{mcOption}</li>) })}
        </ul> 
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

// Anytime "Add multiple choice alt" is hit, a function should be called that generates a random ID. an useEffect
// should be called afterwards that takes the randomID generated and creates a component to pass in that ID into it
// AND stores that ID in a global list in redux. Redux must store the global list of components (meaning redux)
// will store the component IDs of platform2
// everytime a new component is dynamically created and stored in platform2, its ID should be stored
// in the global list5 
const DynamicMultiChoiceAlt: React.FC<DynamicComponentPropsAlt> = ({ componentID, text, isProductionState, captureState }) => {
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

   const [showContent, setShowContent] = useState(true);

   const [myCompID, setMyCompID] = useState(componentID);
   const targetComponentToDelete = useSelector(selectCompIDToDelete);
   const otherText = useSelector(selectCompIDToDelete2);
   const deletionIDs = useSelector(selectArr);

  //  let correctedDeletionIDs = deletionIDs.slice(1);

   const dispatch = useDispatch();

   // TODO: CHQ: I see now that I was using an arbitrary component width to force the multuipelchoice options onto new lines, RATHER than just listing them via a map. I see how that caused issues when text overflowed a certain size
    return (
      <>
      <div className="multichoiceBlock">
        <div>
          <div>
            {/* <br /> */}
            <div className="componentWidth">
              {/* <h4>targetComponentToDelete is {targetComponentToDelete}</h4> */}
              {/* <br/>  */}
              {/* <h4>other text is {otherText}</h4> */}
              {/* <br/> */}
              {/* <h5>the component IDs for deletionID are {JSON.stringify(deletionIDs)}</h5> */}
              {/* <h5>the corrected component IDs for deletionID are {JSON.stringify(correctedDeletionIDs)}</h5> */}
 
              {/* correctedDeletionIDs */}
              {/* <br/><br/> */}
              {/* <div > */}
              {/* <EditableTextModule myText={componentID} isEditing={true} theFontSize={"h3"}/> */}
              <EditableTextModule myText={"component ID stored in state is: "+myCompID} isEditing={true} theFontSize={"h3"}/>
              {/* <EditableTextModule myText={text} isEditing={true} theFontSize={"h3"}/> */}
                     
              <button id="some-inner-answer"
              onClick={() =>
                // @ts-ignore 
                setShowContent(!showContent) 
              }
              >
                {showContent ? "Collapse Question" : "Expand Question" }
              </button>
                     
                        <br/>          
              <button id="some-inner-answer"
              onClick={() =>
                // @ts-ignore
                // myCompID
                alert("This is broken, surprise")
                // dispatch(addToDeletList(myCompID))
                // dispatch(addToDeletList("incrementValue"))
                // dispatch(updateArr())
                // dispatch(updatingID2())
                //  makeWorkerCallback2(componentID)
              }
              >
                Insert Question above (+)
              </button>
              
              <button id="some-inner-answer"
              onClick={() =>
                // @ts-ignore
                dispatch(removeFromDeletList())
                // dispatch(updatingID())
                //  makeWorkerCallback2(componentID)
              }
              > 
              Remove Question (-)
              </button>
              
              {/*CHQ: This lists the list elements (components) side by side - we dont wan't that  */}
              {/* <div>{optionList}</div> */}
              
              <ul className={showContent ? "displayList" : "hideList" }
              >
                {optionList.map((mcOption) => { return (<li>{mcOption}</li>) })}
              </ul>
              
            </div>
            {/* <br /> */}
          </div>

          {/* <br/>          <br/>          <br/> */}
          
          <div className={showContent ? "displayList" : "hideList" }>
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
      </div>

       {/*CHQ: Following line breaks provide spacing between multiple choice components  */}
      <br /> 
      <br />
   </>
  );
 };

 
// FIXME: CHQ: fix on another day
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

 

 
let myList3 = [React.createElement(DynamicShortAnswer, { text: "test me", isProductionState: false})];


// CHQ
// Cannot find name 'compId'.ts(2304)
// let myList4 = [

//   {
//     compId: Math.random().toString(36).substring(2,2+20),
//     comp: React.createElement(DynamicMultiChoiceAlt, { componentID:compId, text: "test me", isProductionState: false})
//   } 
// ];

let myFirstId = randNum();

let myList4Alt: React.FC<DynamicComponentPropsAlt>[] = [];

let myList4 = [
  React.createElement(DynamicMultiChoiceAlt, { componentID: myFirstId, text: "test me", isProductionState: false})
       ];

// let myList4 = [ ];    
let myList5 = [
  [
    myFirstId, 
    React.createElement(DynamicMultiChoiceAlt, { componentID: myFirstId, text: "test me", isProductionState: false})
  ],   [
    myFirstId, 
    React.createElement(DynamicMultiChoiceAlt, { componentID: myFirstId, text: "test me", isProductionState: false})
  ],   [
    myFirstId, 
    React.createElement(DynamicMultiChoiceAlt, { componentID: myFirstId, text: "test me", isProductionState: false})
  ]         
];
// let myList5 = [[
//       myFirstId, 
//       React.createElement(DynamicMultiChoiceAlt, { componentID: myFirstId, text: "test me", isProductionState: false})
//     ]];


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


function ConfirmComponentDeletion(componentID, deletionFunction) {
  const [open, setOpen] = useState(true);

  // CHQ: caused the page to break and not load
  // if (open) {
  //   // whether I called the method on thedialog or just as a function
  //   showTheDialog();
  //   thedialog.showTheDialog();
  // }
  // const    [open, setOpen] = useState(false);

  const myFunc = () =>{
    setOpen(false)
  }

  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Dialog</button> */}
      <Dialog id="dialog2" open={open}>

      {/* <Dialog id="dialog2" open={open}> */}
      <p>Are you sure you want to delete the component?</p>
          <button onClick={myFunc} id="confirmBtn" value="default">
              No, nevermind
            </button> 
            <button onClick={deletionFunction(componentID)} id="confirmBtn" value="default">
              Yes, Delete
            </button>  
      </Dialog>
    </>
  );
}


// //function to call when pressing button to make a new mutliple choice
// const apiCall = () => {
//   axios.get('http://localhost:5000').then((data) => {
//     // this console.log will be in our frontend console
//     console.log(data)
//   })
// }; 

// [Axy] https://stackoverflow.com/questions/58482738/react-typescript-javascript-interface-as-callback-and-accessing-state
interface IWorkerCallback {
  onWorkDone(): void;
  onError(message: string): void;
  // ...
}


const App3: React.FC = () => {
// const App3: React.FC = ({getTheStore, setTheStore}) => {
  // const [count, setCount] = useState(0);
  // @ts-ignore comment
  //   const [thePlatform, setThePlatform] = [];
  const [thePlatform, setThePlatform] = useState(myList3);
  // const [thePlatform2, setThePlatform2] = useState(myList4);
  const [thePlatform2, setThePlatform2] = useState(myList4Alt);
  const [thePlatform3, setThePlatform3] = useState(myList5); 

  const [formName, setFormName] = useState("Untitled");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  // const [formArea, setFormArea] = useState(formField);

  const [targetIDForDeletion, setTargetIDForDeletion] = useState("");

  // const theCurID = genNewID();
  const [theCurID, setTheCurID] = useState(randNum());

  const hasPageBeenRendered = useRef(false);
  
  // const targetComponentToDelete = useSelector(selectCompIDToDelete);
  const otherText = useSelector(selectCompIDToDelete2);
  const deletionIDs = useSelector(selectArr);


  const dispatch = useDispatch();

  // CHQ: didn't get updated in UI when mutated in the useEffect
  // let broski = "yes";

  // CHQ: method 1 of using useEffect (works but technically produces errors)
  // useEffect(() => {

  //   // setThePlatform2((thePlatform2) => 
  //   //   thePlatform2.concat( 
        
  //   //     React.createElement(DynamicMultiChoiceAlt, { componentID: theCurID, text: "test me", isProductionState: false})

  //   //      )
  //   // )
 
  // }, [theCurID]); // The dependency array ensures the effect runs only when firstName changes

  // useEffect(() => {

  //   // dispatch(addToDeletList(myCompID))

  //   // dispatch(addToDeletList(randNum()))
  //   dispatch(addToDeletList(theCurID))
 
  // }, [thePlatform3]); 
 

  useEffect(() => {

    if(hasPageBeenRendered.current)
    {
      // dispatch(addToDeletList(myCompID))

      // dispatch(addToDeletList(randNum()))
      dispatch(addToDeletList(theCurID));

      // CHQ: didn't update anything
      setTheCurID(randNum());

      // CHQ: didn't update anything in UI 
      // broski = broski += "YO";
    }
    hasPageBeenRendered.current = true;

  }, [thePlatform2]); 

  let textSnippets= ["d", "d", "de"];
  let isFillInTheBlank=[true, true, true];  


  let curID;

 



  // FIXME: CHQ: uncomment when lodash is ready
  // let firstTmpList = structuredClone(myList3);
  
  const navigate = useNavigate();

  const RemoveComponent = (targetQuestion) => {
      // 1. grab ID from target question 
      // 2. compare target question ID to that of each question. If there is a match, uncouple

      let questionsToKeep: boolean[] = []
      let indicesOfQuestionsToDelete: number[] = [];

      thePlatform.forEach(() => {
        questionsToKeep.push(true);
      });

      for (let index = 0; index < thePlatform.length; ++index) {
        const question = thePlatform[index];

        // FIXME: determinen how to grab this, won't be true for all questions
        let isQuestionToDelete = true;

        if(isQuestionToDelete){
          questionsToKeep[index] = false;
          indicesOfQuestionsToDelete.push(index);
        }
      }
//         "message": "Type 'never[]' is missing the following properties from type 'FunctionComponentElement<DynamicComponentProps>': type, props, key",
      // let tmpList: React.FunctionComponentElement<DynamicComponentProps> = [];

      let startIndex=0;

      let i = 0;

      // [AEG]
      while(i < indicesOfQuestionsToDelete.length){
        if(startIndex !== indicesOfQuestionsToDelete[i]){
          let curKeptPortion = thePlatform.slice(startIndex, indicesOfQuestionsToDelete[i]);
          // Property 'push' does not exist on type 'FunctionComponentElement<DynamicComponentProps>'.ts(2339)
          // tmpList.push()
          // let inserttionStart = firstTmpList.length;
          /**
           * Argument of type 'FunctionComponentElement<DynamicComponentProps>[]' is not assignable to parameter of 
           * type 'FunctionComponentElement<DynamicComponentProps>'. Type 'FunctionComponentElement<DynamicComponentProps>[]' 
           * is missing the following properties from type 
           * 'FunctionComponentElement<DynamicComponentProps>': type, props, keyts(2345)
           * */
          
          // firstTmpList.splice(inserttionStart, 0, curKeptPortion)
        
          // CHQ: yeah im modifying the orig val
        
          // FIXME: CHQ: uncomment when lodash is ready
          // let tmpArr = structuredClone(firstTmpList);
          // firstTmpList = tmpArr.concat(curKeptPortion);
        } 

        // we grab the indice of the question to be deleted, adn then add 1 so that we concat its neighbors on either 
        // side goingn forward
        startIndex = 1 + indicesOfQuestionsToDelete[i];
        ++i;
      }
      // FIXME: CHQ: uncomment when lodash is ready
      // setThePlatform(firstTmpList); 
      
  }

  const BackToHome = () => {
    // history.push("/new-form")
    navigate("/")
  }
  
  let newID = randNum();


  // [Axy]
  // Option 1: using object literals
  function makeWorkerCallback(state): IWorkerCallback  {
  // function makeWorkerCallback(state: SomeState): IWorkerCallback  {
  return {
      onWorkDone: () => {
          state.update();
      },
      onError: () => { }
  }
}

function makeWorkerCallback2(targetID: string): IWorkerCallback  {
    return {
      onWorkDone: () => {
        setTargetIDForDeletion(targetID);
      },
      onError: () => { }
  }
}

function addQuesID() {

}

// function addQuesComponent(givenID: number) {
//   setThePlatform2((thePlatform2) => 
//     thePlatform2.concat(React.createElement(DynamicMultiChoiceAlt, { componentID: 5, text: 'Question Title', isProductionState: false, captureState: {function() {
//       setTargetIDForDeletion("d")
//    }}}))
//   )
// }

function genNewID()
{
  return (Math.random().toString(36).substring(2,2+20));
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
      <button className='formbuttons' id="multi-choice"
        onClick={() =>
          // @ts-ignore comment
          // CHQ: the following works.
          setThePlatform2((thePlatform2) => 
              thePlatform2.concat(
                React.createElement(DynamicMultiChoiceAlt, { componentID:theCurID, text: 'Question Title', isProductionState: false})
              
              
              )
          )
          // addQuesComponent(genNewID())
          // addQuesComponent(77)
          // setTheCurID(randNum())
          
          /**
           * No overload matches this call.
  Overload 1 of 2, '(...items: ConcatArray<FunctionComponentElement<DynamicComponentPropsAlt>>[]): FunctionComponentElement<DynamicComponentPropsAlt>[]', gave the following error.
    Argument of type 'DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>' is not assignable to parameter of type 'ConcatArray<FunctionComponentElement<DynamicComponentPropsAlt>>'.
      Type 'DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>' is missing the following properties from type 'ConcatArray<FunctionComponentElement<DynamicComponentPropsAlt>>': length, join, slice
  Overload 2 of 2, '(...items: (FunctionComponentElement<DynamicComponentPropsAlt> | ConcatArray<FunctionComponentElement<DynamicComponentPropsAlt>>)[]): FunctionComponentElement<...>[]', gave the following error.
    Argument of type 'DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>' is not assignable to parameter of type 'FunctionComponentElement<DynamicComponentPropsAlt> | ConcatArray<FunctionComponentElement<DynamicComponentPropsAlt>>'.
      Type 'DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>' is not assignable to type 'FunctionComponentElement<DynamicComponentPropsAlt>'.
        Types of property 'ref' are incompatible.
          Type 'LegacyRef<HTMLInputElement>' is not assignable to type 'undefined'.
            Type 'null' is not assignable to type 'undefined'.ts(2769)
           */
         
        }
      >
        Add Multiple choice Alt
      </button>
      <button className='formbuttons' id="multi-choice"
        onClick={() =>
          // @ts-ignore comment
          // CHQ: the following doesn't work.
          setThePlatform3((thePlatform3) =>
            {

              thePlatform3.concat([
                theCurID, 
              React.createElement(DynamicMultiChoiceAlt, { componentID: theCurID, text: "test me", isProductionState: false})
            ]) }
          )
        }
      >
        Add Multiple choice Alt 2
      </button>
      <br />
{/* the code around mC alt 2 is broken so i will just do the alt */}

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
            <p className={false ? "hasBorder1" : "noBorder1"} contentEditable={false}> {"."} </p>
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

            {/* <h5>the component IDs for deletionID are {JSON.stringify(deletionIDs)}</h5> */}
{/* className='listAlt' */}
            <h5>        
            <ul className='listAlt'>
              {/* <ul className='listAlt'> */}
                The componentIDS of the Question Components
                {deletionIDs.map((theSelectedID) => { return (<li>{theSelectedID}</li>) })}
              </ul>
            </h5>

            <button id="some-inner-answer"
                onClick={() => { setIsEditingTitle(!isEditingTitle) }}
                >
                  {isEditingTitle ? "Save Changes": "Edit Title"}
                </button>
                {/* <p>Number of questions: {thePlatform.length}</p> */}
              {/* <div>{thePlatform}</div> */}
              <div>{thePlatform2}</div>
              {/*     // CHQ: didn't update anything in UI  */}
              {/* <div>{broski}</div> */}
              {/* <div>{thePlatform3}</div> */}
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


//  let globalDataStore = [];

 function FormPage() {

  const [globalDataStore, setGlobalDataStore] = useState(0);

  // return(<App3 getTheStore={myList3} setTheStore={}/>)
  return(<App3/>);
  }
 
 export default FormPage;
 