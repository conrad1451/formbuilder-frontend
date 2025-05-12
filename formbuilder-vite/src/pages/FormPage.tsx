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

[QB]: https://www.google.com/search?q=use+map+to+concatenate+elements+of+a+list+into+string+-+js&client=firefox-b-1-d&sca_esv=d8dc71a00e7da157&ei=12YjZ-7RBdiKptQPpdGQMQ&ved=0ahUKEwiumd7_vriJAxVYhYkEHaUoJAYQ4dUDCBA&oq=use+map+to+concatenate+elements+of+a+list+intoa+string+-+js&gs_lp=Egxnd3Mtd2l6LXNlcnAiO3VzZSBtYXAgdG8gY29uY2F0ZW5hdGUgZWxlbWVudHMgb2YgYSBsaXN0IGludG9hIHN0cmluZyAtIGpzSABQAFgAcAB4AZABAJgBAKABAKoBALgBDMgBAJgCAKACAJgDAOIDBRIBMSBAkgcAoAcA&sclient=gws-wiz-serp


*/
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// import {
//   updatingID,
//   selectCompIDToDelete,
//   updatingID2,
//   addToDeletList,
//   removeFromDeletList,
//   selectCompIDToDelete2,
//   updateArr,
//   selectArr,
//   } from '../features/counter/deleteComponentSlice';

// import {
//   addToList,
//   removeFromList,
//   selectDeletionID,
//   updateDeletionTarget,
//   selectModalOpen,
//   updateModalDisplaying,
//   toggleModalDisplaying,
//   selectMyArr,
//   selectDummyVar,
//   updateDummyVar,
//   selectInputText,
//   updateInputText,
//   updateDummyVarHelper,
//   } from '../features/counter/questionComponentSlice.js';

// import styles from "./Counter.module.css";
import styles from "../features/counter/Counter.module.css";

import { useNavigate } from "react-router-dom";

// import Dialog from "./MyDialog";
import Dialog from "../modules/MyDialog";

import logo from "../logo.svg";
import "../App.css";
// import 'axios';
// import Axios from 'axios';
//  import axios from 'axios';

const formField = [];

// CHQ: TODO: set margins between buttons

interface IDeleteHandler {
  onWorkDone(): void;
  onError(message: string): void;
  // ...
}
interface DynamicComponentProps {
  text: string;
  isProductionState: boolean;
  captureState?: any;
  // isProductionState?: boolean;
  // captureState?: object
}

interface DynamicComponentPropsAlt {
  componentID: string;
  text?: string;
  isProductionState?: boolean;
  captureState?: object;
  // isProductionState?: boolean;
  // captureState?: object
}

//neither of the below work
// interface TestBro {
//   theType: React.createElement(DynamicShortAnswer, { text: "test me", isProductionState: false})
//  }
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
  optionID: string;
  text: string;
  checkedCondition: boolean;
  hasEditorOpened: boolean;
  // checkedFunction: Function;
  // checkedFunction: function;
  // checkedFunction: function name(params:type) {

  // }
}

function ConfirmationModal({
  isModalOpen,
  confirmText,
  cancelText,
  confirmAction,
  cancelAction,
}: {
  isModalOpen: boolean;
  confirmText: string;
  cancelText: string;
  confirmAction: () => void;
  cancelAction: () => void;
}) {
  // const [open, setOpen] = useState(true);

  // CHQ: caused the page to break and not load
  // if (open) {
  //   // whether I called the method on thedialog or just as a function
  //   showTheDialog();
  //   thedialog.showTheDialog();
  // }
  // const    [open, setOpen] = useState(false);

  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Dialog</button> */}
      <Dialog id="dialog2" open={isModalOpen}>
        {/* <Dialog id="dialog2" open={open}> */}

        <form id="form2" method="dialog">
          {/* <form method="dialog" action=""> */}
          <br />
          <label htmlFor="fname">Are you sure?: </label>
          {/* <input type="submit"></input> */}
          <br />
          <br />
          {/* <button onclick="closeDialog()">Cancel</button> */}
          <input
            className="my_button"
            type="submit"
            onClick={confirmAction}
            value={confirmText}
          />
          <input
            className="my_button"
            type="submit"
            onClick={cancelAction}
            value={cancelText}
          />
          {/* <button onclick="myFunc()" id="confirmBtn" value="default">
              Confirm
            </button> */}
        </form>
      </Dialog>
    </>
  );
}

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

