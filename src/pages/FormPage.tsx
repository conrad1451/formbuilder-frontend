/* Sources:

[AP]: https://medium.com/@gecno/creating-dynamic-components-in-react-with-typescript-f965bc8cd5fd 

[AR]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role

[AV]: https://react.dev/reference/react/memo#updating-a-memoized-component-using-state

[AU]: https://www.pluralsight.com/resources/blog/guides/how-to-use-radio-buttons-in-reactjs

[BA]: https://stackoverflow.com/questions/47616355/foreach-in-react-jsx-does-not-output-any-html

[VB]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

[AW]: https://react.dev/learn/passing-props-to-a-component

[ZA]: https://daily.dev/blog/pop-and-push-in-javascript-array-essentials

 [ZB]: https://react.dev/learn/updating-arrays-in-state#removing-from-an-array

[AT]: https://www.w3schools.com/jsref/prop_style_visibility.asp

[AS]: https://learn.shayhowe.com/html-css/positioning-content/#inline-block

*/
// 
//
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

interface DynamicMCProps {
  text: string;
  checkedCondition: boolean;
  checkedFunction: Function;
  // checkedFunction: function;
    // checkedFunction: function name(params:type) {
    
  // }
}

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
  

 const DynamicShortAnswer: React.FC<DynamicComponentProps> = ({ text }) => {
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
      size={50}
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

// [AV]

 const DynamicLongAnswer: React.FC<DynamicComponentProps> = ({ text }) => {
  // const DynamicLongAnswer: React.FC<{}> = () => {
    const [field, setField] = useState('');
    
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
      size={50}
      // contentEditable="true"
      aria-multiline="true"
      //   Property 'rows' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'.ts(2322)
      // rows={10}
      maxLength={560} 
      />
    </label> 
    <br />
    </>
  );
};

 const DynamicTrueFalse: React.FC<DynamicComponentProps> = ({ text }) => {
  // const DynamicTrueFalse: React.FC<{}> = () => {
    const [truth, setTruth] = useState(false);
    // [AU]
  return (
    <>
      <>{text}</>
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
    <br />
    <br />
    
    </>
  );
};

//[AW]:  
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

// CHQ: this functional component acts as a wrappeer
function CardWhichIsAWrapperForContent({ children }) {
  return (
    <div className="testThis">
      {children}
    </div>
  );
}

function Parent1({ textPassedToChildToDisplay }) {
  let myArray = [0,1,2,3];

  return (
    // the myArray.forEach(choice => { isn't doing anything
    <div className="testThis">
      {textPassedToChildToDisplay} 
    </div>
  );
}

function Parent2({ urlOfImgPassedToChildToDisplay, myWidth, myHeight }) {
  // let myArray = [0,1,2,3];

  return (
    <img
    className="avatar"
    src={urlOfImgPassedToChildToDisplay}
    alt="Lin Lanying"
    width={myWidth}
    height={myHeight}
  /> 
  );
}

 function Profile() {
  return (
    <CardWhichIsAWrapperForContent>
      <Avatar
      //@ts-ignore
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      
    </CardWhichIsAWrapperForContent>
  );
}

function Avatar2() {
  return (
    // <img
    //   className="avatar"
    //   src="https://i.imgur.com/1bX5QH6.jpg"
    //   alt="Lin Lanying"
    //   width={100}
    //   height={100}
    // />
    <p>bro</p>
  );
}

// [BA]: 

function Card2() {

  let myArray = [0,1,2,3];
 
  myArray.forEach(choice => {
      <p>{choice}</p>
     });

    //  below lines failed
     //@ts-ignore
    //  return ( {
    //        //@ts-ignore
    //   myArray.map((i) => {children})
    // } );

    return( myArray.forEach(choice => {
      <p>{choice}</p>
     }))
}


function Profile2() {
  return (
    // 'Card2' cannot be used as a JSX component.
/**Its type '() => void' is not a valid JSX element type.
    Type '() => void' is not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'. */
    // <Card2/> 

    // <Avatar2/>

    // CHQ: errors below
    // <Parent1>
    //   <p>hihi</p>
    //   <Parent1/>
    <Parent1 textPassedToChildToDisplay={"ddd"}/>
  );    

}


