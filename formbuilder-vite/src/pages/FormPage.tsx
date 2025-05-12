import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// import {
//   updatingID,
//   selectCompIDToDelete,
//   updatingID2,
//   addToDeletList,
//   removeFromDeletList,
//   selectCompIDToDelete2,
//   updateArr,
//   selectArr,
//   } from '../features/counter/deleteComponentSlice';

// import {
//   addToList,
//   removeFromList,
//   selectDeletionID,
//   updateDeletionTarget,
//   selectModalOpen,
//   updateModalDisplaying,
//   toggleModalDisplaying,
//   selectMyArr,
//   selectDummyVar,
//   updateDummyVar,
//   selectInputText,
//   updateInputText,
//   updateDummyVarHelper,
//   } from '../features/counter/questionComponentSlice.js';

// import styles from "./Counter.module.css";
import styles from "../features/counter/Counter.module.css";

import { useNavigate } from "react-router-dom";

// import Dialog from "./MyDialog";
import Dialog from "../modules/MyDialog";

import logo from "../logo.svg";
import "../App.css";
// import 'axios';
// import Axios from 'axios';
//  import axios from 'axios';

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
//  theType: React.createElement(DynamicShortAnswer, { text: "test me", isProductionState: false})
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
  //  // whether I called the method on thedialog or just as a function
  //  showTheDialog();
  //  thedialog.showTheDialog();
  // }
  // const    [open, setOpen] = useState(false);

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
//    axios.get('http://localhost:5000').then((data) => {
//      // this console.log will be in our frontend console
//      console.log(data)
//    })
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
          //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
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
              //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
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
  //  const DynamicLongAnswer: React.FC<DynamicComponentProps> = ({ text, isProductionState, captureState }) => {
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
            //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
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

  //  const DynamicTrueFalse: React.FC<DynamicTF> = ({ text, isProductionState }) => {
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
          //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
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
      type =    "textarea"
      value={thisText}
      onChange={e => setThisText(e.target.value) }
      size={10}
      // contentEditable="true"
      aria-multiline="true"
      maxLength={280}
      /> */}
      {/* </label>  */}
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

//  [ZA]

// const DynamicMultiChoice: React.FC<DynamicComponentProps> = ({ text, isProductionState, captureState }) => {
//  // const DynamicTrueFalse: React.FC<{}> = () => {
//  //    const [truth, setTruth] = useState(false);
//  //    const [theChoice, setTheChoice] = useState("");
//    // [AU] [AJ]
//  let myListing = [
//    React.createElement(DynamicMutliChoiceOption, { text: 'Option 1', checkedCondition: true, hasEditorOpened: false})
//    ,React.createElement(DynamicMutliChoiceOption, { text: 'Option 2', checkedCondition: false, hasEditorOpened: false})
//    ,React.createElement(DynamicMutliChoiceOption, { text: 'Option 3', checkedCondition: true, hasEditorOpened: false})
//    ,React.createElement(DynamicMutliChoiceOption, { text: 'Option 4', checkedCondition: false, hasEditorOpened: false})
//  ];
//  const [optionList, setOptionList] = useState(myListing);

//    return (
//    <>
//    <div>
//      <div>
//        <br />
//        <div className="componentWidth">
//        {/* <div > */}
//        <EditableTextModule myText={text} isEditing={true} theFontSize={"h3"}/>

//        {/*CHQ: This lists the list elements (components) side by side - we dont wan't that  */}
//        {/* <div>{optionList}</div> */}

//        <ul>
//          {optionList.map((mcOption) => { return (<li>{mcOption}</li>) })}
//        </ul>
//        </div>
//        <br />
//      </div>
//    <div>
//    {/* <button className='formbuttons' id="some-inner-answer" */}
//    <button id="some-inner-answer"
//        onClick={() =>
//          // @ts-ignore comment
//          setOptionList((optionList) =>
//            optionList.concat(
//              React.createElement(DynamicMutliChoiceOption, { text: 'another option', checkedCondition: false, hasEditorOpened: false})
//            )
//          )
//        }
//      >
//        Add Option (+)
//      </button>
//      <button id="some-inner-answer"
//        onClick={() =>{
//          // [ZB]
//          setOptionList(optionList.slice(0, -1))} }
//      >
//        Remove Option (-)
//      </button>
//    </div>