// const apiCall = () => {
//    axios.get('http://localhost:5000').then((data) => {
//      // this console.log will be in our frontend console
//      console.log(data)
//    })
// };

const randNum = () => {
  return Math.random()
    .toString(36)
    .substring(2, 2 + 20);
};

const DynamicTextEntry: React.FC<DynamicComponentProps> = ({ text }) => {
  // Property 'text' does not exist on type '{}'.ts(2339)
  // const DynamicShortAnswer: React.FC<{}> = ({ text }) => {
  // const DynamicShortAnswer: React.FC<{}> = () => {
  const [field, setField] = useState("");

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
          onChange={(e) => setField(e.target.value)}
          size={10}
          // contentEditable="true"
          aria-multiline="true"
          //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
          // rows={10}
          maxLength={280}
        />
      </label>
      <br />
    </>
  );
};

const DynamicShortAnswer: React.FC<DynamicComponentPropsAlt> = ({
  componentID,
  text,
  isProductionState,
  captureState,
}) => {
  // const DynamicShortAnswer: React.FC<DynamicComponentProps> = ({ text, isProductionState, captureState }) => {
  // Property 'text' does not exist on type '{}'.ts(2339)
  // const DynamicShortAnswer: React.FC<{}> = ({ text }) => {
  // const DynamicShortAnswer: React.FC<{}> = () => {
  const [field, setField] = useState("");
  const [myCompID, setMyCompID] = useState(componentID);

  const [randomId, setRandomId] = useState(
    Math.random()
      .toString(36)
      .substring(2, 2 + 20)
  );

  // [AR]
  return (
    <>
      <div className="multichoiceBlock">
        {/* <div> */}
        {/* <div className="Component-leftside"> */}
        <div>
          <EditableTextModule
            myText={text}
            isEditing={true}
            theFontSize={"p"}
          />
          <br />
          <label>
            {" "}
            {/* {text}{': '} */}
            <input
              type="textarea"
              // type="text"
              value={field}
              onChange={(e) => setField(e.target.value)}
              size={50}
              // contentEditable="true"
              aria-multiline="true"
              //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
              // rows={10}
              maxLength={280}
            />
          </label>
        </div>
        {/* <br /> */}
        <p>{"component ID: " + myCompID}</p>
      </div>
      <br />
      <br />
    </>
  );
};

// [AV]

const DynamicLongAnswer: React.FC<DynamicComponentPropsAlt> = ({
  componentID,
  text,
  isProductionState,
  captureState,
}) => {
  //  const DynamicLongAnswer: React.FC<DynamicComponentProps> = ({ text, isProductionState, captureState }) => {
  // const DynamicLongAnswer: React.FC<{}> = () => {
  const [field, setField] = useState("");
  const [myCompID, setMyCompID] = useState(componentID);

  return (
    <>
      {/* <div className="componentWidth"> */}
      <div className="multichoiceBlock">
        <EditableTextModule myText={text} isEditing={true} theFontSize={"p"} />
        <br />
        <label>
          {" "}
          {/* {text}{': '} */}{" "}
          <input
            type="textarea"
            // type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
            size={50}
            // contentEditable="true"
            aria-multiline="true"
            //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
            // rows={10}
            maxLength={560}
          />
        </label>
        <br />
        <p>{"component ID: " + myCompID}</p>
      </div>
      <br />
    </>
  );
};

// const DynamicTrueFalse: React.FC<DynamicTF> = ({ text }) => {
const DynamicTrueFalse: React.FC<DynamicComponentPropsAlt> = ({
  componentID,
  text,
  isProductionState,
  captureState,
}) => {
  // const DynamicTrueFalse: React.FC<DynamicComponentProps> = ({ text, isProductionState, captureState }) => {

  //  const DynamicTrueFalse: React.FC<DynamicTF> = ({ text, isProductionState }) => {
  // const DynamicTrueFalse: React.FC<{}> = () => {
  const [truth, setTruth] = useState(false);
  const [myCompID, setMyCompID] = useState(componentID);

  // [AU]
  return (
    <>
      {/* <div className="componentWidth"> */}
      <div className="multichoiceBlock">
        <EditableTextModule myText={text} isEditing={true} theFontSize={"p"} />
        {/* <EditableTextModule myText={text} isEditing={isProductionState} theFontSize={"p"}/> */}
        <br />
        <label>
          True
          <input
            type="radio"
            checked={truth}
            onChange={(e) => setTruth(true)}
            // onClick={setTruth(true)}
          />
        </label>
        <br />

        <label>
          False
          <input
            type="radio"
            checked={!truth}
            onChange={(e) => setTruth(false)}
            // onClick={setTruth(true)}
          />
        </label>
        <br />
        <p>{"component ID: " + myCompID}</p>
      </div>

      {/* <br /> */}
      <br />
    </>
  );
};