// function AgainThis()
// {
// return(
//    <label>
//   Option 1
//   <input
//   type="radio"  
//   checked={truth} 
//   onChange={e => setTruth(true) }
//   // onClick={setTruth(true)} 
//   />
// </label> );
// }

// function YesThis()
// {
//   const rows = ["dd", "d42d", "dhrd", "drd"];
  
//   // for (let i = 0; i < 4; i++) {
//   //   // note: we are adding a key prop here to allow react to uniquely identify each
//   //   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
//   //   rows.push(<ObjectRow key={i} />);
//   // }
//   // return <tbody>{rows}</tbody>;
// return  <tbody>    {rows.map((object, i) => <AgainThis obj={object} key={i} />)}  </tbody>
// }


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
  {/* <p>dddd</p> */}
    <label>
      {/* {text}{': '} */}
      {/* <br /> */}
      <input 
      type = {isVisible ? "textarea" : "hidden"}
      value={thisText}
      onChange={e => setThisText(e.target.value) }
      size={10}
      // contentEditable="true"
      aria-multiline="true"
      maxLength={280} 
      />
    </label> 
    {/* <br /> */}
    </div>)
}

// function EditableTextModule({ urlOfImgPassedToChildToDisplay, myWidth, myHeight }) {
  // function EditableTextModule({myText}) {
  function EditableTextModule({myText, isEditing}) {
  // let myArray = [0,1,2,3];
  // const [fieldText, setFieldText] = useState(""); 
  // const [isEditing, setIsEditing] = useState(true);

  const [theText, setTheText] = useState("YES");
  const [field, setField] = useState('');
      
  // [AR] // [AT]
  return (
    <>    <div className="multiChoiceOptionSection">
      {/* <text visibility={false ? "visible" : "hidden"}> */}
      {/* <text visibility="hidden"> */}
      <text
      className={!isEditing ? "isNowVisible" : "isNowHidden"}>
        {/* {myText} */}
        {theText}
        {/* </text> <SmallTextField isVisible={!isEditing}/> */}
        {/* </text> <SmallTextFieldAlt isVisible={isEditing}/> */}
        {/* </text> <SmallTextFieldAlt isVisible={isEditing} field={field} setField={setField} /> */}
        </text> <SmallTextFieldAlt isVisible={isEditing} thisText={theText} setThisText={setTheText} />

      {/* </text> <p>dd</p><SmallTextField isVisible={!isEditing}/> */}
    </div> 
    <div className="multiChoiceOptLayout">


    </div>

    </>
  );

  // return (
  //   <img
  //   className="avatar"
  //   src={urlOfImgPassedToChildToDisplay}
  //   alt="Lin Lanying"
  //   width={myWidth}
  //   height={myHeight}
  // /> 
  // );
}

const DynamicMutliChoiceOption: React.FC<DynamicMCProps> = ({ text, checkedCondition, checkedFunction }) => {
    // const [isChecked, setIsChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(checkedCondition);
    const [optionText, setOptionText] = useState(text); 
    const [hasEditorOpen, setHasEditorOpen] = useState(false);
    
    let myListing = [createDynamicComponent2(DynamicTextEntry)];
    const [truth, setTruth] = useState(false);

   
    //  <Parent3 urlOfImgPassedToChildToDisplay={"https://i.imgur.com/1bX5QH6.jpg"} myWidth={50} myHeight={50}/>
  
     const [inputView, setInputView] = useState(myListing);

    
    // if I click on the option and it is not already selected, now it will be selected
    // if I click on the option and it is already selected, it is just selected - indempotent action
  return (
    <>
    <>{text}</>
    {/* <label> 
      sss{inputView}
      {optionText}
      <input
        type="radio"
        checked={isChecked}

        onChange={() => { setIsChecked(true) }}

        // onChange={checkedFunction}
        // onClick={() => { setIsChecked(true) }}


        // onClick={(isChecked) => { setIsChecked(true) }} 
        // onClick={()=> {if(!checkedCondition){checkedCondition = true}}} 
    // onClick={()=> {if(true){alert("33")}}} 
    />
  </label>   */}


    {/* <EditableTextModule myText={"YdddddddddddddddddddddddddddddddddddddES"}/> */}
  <EditableTextModule myText={"YES"} isEditing={hasEditorOpen}/>
  <input
    type="radio"
    checked={truth}
    // onChange={e => setTruth(e.target.value) }
    // onChange={e => setTruth(false) }
    onChange={() => setTruth(!truth) }
    />
   <button id="some-inner-answer"
        onClick={() => { setHasEditorOpen(!hasEditorOpen) }}
       
        // onClick={() =>
        //   // @ts-ignore comment
        //   setTheInnerPlatform((inputView) =>  
        //     setInputView.concat(
        //       createDynamicComponent2(DynamicShortAnswer)
        //     )
        //     // theInnerPlatform.concat(createDynamicComponent2(DynamicLongAnswer)) // was a placeholder
        //   )
        // }
      >
        {hasEditorOpen ? "Save Changes": "Edit Option"}
        
      </button>   

  <br/>
    </>
  );
};