//    </div>

//    <br />
//    <br />
//  </>);
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
  //    const [truth, setTruth] = useState(false);
  //    const [theChoice, setTheChoice] = useState("");
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

  //  let myListing = [
  //    React.createElement(DynamicMutliChoiceOption, { optionID: "", text: 'Option 1', checkedCondition: true, hasEditorOpened: false})
  //    ,React.createElement(DynamicMutliChoiceOption, { optionID: "", text: 'Option 2', checkedCondition: false, hasEditorOpened: false})
  //    ,React.createElement(DynamicMutliChoiceOption, { optionID: "", text: 'Option 3', checkedCondition: true, hasEditorOpened: false})
  //    ,React.createElement(DynamicMutliChoiceOption, { optionID: "", text: 'Option 4', checkedCondition: false, hasEditorOpened: false})
  //  ];

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
              {/* <br/>  */}
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
                  //  makeWorkerCallback2(componentID)
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
                  //  makeWorkerCallback2(componentID)
                }
              >
                Remove Question (-)
              </button>

              {/*CHQ: This lists the list elements (components) side by side - we dont wan't that  */}
              {/* <div>{optionList}</div> */}

              <ul className={showContent ? "displayList" : "hideList"}>
                {optionList.map((mcOption: any) => {
                  return <li key={mcOption.props.optionID}>{mcOption}</li>;
                })}
              </ul>
            </div>
            {/* <br /> */}
          </div>

          {/* <br/>      <br/>      <br/> */}

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

      {/*CHQ: Following line breaks provide spacing between multiple choice components  */}
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
                segmentList.concat(
                  // React.createElement(SmallTextField, { isVisible: true})
                  React.createElement(EditableTextModule, {
                    myText: "another segment",
                    isEditing: true,
                  })
                )
              )
            }
          >
            Add Segment (+)
          </button>
          <button
            id="some-inner-answer"
            onClick={() => {
              // [ZB]
              setSegmentList(segmentList.slice(0, -1));
            }}
          >
            Remove Segment (-)
          </button>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

//  [AM]
const makeMeParagraph = (text: string) => {
  return <p>{text}</p>;
};
const makeMeH1 = (text: string) => {
  return <h1>{text}</h1>;
};
const makeMeH2 = (text: string) => {
  return <h2>{text}</h2>;
};
const makeMeH3 = (text: string) => {
  return <h3>{text}</h3>;
};
const makeMeH4 = (text: string) => {
  return <h4>{text}</h4>;
};
const makeMeH5 = (text: string) => {
  return <h5>{text}</h5>;
};
const makeMeH6 = (text: string) => {
  return <h6>{text}</h6>;
};

// const makeMeComponent = (componentName, text) => {
//  switch (componentName) {
//    case "paragraph":
//      return makeMeParagraph(text);
//    case "h1":
//      return makeMeH1(text);
//    case "h2":
//      return makeMeH2(text);
//    case "h3":
//      return makeMeH3(text);
//    case "h4":
//      return makeMeH4(text);
//    case "h5":
//      return makeMeH5(text);
//    case "h6":
//      return makeMeH6(text);
//    default:
//      return null;
//  }
// };

// const makeMeComponent = (componentName, text) => {
//  const componentMapping = {
//    paragraph: makeMeParagraph,
//    h1: makeMeH1,
//    h2: makeMeH2,
//    h3: makeMeH3,
//    h4: makeMeH4,
//    h5: makeMeH5,
//    h6: makeMeH6,
//  };

//  const componentFunction = componentMapping[componentName];
//  return componentFunction ? componentFunction(text) : null;
// };

const makeMeComponent = (componentName: string, text: string) => {
  const componentMapping: { [key: string]: (text: string) => JSX.Element } = {
    paragraph: makeMeParagraph,
    h1: makeMeH1,
    h2: makeMeH2,
    h3: makeMeH3,
    h4: makeMeH4,
    h5: makeMeH5,
    h6: makeMeH6,
  };

  const componentFunction = componentMapping[componentName];
  return componentFunction ? componentFunction(text) : null;
};

const thedialog = new Dialog();