function SmallTextField({ isVisible }: { isVisible: boolean }) {
  const [field, setField] = useState("");

  // CHQ: an optimization I put here. Far better than returning
  // one component when isVisible and a whole nother component
  // when !isVisible, since the only difference between the
  // two is the type of input (text area vs hidden)
  // [VB]
  return (
    <div className="testMe">
      {/* <p>dddd</p> */}
      <label>
        {/* {text}{': '} */}
        {/* <br /> */}
        <input
          // type="textarea"
          // type="hidden"
          type={isVisible ? "textarea" : "hidden"}
          // type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          size={10}
          // contentEditable="true"
          aria-multiline="true"
          //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
          // rows={10}
          maxLength={280}
        />
      </label>
      {/* <br /> */}
    </div>
  );
}

// function SmallTextFieldAlt({isVisible}){
function SmallTextFieldAlt({
  isVisible,
  thisText,
  setThisText,
}: {
  isVisible: boolean;
  thisText: string;
  setThisText: (text: string) => void;
}) {
  // const [field, setField] = useState('');

  // CHQ: an optimization I put here. Far better than returning
  // one component when isVisible and a whole nother component
  // when !isVisible, since the only difference between the
  // two is the type of input (text area vs hidden)
  // [VB]
  return (
    <div className="testMe">
      <h1 className="hasBorder1" contentEditable={isVisible}>
        {" "}
        {thisText}{" "}
      </h1>

      {/* <p>dddd</p> */}
      {/* <label> */}
      {/* {text}{': '} */}
      {/* <input
      // type = {isVisible ? "textarea" : "hidden"}
      type =  "textarea"
      value={thisText}
      onChange={e => setThisText(e.target.value) }
      size={10}
      // contentEditable="true"
      aria-multiline="true"
      maxLength={280}
      /> */}
      {/* </label>  */}
    </div>
  );
}