const DynamicMultiChoice: React.FC<DynamicComponentProps> = ({ text }) => {
  // const DynamicTrueFalse: React.FC<{}> = () => {
    const [truth, setTruth] = useState(false);
    const [theChoice, setTheChoice] = useState("");
    // [AU]
 
    let myChoices=["A", "B", "C", "D"];
 
    let theseChoices = ["Option 1", "Option 2", "Option 3", "Option 4"];
 
    let brobro = theseChoices.forEach(choice => {
     <p>{choice}</p>
    });
 
  return (
    <>
    {/* <Profile/> */}
    {/* <Profile2/> */}
    <Parent1 textPassedToChildToDisplay={"more text"}/>
    <Parent2 urlOfImgPassedToChildToDisplay={"https://i.imgur.com/1bX5QH6.jpg"} myWidth={50} myHeight={50}/>
      <>{text}</>
      <label>
      Option 1
      <input
      type="radio"  
      checked={truth} 
      onChange={e => setTruth(true) }
      // onClick={setTruth(true)} 
      />
    </label>  
 
    <br/>
    <label>
      Option 2
      <input
      type="radio"  
      checked={!truth}
      onChange={e => setTruth(false) }
      // onClick={setTruth(true)} 
      />
    </label>  
    <br />
    <label>
      Option 3
      <input
      type="radio"  
      checked={!truth}
      onChange={e => setTruth(false) }
      // onClick={setTruth(true)} 
      />
    </label>  
    <br />
    <label>
      Option 4
      <input
      type="radio"  
      checked={!truth}
      onChange={e => setTruth(false) }
      // onClick={setTruth(true)} 
      />
    </label>  
    <br />
 
    <button onClick={apiCall}>Add more options - feature coming soon</button>
 
    <br />
    <br />
    
    </>
  );
 };
 

//  [ZA]