// CHQ: the following global variables are here for debugging purposes
let global_var1 = "I am the global var";
let global_var2 = 2;
let global_var3 = [1, 2, 3];

// CHQ: following 3 lines added to fix "could not find react-redux context value" error
const store = configureStore({
  reducer: {},
});

function App() {
  const [myList, setMyList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("default text");
  const [modalConfirmText, setModalConfirmText] = useState("confirm");
  const [modalCancelText, setModalCancelText] = useState("cancel");
  const [modalConfirmAction, setModalConfirmAction] = useState(() => {
    console.log("default confirm action");
  });
  const [modalCancelAction, setModalCancelAction] = useState(() => {
    console.log("default cancel action");
  });

  const [inputText, setInputText] = useState("");

  const [showContent, setShowContent] = useState(true);

  const [theText, setTheText] = useState("default text");

  // const [myArr, setMyArr] = useState([]);

  const [myDummyVar, setMyDummyVar] = useState("initial value");

  const [deletionTarget, setDeletionTarget] = useState("");

  const [isModalDisplaying, setIsModalDisplaying] = useState(false);

  const [myArr, setMyArr] = useState<string[]>([]);
  const [compIDToDelete, setCompIDToDelete] = useState("");

  const [compIDToDelete2, setCompIDToDelete2] = useState("");

  const [updatingID, setUpdatingID] = useState("");

  const [updatingID2, setUpdatingID2] = useState("");

  const [myInputText, setMyInputText] = useState("");

  const [myDummyVarHelper, setMyDummyVarHelper] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const globalVar = useSelector(selectGlobalVar);
  const deletionID = useSelector(selectDeletionID);
  const modalOpenSelector = useSelector(selectModalOpen);

  const myArrSelector = useSelector(selectMyArr);
  const dummyVarSelector = useSelector(selectDummyVar);
  const inputTextSelector = useSelector(selectInputText);

  // const compIDToDeleteSelector = useSelector(selectCompIDToDelete);
  const compIDToDeleteSelector2 = useSelector(selectCompIDToDelete2);
  const arrSelector = useSelector(selectArr);

  const [globalVar, setGlobalVar] = useState("global var 1");

  // CHQ: adding a new global state variable
  const [globalVar2, setGlobalVar2] = useState("global var 2");

  const questionComponentSlice = createSlice({
    name: "questionComponent",
    initialState: {
      deletionID: "",
      modalOpen: false,
      myArr: [],
      dummyVar: "initial value",
      inputText: "",
    },
    reducers: {
      updateDeletionTarget: (state, action) => {
        state.deletionID = action.payload;
      },
      updateModalDisplaying: (state, action) => {
        state.modalOpen = action.payload;
      },
      toggleModalDisplaying: (state) => {
        state.modalOpen = !state.modalOpen;
      },
      addToList: (state, action) => {
        state.myArr.push(action.payload);
      },
      removeFromList: (state, action) => {
        // [ZB]
        state.myArr.splice(
          state.myArr.findIndex((v) => v === action.payload),
          1
        );
      },
      updateDummyVar: (state, action) => {
        state.dummyVar = action.payload;
      },
      updateInputText: (state, action) => {
        state.inputText = action.payload;
      },
    },
  });

  const deleteComponentSlice = createSlice({
    name: "deleteComponent",
    initialState: {
      compIDToDelete: "",
      compIDToDelete2: "",
      arr: [],
      updatingID: "",
      updatingID2: "",
    },
    reducers: {
      updatingID: (state) => {
        state.updatingID = "some new id";
      },
      updatingID2: (state) => {
        state.updatingID2 = "some even newer id";
      },
      addToDeletList: (state, action) => {
        state.arr.push(action.payload);
      },
      removeFromDeletList: (state, action) => {
        // [ZB]
        state.arr.splice(
          state.arr.findIndex((v) => v === action.payload),
          1
        );
      },
      updateArr: (state) => {
        state.arr.push("some new element in array");
      },
      selectCompIDToDelete: (state, action) => {
        state.compIDToDelete = action.payload;
      },
      selectCompIDToDelete2: (state, action) => {
        state.compIDToDelete2 = action.payload;
      },
    },
  });

  const globalVarSlice = createSlice({
    name: "globalVar",
    initialState: {
      globalVar: "initial global var value",
      globalVar2: "initial global var 2 value",
    },
    reducers: {
      updateGlobalVar: (state, action) => {
        state.globalVar = action.payload;
      },
      updateGlobalVar2: (state, action) => {
        state.globalVar2 = action.payload;
      },
    },
  });

  // export const {
  //  updatingID,
  //  selectCompIDToDelete,
  //  updatingID2,
  //  addToDeletList,
  //  removeFromDeletList,
  //  selectCompIDToDelete2,
  //  updateArr,
  //  selectArr,
  // } = deleteComponentSlice.actions;

  // export const {
  //  addToList,
  //  removeFromList,
  //  selectDeletionID,
  //  updateDeletionTarget,
  //  selectModalOpen,
  //  updateModalDisplaying,
  //  toggleModalDisplaying,
  //  selectMyArr,
  //  selectDummyVar,
  //  updateDummyVar,
  //  selectInputText,
  //  updateInputText,
  //  updateDummyVarHelper,
  //  } = questionComponentSlice.actions;

  export const { updateGlobalVar, updateGlobalVar2 } = globalVarSlice.actions;

  const store = configureStore({
    reducer: {
      questionComponent: questionComponentSlice.reducer,
      deleteComponent: deleteComponentSlice.reducer,
      globalVar: globalVarSlice.reducer,
    },
  });

  const {
    updatingID,
    addToDeletList,
    removeFromDeletList,
    updateArr,
    selectArr,
  } = deleteComponentSlice.actions;

  const {
    addToList,
    removeFromList,
    updateDeletionTarget,
    updateModalDisplaying,
    toggleModalDisplaying,
    selectMyArr,
    updateDummyVar,
    updateInputText,
  } = questionComponentSlice.actions;

  const { selectGlobalVar } = globalVarSlice.actions;

  // const DeleteComponent = (targetQuestion) => {}

  const addMeToList = (text: string) => {
    dispatch(addToList(text));
  };
  const removeMeFromList = (text: string) => {
    dispatch(removeFromList(text));
  };
  const updateMeDeletionTarget = (text: string) => {
    dispatch(updateDeletionTarget(text));
  };
  const updateMeModalDisplaying = (bool: boolean) => {
    dispatch(updateModalDisplaying(bool));
  };
  const toggleMeModalDisplaying = () => {
    dispatch(toggleModalDisplaying());
  };
  const updateMeDummyVar = (text: string) => {
    dispatch(updateDummyVar(text));
  };
  const updateMeInputText = (text: string) => {
    dispatch(updateInputText(text));
  };

  const updateMeGlobalVar = (text: string) => {
    dispatch(updateGlobalVar(text));
  };
  const updateMeGlobalVar2 = (text: string) => {
    dispatch(updateGlobalVar2(text));
  };

  const addMeToDeletList = (text: string) => {
    dispatch(addToDeletList(text));
  };
  const removeMeFromDeletList = (text: string) => {
    dispatch(removeFromDeletList(text));
  };
  const updateMeArr = () => {
    dispatch(updateArr());
  };
  const updateMeUpdatingID = () => {
    dispatch(updatingID());
  };

  // const DeleteComponent = (targetQuestion) => {}

  // CHQ: following 2 functions added to fix "could not find react-redux context value" error
  const ConnectedApp = () => <AppContent />;
  const AppContent = () => {
    return (
      <>
        {/* All your components that use Redux should be inside the Provider */}
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <Counter /> */}
            {/* <ConfirmationModal
            isModalOpen={modalOpen}
            confirmText={modalConfirmText}
            cancelText={modalCancelText}
            confirmAction={modalConfirmAction}
            cancelAction={modalCancelAction}
          /> */}
            {/* <Dialog id="dialog1" open={true}>
            <form method="dialog">
              <label>
                Favorite animal:
                <select>
                  <option>Cats</option>
                  <option>Dogs</option>
                  <option>Hamsters</option>
                </select>
              </label>
              <p>
                <button>Confirm</button>
                <button>Cancel</button>
              </p>
            </form>
          </Dialog> */}
            {/* <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Counter />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <span className="App-link"
                
              >
                Learn React
              </span>
            </header>
          </div> */}
            {/* <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          </header>
        </div>
      </>
    );
  };

  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}

export default App;