// function EditableTextModule({myText}) {
function EditableTextModuleTitle({
  myText,
  setMyText,
  isEditing,
  theFontSize,
}: {
  myText: string;
  setMyText: (text: string) => void;
  isEditing: boolean;
  theFontSize: string;
}) {
  // function EditableTextModule({isEditing}) {
  // const [theText, setTheText] = useState(myText);

  let theText = myText;

  switch (theFontSize) {
    case "h1":
      return (
        <h1
          className={isEditing ? "hasBorder2" : "noBorder2"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={isEditing ? "hasBorder2" : "noBorder2"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={isEditing ? "hasBorder2" : "noBorder2"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={isEditing ? "hasBorder2" : "noBorder2"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={isEditing ? "hasBorder2" : "noBorder2"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={isEditing ? "hasBorder2" : "noBorder2"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h6>
      );
    case "p":
      return (
        <p
          className={isEditing ? "hasBorder2" : "noBorder2"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </p>
      );
    case "default":
      return (
        <p
          className={isEditing ? "hasBorder2" : "noBorder2"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </p>
      );
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
function EditableTextModule({
  myText,
  isEditing,
  theFontSize,
}: {
  myText: string;
  isEditing: boolean;
  theFontSize: string;
}) {
  // function EditableTextModule({isEditing}) {
  // const [theText, setTheText] = useState(myText);

  let theText = myText;

  switch (theFontSize) {
    case "h1":
      return (
        <h1
          className={isEditing ? "hasBorder1" : "noBorder1"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={isEditing ? "hasBorder1" : "noBorder1"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={isEditing ? "hasBorder1" : "noBorder1"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={isEditing ? "hasBorder1" : "noBorder1"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={isEditing ? "hasBorder1" : "noBorder1"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={isEditing ? "hasBorder1" : "noBorder1"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </h6>
      );
    case "p":
      return (
        <p
          className={isEditing ? "hasBorder1" : "noBorder1"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </p>
      );
    case "default":
      return (
        <p
          className={isEditing ? "hasBorder1" : "noBorder1"}
          contentEditable={isEditing}
        >
          {" "}
          {theText}{" "}
        </p>
      );
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
const DynamicMutliChoiceOption: React.FC<DynamicMCProps> = ({
  optionID,
  text,
  checkedCondition,
  hasEditorOpened,
}) => {
  // const [isChecked, setIsChecked] = useState(false);
  // const [isChecked, setIsChecked] = useState(checkedCondition);
  // const [optionText, setOptionText] = useState(text);
  const [hasEditorOpen, setHasEditorOpen] = useState(hasEditorOpened);

  // let myListing = [createDynamicComponent2(DynamicTextEntry)];
  const [truth, setTruth] = useState(checkedCondition);
  //  const [inputView, setInputView] = useState(myListing);

  // if I click on the option and it is not already selected, now it will be selected
  // if I click on the option and it is already selected, it is just selected - indempotent action
  return (
    <>
      {/* [AM] */}
      <div className="multiChoiceOptLayout">
        {/* <div>  */}
        <input
          type="radio"
          checked={truth}
          // onChange={e => setTruth(e.target.value) }
          // onChange={e => setTruth(false) }
          onChange={() => setTruth(!truth)}
        />
        <EditableTextModule
          myText={text}
          isEditing={hasEditorOpen}
          theFontSize={"h6"}
        />
      </div>

      <button
        id="some-inner-answer"
        onClick={() => {
          setHasEditorOpen(!hasEditorOpen);
        }}
      >
        {hasEditorOpen ? "Save Changes" : "Edit Option"}
      </button>
      {/* <br/> */}
    </>
  );
};

//  [ZA]

// const DynamicMultiChoice: React.FC<DynamicComponentProps> = ({ text, isProductionState, captureState }) => {
//  // const DynamicTrueFalse: React.FC<{}> = () => {
//   //  const [truth, setTruth] = useState(false);
//   //  const [theChoice, setTheChoice] = useState("");
//    // [AU] [AJ]
//   let myListing = [
//     React.createElement(DynamicMutliChoiceOption, { text: 'Option 1', checkedCondition: true, hasEditorOpened: false})
//     ,React.createElement(DynamicMutliChoiceOption, { text: 'Option 2', checkedCondition: false, hasEditorOpened: false})
//     ,React.createElement(DynamicMutliChoiceOption, { text: 'Option 3', checkedCondition: true, hasEditorOpened: false})
//     ,React.createElement(DynamicMutliChoiceOption, { text: 'Option 4', checkedCondition: false, hasEditorOpened: false})
//   ];
//   const [optionList, setOptionList] = useState(myListing);

//    return (
//     <>
//     <div>
//       <div>
//         <br />
//         <div className="componentWidth">
//         {/* <div > */}
//         <EditableTextModule myText={text} isEditing={true} theFontSize={"h3"}/>

//         {/*CHQ: This lists the list elements (components) side by side - we dont wan't that  */}
//         {/* <div>{optionList}</div> */}

//         <ul>
//           {optionList.map((mcOption) => { return (<li>{mcOption}</li>) })}
//         </ul>
//         </div>
//         <br />
//       </div>
//     <div>
//    {/* <button className='formbuttons' id="some-inner-answer" */}
//     <button id="some-inner-answer"
//         onClick={() =>
//           // @ts-ignore comment
//           setOptionList((optionList) =>
//             optionList.concat(
//               React.createElement(DynamicMutliChoiceOption, { text: 'another option', checkedCondition: false, hasEditorOpened: false})
//             )
//           )
//         }
//       >
//         Add Option (+)
//       </button>
//       <button id="some-inner-answer"
//         onClick={() =>{
//           // [ZB]
//           setOptionList(optionList.slice(0, -1))} }
//       >
//         Remove Option (-)
//       </button>
//      </div>

//      </div>

//      <br />
//      <br />
//   </>
//  );
// };

// Anytime "Add multiple choice alt" is hit, a function should be called that generates a random ID. an useEffect
// should be called afterwards that takes the randomID generated and creates a component to pass in that ID into it
// AND stores that ID in a global list in redux. Redux must store the global list of components (meaning redux)
// will store the component IDs of platform2
// everytime a new component is dynamically created and stored in platform2, its ID should be stored
// in the global list5
const DynamicMultiChoiceAlt: React.FC<DynamicComponentPropsAlt> = ({
  componentID,
  text,
  isProductionState,
  captureState,
}) => {
  // const DynamicTrueFalse: React.FC<{}> = () => {
  //  const [truth, setTruth] = useState(false);
  //  const [theChoice, setTheChoice] = useState("");
  // [AU] [AJ]

  // const [optionIDList, setOptionIDList] = useState(Array<String>);
  // const [isCheckedList, setIsCheckedList] = useState(Array<Boolean>);

  const [optionIDList, setOptionIDList] = useState([
    randNum(),
    randNum(),
    randNum(),
    randNum(),
  ]);
  const [isCheckedList, setIsCheckedList] = useState([
    true,
    false,
    false,
    false,
  ]);

  // let myListing: React.FC<DynamicMCProps>[] = [];

  //  let myListing = [
  //    React.createElement(DynamicMutliChoiceOption, { optionID: "", text: 'Option 1', checkedCondition: true, hasEditorOpened: false})
  //    ,React.createElement(DynamicMutliChoiceOption, { optionID: "", text: 'Option 2', checkedCondition: false, hasEditorOpened: false})
  //    ,React.createElement(DynamicMutliChoiceOption, { optionID: "", text: 'Option 3', checkedCondition: true, hasEditorOpened: false})
  //    ,React.createElement(DynamicMutliChoiceOption, { optionID: "", text: 'Option 4', checkedCondition: false, hasEditorOpened: false})
  //  ];

  let myListing = [
    React.createElement(DynamicMutliChoiceOption, {
      optionID: optionIDList[0],
      text: "Option 1",
      checkedCondition: isCheckedList[0],
      hasEditorOpened: false,
    }),
    React.createElement(DynamicMutliChoiceOption, {
      optionID: optionIDList[1],
      text: "Option 2",
      checkedCondition: isCheckedList[1],
      hasEditorOpened: false,
    }),
    React.createElement(DynamicMutliChoiceOption, {
      optionID: optionIDList[2],
      text: "Option 3",
      checkedCondition: isCheckedList[2],
      hasEditorOpened: false,
    }),
    React.createElement(DynamicMutliChoiceOption, {
      optionID: optionIDList[3],
      text: "Option 4",
      checkedCondition: isCheckedList[3],
      hasEditorOpened: false,
    }),
  ];
  const [optionList, setOptionList] = useState(myListing);

  const [showContent, setShowContent] = useState(true);

  const [myCompID, setMyCompID] = useState(componentID);
  const targetComponentToDelete = useSelector(selectDeletionID);

  const myOwnDummyVar1 = useSelector(selectDummyVar);

  const myInputText = useSelector(selectInputText);

  const mustModalAppear = useRef(false);
  const dispatch2 = useDispatch();

  // const DeleteComponent = (targetQuestion) => {}

  const addOption = () => {
    setOptionList((optionList) =>
      optionList.concat(
        React.createElement(DynamicMutliChoiceOption, {
          text: "another option",
          checkedCondition: false,
          hasEditorOpened: false,
        })

        // React.createElement(DynamicMutliChoiceOption, { text: 'another option', checkedCondition: false, hasEditorOpened: false})
      )
    );
  };

  const deleteComponent = () => {
    dispatch2(updateDeletionTarget(myCompID));
    dispatch2(updateModalDisplaying(true));

    // FIXME: CHQ: this is having trouble updating a boolean global state but I don't understand why

    // this isn't occuring right after updating the deletiontarget with the componentID
    // dispatch2(toggleModalDisplaying());

    dispatch2(updateDummyVar(myOwnDummyVar1 + "dd"));
    // dispatch2(updateInputText("BRO")),

    // updateDummyVarHelper();
    // dispatch2(updateDummyVarHelper());

    // toggleModalDisplaying
  };

  useEffect(() => {
    // dispatch2(toggleModalDisplaying());

    if (mustModalAppear.current) {
      // dispatch2(toggleModalDisplaying());
    }
    mustModalAppear.current = true;
  }, [targetComponentToDelete]);
  return (
    <>
      <div className="multichoiceBlock">
        <div>
          <div>
            {/* <br /> */}
            <div className="componentWidth">
              {/* <h4>targetComponentToDelete is {targetComponentToDelete}</h4> */}
              {/* <br/>  */}
              {/* <h4>other text is {otherText}</h4> */}
              {/* <div > */}
              {/* <EditableTextModule myText={componentID} isEditing={true} theFontSize={"h3"}/> */}
              {/* <EditableTextModule myText={"component ID stored in state is: "+myCompID} isEditing={true} theFontSize={"h3"}/> */}
              <EditableTextModule
                myText={text}
                isEditing={true}
                theFontSize={"p"}
              />

              <button
                id="some-inner-answer"
                onClick={() =>
                  // @ts-ignore
                  setShowContent(!showContent)
                }
              >
                {showContent ? "Collapse Question" : "Expand Question"}
              </button>

              <br />
              <button
                id="some-inner-answer"
                onClick={
                  () =>
                    // @ts-ignore
                    alert("This is broken, surprise")
                  // dispatch(addToDeletList(myCompID))
                  // dispatch(addToDeletList("incrementValue"))
                  // dispatch(updateArr())
                  // dispatch(updatingID2())
                  //  makeWorkerCallback2(componentID)
                }
              >
                Insert Question above (+)
              </button>

              <button
                id="some-inner-answer"
                onClick={
                  () =>
                    // @ts-ignore

                    deleteComponent()

                  // dispatch(removeFromDeletList())
                  // dispatch(removeFromList(myCompID))
                  // dispatch(updatingID())
                  //  makeWorkerCallback2(componentID)
                }
              >
                Remove Question (-)
              </button>

              {/*CHQ: This lists the list elements (components) side by side - we dont wan't that  */}
              {/* <div>{optionList}</div> */}

              <ul className={showContent ? "displayList" : "hideList"}>
                {optionList.map((mcOption: any) => {
                  return <li key={mcOption.props.optionID}>{mcOption}</li>;
                })}
              </ul>
            </div>
            {/* <br /> */}
          </div>

          {/* <br/>          <br/>          <br/> */}

          <div className={showContent ? "displayList" : "hideList"}>
            {/* <button className='formbuttons' id="some-inner-answer" */}
            <button
              id="some-inner-answer"
              onClick={() =>
                // @ts-ignore comment
                addOption()
              }
            >
              Add Option (+)
            </button>

            <button
              id="some-inner-answer"
              onClick={() => {
                // [ZB]
                setOptionList(optionList.slice(0, -1));
              }}
            >
              Remove Option (-)
            </button>
          </div>
          <p>{"component ID: " + myCompID}</p>
        </div>
      </div>

      {/*CHQ: Following line breaks provide spacing between multiple choice components  */}
      <br />
      <br />
    </>
  );
};

// FIXME: CHQ: fix on another day
const DynamicFillInTheBlank: React.FC<DynamicFITB> = ({
  text,
  textSnippets,
  isFillInTheBlank,
}) => {
  // const DynamicTrueFalse: React.FC<{}> = () => {
  //  const [truth, setTruth] = useState(false);
  //  const [theChoice, setTheChoice] = useState("");
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
            <EditableTextModule
              myText={text}
              isEditing={true}
              theFontSize={"p"}
            />
            <div className="fitbComponent">{segmentList}</div>
          </div>
          <br />
        </div>
        <div>
          {/* <button className='formbuttons' id="some-inner-answer" */}
          <button
            id="some-inner-answer"
            onClick={() =>
              // @ts-ignore comment
              setSegmentList((segmentList) =>
                segmentList
                  .concat
                  //  React.createElement(DynamicMutliChoiceOption, { text: 'another option', checkedCondition: false, hasEditorOpened: false})
                  ()
              )
            }
          >
            Add Option (+)
          </button>
          <button
            id="some-inner-answer"
            onClick={() => {
              // [ZB]
              setSegmentList(segmentList.slice(0, -1));
            }}
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

// let myList3 = [React.createElement(DynamicShortAnswer, { text: "test me", isProductionState: false})];

// CHQ
// Cannot find name 'compId'.ts(2304)
// let myList4 = [

//   {
//     compId: Math.random().toString(36).substring(2,2+20),
//     comp: React.createElement(DynamicMultiChoiceAlt, { componentID:compId, text: "test me", isProductionState: false})
//   }
// ];

let myFirstId = randNum();
// React.FC<DynamicMCProps>
// let listOfOptions: React.FC<DynamicMutliChoiceOption>[] = [];
// let listOfOptions: React.FC<DynamicMCProps>[] = [];

let myList4Alt: React.FC<DynamicComponentPropsAlt>[] = [];

let myList4 = [
  React.createElement(DynamicMultiChoiceAlt, {
    componentID: myFirstId,
    text: "test me",
    isProductionState: false,
  }),
];

// let myList4 = [ ];
let myList5 = [
  [
    myFirstId,
    React.createElement(DynamicMultiChoiceAlt, {
      componentID: myFirstId,
      text: "test me",
      isProductionState: false,
    }),
  ],
  [
    myFirstId,
    React.createElement(DynamicMultiChoiceAlt, {
      componentID: myFirstId,
      text: "test me",
      isProductionState: false,
    }),
  ],
  [
    myFirstId,
    React.createElement(DynamicMultiChoiceAlt, {
      componentID: myFirstId,
      text: "test me",
      isProductionState: false,
    }),
  ],
];

function ConfirmComponentDeletion(
  componentID: string,
  deletionFunction: () => void
) {
  const [open, setOpen] = useState(true);

  // CHQ: caused the page to break and not load
  // if (open) {
  //   // whether I called the method on thedialog or just as a function
  //   showTheDialog();
  //   thedialog.showTheDialog();
  // }
  // const    [open, setOpen] = useState(false);

  const myFunc = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Dialog</button> */}
      <Dialog id="dialog2" open={open}>
        {/* <Dialog id="dialog2" open={open}> */}
        <p>Are you sure you want to delete the component?</p>
        <button onClick={myFunc} id="confirmBtn" value="default">
          No, nevermind
        </button>
        <button onClick={deletionFunction} id="confirmBtn" value="default">
          Yes, delete
        </button>
      </Dialog>
    </>
  );
}

// Define Redux slices and store
const questionComponentSlice = createSlice({
  name: "questionComponent",
  initialState: {
    deletionId: "",
    modalOpen: false,
    myArr: [],
    dummyVar: "initial value",
    inputText: "",
    dummyVarHelper: 0,
  },
  reducers: {
    addToList: (state, action) => {
      state.myArr.push(action.payload);
    },
    removeFromList: (state, action) => {
      state.myArr = state.myArr.filter((item) => item !== action.payload);
    },
    updateDeletionTarget: (state, action) => {
      state.deletionId = action.payload;
    },
    updateModalDisplaying: (state, action) => {
      state.modalOpen = action.payload;
    },
    toggleModalDisplaying: (state) => {
      state.modalOpen = !state.modalOpen;
    },
    updateDummyVar: (state, action) => {
      state.dummyVar = action.payload;
    },
    updateInputText: (state, action) => {
      state.inputText = action.payload;
    },
    updateDummyVarHelper: (state) => {
      state.dummyVarHelper += 1;
    },
  },
});

export const {
  addToList,
  removeFromList,
  selectDeletionID,
  updateDeletionTarget,
  selectModalOpen,
  updateModalDisplaying,
  toggleModalDisplaying,
  selectMyArr,
  selectDummyVar,
  updateDummyVar,
  selectInputText,
  updateInputText,
  updateDummyVarHelper,
} = questionComponentSlice.actions;

const store = configureStore({
  reducer: {
    questionComponent: questionComponentSlice.reducer,
  },
});

function App() {
  const [count, setCount] = useState(0);
  const [myList, setMyList] = useState(myList4);
  const [myList2, setMyList2] = useState(myList5);
  const [theText, setTheText] = useState("my initial text");
  const dispatch = useDispatch();
  const targetComponentToDelete = useSelector(selectDeletionID);
  const isModalOpen = useSelector(selectModalOpen);
  const myArr = useSelector(selectMyArr);
  const myDummyVar = useSelector(selectDummyVar);
  const myInputText = useSelector(selectInputText);
  const myDummyVarHelper = useSelector(
    (state) => state.questionComponent.dummyVarHelper
  );

  const [modalConfirmText, setModalConfirmText] = useState("Confirm");
  const [modalCancelText, setModalCancelText] = useState("Cancel");

  const [modalConfirmAction, setModalConfirmAction] = useState(() => {});
  const [modalCancelAction, setModalCancelAction] = useState(() => {});

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navigate = useNavigate();

  const addQuestion = () => {
    let newId = randNum();
    const newQuestion = React.createElement(DynamicMultiChoiceAlt, {
      componentID: newId,
      text: "New Question",
      isProductionState: false,
    });
    setMyList((prevList) => [...prevList, newQuestion]);
    setMyList2((prevList) => [...prevList, [newId, newQuestion]]);
    dispatch(addToList(newId));
  };

  const deleteQuestion = (componentIdToDelete: string) => {
    // setMyList(prevList => prevList.filter((item:any) => item.props.componentID != componentIdToDelete));

    setMyList((prevList) =>
      prevList.filter((item: any) => {
        if (item && item.props && item.props.componentID) {
          return item.props.componentID !== componentIdToDelete;
        }
        return true; // Keep items without the relevant property
      })
    );

    setMyList2((prevList) =>
      prevList.filter((item) => item[0] !== componentIdToDelete)
    );
    dispatch(removeFromList(componentIdToDelete));
    dispatch(updateModalDisplaying(false));
  };

  useEffect(() => {
    if (targetComponentToDelete != "") {
      // setModalConfirmAction(() => deleteQuestion(targetComponentToDelete));
      // setModalCancelAction(() => dispatch(updateModalDisplaying(false)));
      // setIsDialogOpen(true);

      setModalConfirmAction(() => {
        deleteQuestion(targetComponentToDelete);
        setIsDialogOpen(false); // Close the dialog
      });

      setModalCancelAction(() => {
        dispatch(updateModalDisplaying(false));
        setIsDialogOpen(false); // Also close on cancel
      });

      setIsDialogOpen(true);
    }
  }, [targetComponentToDelete]);

  const handleConfirm = () => {
    // Perform the deletion here, using targetComponentToDelete
    if (targetComponentToDelete) {
      deleteQuestion(targetComponentToDelete);
    }
    setIsDialogOpen(false); // Close the dialog
  };

  const handleCancel = () => {
    dispatch(updateModalDisplaying(false));
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
          <br />
          <button
            className="formbuttons"
            onClick={() => navigate("/page2")}
            // onClick={() => navigate("/page2")}
          >
            Go to page 2
          </button>
          <br />
          <br />
          <button
            className="formbuttons"
            onClick={() => navigate("/page3")}
            // onClick={() => navigate("/page2")}
          >
            Go to page 3
          </button>
          <p>
            <span className={styles.read_the_docs}>
              Click on the Vite and React logos to learn more
            </span>
          </p>
        </header>
        <div className="form">
          <br />
          <br />
          <button className="formbuttons" onClick={() => setCount(count + 1)}>
            +
          </button>
          <br />
          <br />
          <button className="formbuttons" onClick={() => setCount(count - 1)}>
            -
          </button>
          <p>count is {count}</p>
          <br />
          <br />
          <button className="formbuttons" onClick={addQuestion}>
            Add a question
          </button>
          <br />
          <br />
          <button
            className="formbuttons"
            onClick={() => {
              // setMyList(myList4);
              // setMyList(myList4Alt);
              dispatch(updateDummyVar("hello world"));
            }}
          >
            Reset questions
          </button>

          <p>target component to delete is: {targetComponentToDelete}</p>
          <p>is modal open: {isModalOpen ? "true" : "false"}</p>
          <p>global list of components: {myArr}</p>
          <p>dummy var is: {myDummyVar}</p>
          <p>input text is: {myInputText}</p>
          <p>dummy var helper is: {myDummyVarHelper}</p>
          {/* {myList} */}
          {myList.map((item: any, index) => (
            <div key={index}>{item}</div>
          ))}
          {/* <ConfirmationModal
                                isModalOpen={isDialogOpen}
                                confirmText={modalConfirmText}
                                cancelText={modalCancelText}
                                confirmAction={handleConfirm}
                                cancelAction={handleCancel}/> */}
          <ConfirmationModal
            isModalOpen={isDialogOpen}
            confirmText={modalConfirmText}
            cancelText={modalCancelText}
            confirmAction={modalConfirmAction}
            cancelAction={modalCancelAction}
          />
        </div>
      </div>
    </Provider>
  );
}

export default App;