const DynamicMegaMultiChoice: React.FC<DynamicComponentProps> = ({ text }) => {
 // const DynamicTrueFalse: React.FC<{}> = () => {
   const [truth, setTruth] = useState(false);
   const [theChoice, setTheChoice] = useState("");
   // [AU]

  //  let myListing = [createDynamicComponent2(DynamicMultiChoice, "sss")];
  //  let myListing = [createDynamicComponent2(DynamicMutliChoiceOption, Props={"sss", true})];

  // CHQ: following line works without compiler errors
  let myListing = [createDynamicComponent2(DynamicMutliChoiceOption, { text: 'Option 1', checkedCondition: false})];
  
   
  //  <Parent3 urlOfImgPassedToChildToDisplay={"https://i.imgur.com/1bX5QH6.jpg"} myWidth={50} myHeight={50}/>

   const [theInnerPlatform, setTheInnerPlatform] = useState(myListing);


   let myChoices=["A", "B", "C", "D"];

   let theseChoices = ["Option 1", "Option 2", "Option 3", "Option 4"];

   let brobro = theseChoices.forEach(choice => {
    <p>{choice}</p>
   });
 
   return (
    <>
    <div>
      <div> 
        <br />
        <div>{theInnerPlatform}</div>
        <br />
      </div>
    <div>
   {/* <button className='formbuttons' id="some-inner-answer" */}
    <button id="some-inner-answer"
        onClick={() =>
          // @ts-ignore comment
          setTheInnerPlatform((theInnerPlatform) =>  
            theInnerPlatform.concat(
              createDynamicComponent2(DynamicMutliChoiceOption, { text: 'Option 1', checkedCondition:false })
            )
            // theInnerPlatform.concat(createDynamicComponent2(DynamicLongAnswer)) // was a placeholder
          )
        }
      >
        Add Option (+)
      </button>     
      <button id="some-inner-answer"
        onClick={() =>{
          setTheInnerPlatform(theInnerPlatform.slice(0, -1))
         // @ts-ignore comment


        // [ZB]
        
          // setTheInnerPlatform.filter(theInnerPlatform =>
          //   theInnerPlatform[-1] 
          // )

          // CHQ: bug: removes ALL added elements
          // setTheInnerPlatform((theInnerPlatform) => theInnerPlatform.filter((radioOption, i) => i === -1) )

          // CHQ: bug: does nothing
          // setTheInnerPlatform((theInnerPlatform) => theInnerPlatform.filter((radioOption, i) => radioOption[i] === radioOption[-1]) )

          // setTheInnerPlatform((theInnerPlatform) => 
            
          //   theInnerPlatform.concat(
          //     createDynamicComponent2(DynamicMutliChoiceOption, { text: 'Option 1', checkedCondition: 'false' })
          //   )
          //   // theInnerPlatform.concat(createDynamicComponent2(DynamicLongAnswer)) // was a placeholder
          // )  
        }
        }
      >
        Remove Option (-)
      </button> 
      <p>total number of inner things: {theInnerPlatform.length}</p>

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

 
 let myList3 = [createDynamicComponent2(DynamicShortAnswer, "sss")];
//  let myList3 = [createDynamicComponent2(DynamicShortAnswer)];


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
            thePlatform.concat(createDynamicComponent2(DynamicShortAnswer, "sss"))
          // thePlatform.concat(createDynamicComponent2(DynamicShortAnswer))
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

const App3: React.FC = () => {
  // const [count, setCount] = useState(0);
  // @ts-ignore comment
  //   const [thePlatform, setThePlatform] = [];
  const [thePlatform, setThePlatform] = useState(myList3);
  // const [formArea, setFormArea] = useState(formField);

  
  return (
    <> 
      <div className='Button-section leftside'>
        <button className='formbuttons' onClick={apiCall}>←</button>
        <p> Form Question Types </p>
        <button className='formbuttons' id="short-answer"
        onClick={() =>
          // @ts-ignore comment
          setThePlatform((thePlatform) =>
            thePlatform.concat(createDynamicComponent2(DynamicShortAnswer))
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
            thePlatform.concat(createDynamicComponent2(DynamicLongAnswer))
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
      <br />

      <button className='formbuttons' id="multi-choice"
        onClick={() =>
          // @ts-ignore comment
          // CHQ: the following doesn't work.
          setThePlatform((thePlatform) =>
            thePlatform.concat(
              createDynamicComponent2(DynamicMultiChoice, {
                text: "First component stored in a list",
              })
            )
          )
        }
      >
        Add Multiple choice
      </button>
      <br />

      <button className='formbuttons' id="multi-choice"
        onClick={() =>
          // @ts-ignore comment
          // CHQ: the following doesn't work.
          setThePlatform((thePlatform) =>
            thePlatform.concat(
              createDynamicComponent2(DynamicMegaMultiChoice, {
                text: "First component stored in a list",
              })
            )
          )
        }
      >
        Add Mega Multiple choice
      </button>
      <br />
      
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

             {/* <App2/> */}
             {/* <div>
              <button onClick={() =>
            // @ts-ignore comment
            setThePlatform((thePlatform) =>
              thePlatform.concat(createDynamicComponent2(DynamicShortAnswer))
            )
              }
            >
            Add short answer
            </button>


             </div>  */}
                   <p>total number of questions: {thePlatform.length}</p>

             <div>{thePlatform}</div>

             {/* <p className="listWindow">{JSON.stringify(formArea)}</p>  */}
           </div>
    </>
  ); 
};
// function FormPage2() {
//   return();
// }

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
           <App2/>
           <div className='Button-section leftside'>
           {/* <img src={logo} className="App-logo" alt="logo" /> */}
                 <button className='formbuttons' onClick={apiCall}>←</button>
 
             <p>
                 Form Question Types
             </p>      
             {/* <App2/> */}
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

             <App2/>
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


 function FormPage() {
  // return(<FormPage1/>)
  return(<App3/>)
 }
 
 export default FormPage;
 