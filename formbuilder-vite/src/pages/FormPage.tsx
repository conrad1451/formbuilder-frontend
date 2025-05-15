// import React, { useState, useRef, useEffect } from "react";
// import { useSelector, useDispatch, Provider } from "react-redux";

import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

// Import styles
// import styles from "../features/counter/Counter.module.css";
import "../App.css";

// Import components
import Dialog from "../modules/MyDialog";
import logo from "../logo.svg";

// Define interfaces
// interface IDeleteHandler {
//   onWorkDone(): void;
//   onError(message: string): void;
// }

// interface DynamicComponentProps {
//   text: string;
//   isProductionState: boolean;
//   // captureState?: any;
// }

interface DynamicComponentPropsAlt {
  componentID: string;
  text?: string;
  isProductionState?: boolean;
  // captureState?: object;
}

// interface DynamicFITB {
//   text: string;
//   textSnippets: [];
//   isFillInTheBlank: [];
// }

// interface DynamicTF {
//   text: string;
//   isProductionState: boolean;
// }

interface DynamicMCProps {
  optionID: string;
  text: string;
  checkedCondition: boolean;
  hasEditorOpened: boolean;
}

// Confirmation Modal Component
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
  return (
    <>
      <Dialog open={isModalOpen}>
        <form id="form2" method="dialog">
          <br />
          <label htmlFor="fname">Are you sure?: </label>
          <br />
          <br />
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
        </form>
      </Dialog>
    </>
  );
}

// Dynamic Component Creation Function
// const createDynamicComponent2 = (
//   component: React.ComponentType<any>,
//   props?: any
// ) => {
//   return props
//     ? React.createElement(component, props)
//     : React.createElement(component);
// };

// Utility function to generate random IDs
const randNum = () => {
  return Math.random()
    .toString(36)
    .substring(2, 2 + 20);
};

// Dynamic Components

// const DynamicTextEntry: React.FC<DynamicComponentProps> = () => {
// const DynamicTextEntry: React.FC<DynamicComponentProps> = ({ text }) => {
const DynamicTextEntry: React.FC<DynamicComponentPropsAlt> = ({
  componentID,
  text,
  isProductionState,
  // captureState,
}) => {
  // const [field, setField] = useState("");
  const myCompID = componentID;

  return (
    <>
      <EditableTextModule
        myText={String(text)}
        isEditing={!isProductionState}
        theFontSize={"p"}
      />
      <p>{isProductionState ? "" : "component ID: " + myCompID}</p>

      {/* <label>
        <br />
        <input
          type="textarea"
          aria-label="text entry"
          value={field}
          onChange={(e) => setField(e.target.value)}
          size={10}
          aria-multiline="true"
          maxLength={280}
        />
      </label>
      <br /> */}
    </>
  );
};

const DynamicShortAnswer: React.FC<DynamicComponentPropsAlt> = ({
  componentID,
  text,
  isProductionState,
  // captureState,
}) => {
  const [field, setField] = useState("");
  // const [myCompID, setMyCompID] = useState(componentID);
  const myCompID = componentID;

  return (
    <>
      <div className="multichoiceBlock">
        <div>
          <EditableTextModule
            myText={String(text)}
            isEditing={!isProductionState}
            theFontSize={"p"}
          />
          <br />
          <label>
            {" "}
            <input
              type="textarea"
              value={field}
              onChange={(e) => setField(e.target.value)}
              size={50}
              aria-multiline="true"
              maxLength={280}
            />
          </label>
        </div>
        <p>{isProductionState ? "" : "component ID: " + myCompID}</p>
      </div>
      <br />
      <br />
    </>
  );
};

const DynamicLongAnswer: React.FC<DynamicComponentPropsAlt> = ({
  componentID,
  text,
  isProductionState,
  // captureState,
}) => {
  const [field, setField] = useState("");
  // const [myCompID, setMyCompID] = useState(componentID);
  const myCompID = componentID;

  return (
    <>
      <div className="multichoiceBlock">
        <EditableTextModule
          myText={String(text)}
          isEditing={!isProductionState}
          theFontSize={"p"}
        />
        <br />
        <label>
          {" "}
          <input
            type="textarea"
            value={field}
            onChange={(e) => setField(e.target.value)}
            size={50}
            aria-multiline="true"
            maxLength={560}
          />
        </label>
        <br />
        <p>{isProductionState ? "" : "component ID: " + myCompID}</p>
      </div>
      <br />
    </>
  );
};

const DynamicTrueFalse: React.FC<DynamicComponentPropsAlt> = ({
  componentID,
  text,
  isProductionState,
  // captureState,
}) => {
  const [truth, setTruth] = useState(false);
  // const [myCompID, setMyCompID] = useState(componentID);
  const myCompID = componentID;

  return (
    <>
      <div className="multichoiceBlock">
        <EditableTextModule
          myText={String(text)}
          isEditing={!isProductionState}
          theFontSize={"p"}
        />
        <br />
        <label>
          True
          <input type="radio" checked={truth} onChange={() => setTruth(true)} />
        </label>
        <br />

        <label>
          False
          <input
            type="radio"
            checked={!truth}
            onChange={() => setTruth(false)}
          />
        </label>
        <br />
        <p>{isProductionState ? "" : "component ID: " + myCompID}</p>
      </div>
      <br />
    </>
  );
};

// function SmallTextField({ isVisible }: { isVisible: boolean }) {
//   const [field, setField] = useState("");

//   return (
//     <div className="testMe">
//       <label>
//         <input
//           type={isVisible ? "textarea" : "hidden"}
//           value={field}
//           onChange={(e) => setField(e.target.value)}
//           size={10}
//           aria-multiline="true"
//           maxLength={280}
//         />
//       </label>
//     </div>
//   );
// }

// function SmallTextFieldAlt({
//   isVisible,
//   thisText,
//   setThisText,
// }: {
//   isVisible: boolean;
//   thisText: string;
//   setThisText: (text: string) => void;
// }) {
//   return (
//     <div className="testMe">
//       <h1 className="hasBorder1" contentEditable={isVisible}>
//         {" "}
//         {thisText}{" "}
//       </h1>
//     </div>
//   );
// }

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
    default:
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
}

function EditableTextModule({
  myText,
  isEditing,
  theFontSize,
}: {
  myText: string;
  isEditing: boolean;
  theFontSize: string;
}) {
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
    default:
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
}

const DynamicMutliChoiceOption: React.FC<DynamicMCProps> = ({
  optionID,
  text,
  checkedCondition,
  hasEditorOpened,
}) => {
  const [hasEditorOpen, setHasEditorOpen] = useState(hasEditorOpened);
  const [truth, setTruth] = useState(checkedCondition);

  return (
    <div className="multiChoiceOptionContainer">
      <input type="radio" checked={truth} onChange={() => setTruth(!truth)} />

      <div className="buttontitlesize">
        <EditableTextModule
          myText={String(text)}
          isEditing={hasEditorOpen}
          theFontSize={"h6"}
        />
      </div>

      <button
        className="editbuttonsmultichoice"
        id="some-inner-answer"
        onClick={() => {
          setHasEditorOpen(!hasEditorOpen);
        }}
      >
        {hasEditorOpen ? "Save Changes" : "Edit Option"}
      </button>
    </div>
  );
};

const DynamicMultiChoiceAlt: React.FC<DynamicComponentPropsAlt> = ({
  componentID,
  text,
  isProductionState,
  // captureState,
}) => {
  // const [myCompID, setMyCompID] = useState(componentID);
  const myCompID = componentID;

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

  const [optionList, setOptionList] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const newOptionList = optionIDList.map((optionID, index) =>
      React.createElement(DynamicMutliChoiceOption, {
        optionID: optionID,
        text: `Option ${index + 1}`,
        checkedCondition: isCheckedList[index],
        hasEditorOpened: !isProductionState,
      })
    );
    setOptionList(newOptionList);
  }, [optionIDList, isCheckedList]);

  const addOption = () => {
    const newOptionId = randNum();
    setOptionIDList([...optionIDList, newOptionId]);
    setIsCheckedList([...isCheckedList, false]);
  };

  const removeOption = () => {
    if (optionIDList.length > 1) {
      setOptionIDList(optionIDList.slice(0, -1));
      setIsCheckedList(isCheckedList.slice(0, -1));
    }
  };

  return (
    <>
      <div>
        <div>
          <br />
          <div className="componentWidth">
            <EditableTextModule
              myText={String(text)}
              isEditing={!isProductionState}
              theFontSize={"h3"}
            />

            <ul>
              {optionList.map((mcOption, index) => (
                <li key={optionIDList[index]}>{mcOption}</li>
              ))}
            </ul>
          </div>
          <br />
        </div>
        <div>
          <button id="some-inner-answer" onClick={addOption}>
            Add Option (+)
          </button>
          <button id="some-inner-answer" onClick={removeOption}>
            Remove Option (-)
          </button>
        </div>
      </div>
      <p>{isProductionState ? "" : "component ID: " + myCompID}</p>

      <br />
      <br />
    </>
  );
};

// Redux setup
const globalVarSlice = createSlice({
  name: "globalVar",
  initialState: { globalVar: 0, globalVar2: "" },
  reducers: {
    updateGlobalVar: (state, action) => {
      state.globalVar = action.payload;
    },
    updateGlobalVar2: (state, action) => {
      state.globalVar2 = action.payload;
    },
  },
});

export const { updateGlobalVar, updateGlobalVar2 } = globalVarSlice.actions;

const store = configureStore({
  reducer: {
    globalVar: globalVarSlice.reducer,
  },
});

// Main FormPage Component
const FormPage = () => {
  const [myList, setMyList] = useState<React.ReactNode[]>([]);
  const [isProduction, setIsProduction] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState({
    confirm: "confirm",
    cancel: "cancel",
  });
  const [modalActions, setModalActions] = useState({
    confirm: () => console.log("confirm"),
    cancel: () => setShowModal(false),
  });
  const [formName, setFormName] = useState("My Form");
  const [formDescription, setFormDescription] = useState(
    "Description of My Form"
  );

  const [formField, setFormField] = useState<React.ReactNode[]>([]);

  const navigate = useNavigate();

  const addShortAnswer = () => {
    const newComponent = React.createElement(DynamicShortAnswer, {
      componentID: randNum(),
      text: "Short Answer Question",
      isProductionState: isProduction,
    });
    setMyList([...myList, newComponent]);
  };

  const addLongAnswer = () => {
    const newComponent = React.createElement(DynamicLongAnswer, {
      componentID: randNum(),
      text: "Long Answer Question",
      isProductionState: isProduction,
    });
    setMyList([...myList, newComponent]);
  };

  const addTrueFalse = () => {
    const newComponent = React.createElement(DynamicTrueFalse, {
      componentID: randNum(),
      text: "True/False Question",
      isProductionState: isProduction,
    });
    setMyList([...myList, newComponent]);
  };

  const addMultiChoiceAlt = () => {
    const newComponent = React.createElement(DynamicMultiChoiceAlt, {
      componentID: randNum(),
      text: "Multiple Choice Question",
      isProductionState: isProduction,
    });
    setMyList([...myList, newComponent]);
  };

  const addTextEntry = () => {
    const newComponent = React.createElement(DynamicTextEntry, {
      text: "Text Entry Question",
      isProductionState: isProduction,
    });
    setMyList([...myList, newComponent]);
  };

  const addHeader = () => {
    setMyList([...myList, <h1 className="hasBorder1">New Header</h1>]);
  };

  const addParagraph = () => {
    setMyList([...myList, <p className="hasBorder1">New Paragraph</p>]);
  };

  const addImage = () => {
    setMyList([
      ...myList,
      <img
        className="hasBorder1"
        src={logo}
        alt="Logo"
        width="100"
        height="100"
      />,
    ]);
  };

  const addVideo = () => {
    setMyList([
      ...myList,
      <video className="hasBorder1" width="320" height="240" controls>
        <source src="mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>,
    ]);
  };

  const addLineBreak = () => {
    setMyList([...myList, <br className="hasBorder1" />]);
  };

  const addPageBreak = () => {
    setMyList([...myList, <hr className="hasBorder1" />]);
  };

  const submitTheForm = () => {
    setShowModal(true);
    setModalText({ confirm: "Submit", cancel: "Cancel" });
    setModalActions({
      confirm: () => {
        console.log("Form Submitted!");
        setShowModal(false);
        navigate("/");
      },
      cancel: () => setShowModal(false),
    });
  };

  const saveTheForm = () => {
    setShowModal(true);
    setModalText({ confirm: "Save", cancel: "Cancel" });
    setModalActions({
      confirm: () => {
        console.log("Form Saved!");
        setShowModal(false);
        navigate("/");
      },
      cancel: () => setShowModal(false),
    });
  };

  // CHQ: commented out for later oonce I replace fragile cloneElement with more robust render prop
  // https://react.dev/reference/react/cloneElement#alternatives
  // useEffect(() => {
  //   const updatedList = myList.map((item) => {
  //     // Check if the item is a React element and has the type of one of your dynamic components
  //     if (React.isValidElement(item)) {
  //       if (
  //         item.type === DynamicShortAnswer ||
  //         item.type === DynamicLongAnswer ||
  //         item.type === DynamicTrueFalse ||
  //         item.type === DynamicMultiChoiceAlt
  //         //  || item.type === DynamicTextEntry // Add other relevant dynamic components
  //       ) {
  //         // Clone the element with the updated isProductionState prop
  //         return React.cloneElement(item, { isProductionState: isProduction });
  //       }
  //     }
  //     return item; // If it's not a dynamic component we care about, keep it as is
  //   });
  //   setMyList(updatedList);
  // }, [isProduction, myList]); // Re-run this effect whenever isProduction or myList changes

  return (
    <>
      <div className="left-part"> </div>
      <>
        <div className="container">
          <Provider store={store}>
            <div className="left-div">
              {/* Left div content can go here */}
              <>
                {!isProduction && (
                  <div
                    className="toolbox"
                    style={{ width: "200px", marginLeft: "4vw" }}
                  >
                    <h2>Toolbox</h2>
                    <button
                      className="formtoolboxbuttons"
                      onClick={addShortAnswer}
                    >
                      Add Short Answer
                    </button>
                    <button
                      className="formtoolboxbuttons"
                      onClick={addLongAnswer}
                    >
                      Add Long Answer
                    </button>
                    <button
                      className="formtoolboxbuttons"
                      onClick={addTrueFalse}
                    >
                      Add True/False
                    </button>
                    <button
                      className="formtoolboxbuttons"
                      onClick={addMultiChoiceAlt}
                    >
                      Add Multiple Choice
                    </button>
                    <button
                      className="formtoolboxbuttons"
                      onClick={addTextEntry}
                    >
                      Add Text Entry
                    </button>
                    <button className="formtoolboxbuttons" onClick={addHeader}>
                      Add Header
                    </button>
                    <button
                      className="formtoolboxbuttons"
                      onClick={addParagraph}
                    >
                      Add Paragraph
                    </button>
                    <button className="formtoolboxbuttons" onClick={addImage}>
                      Add Image
                    </button>
                    <button className="formtoolboxbuttons" onClick={addVideo}>
                      Add Video
                    </button>
                    <button
                      className="formtoolboxbuttons"
                      onClick={addLineBreak}
                    >
                      Add Line Break
                    </button>
                    <button
                      className="formtoolboxbuttons"
                      onClick={addPageBreak}
                    >
                      Add Page Break
                    </button>
                  </div>
                )}
              </>
            </div>

            <div className="right-div">
              {/* Right div content can go here */}
              <div className="App">
                <header className="App-header">
                  <EditableTextModuleTitle
                    myText={formName}
                    setMyText={setFormName}
                    isEditing={!isProduction}
                    theFontSize={"h1"}
                  />
                  <EditableTextModuleTitle
                    myText={formDescription}
                    setMyText={setFormDescription}
                    isEditing={!isProduction}
                    theFontSize={"p"}
                  />
                  <br />
                  <br />

                  <div>
                    <button
                      classname="formstatebuttons"
                      onClick={() => setIsProduction(!isProduction)}
                    >
                      {isProduction ? "Edit Form" : "View Form"}
                    </button>
                    <button
                      className="formstatebuttons"
                      onClick={submitTheForm}
                    >
                      Submit Form
                    </button>
                    <button className="formstatebuttons" onClick={saveTheForm}>
                      Save Form
                    </button>
                  </div>
                </header>

                <ConfirmationModal
                  isModalOpen={showModal}
                  confirmText={modalText.confirm}
                  cancelText={modalText.cancel}
                  confirmAction={modalActions.confirm}
                  cancelAction={modalActions.cancel}
                />
                <div style={{ display: "flex" }}>
                  <div className="formSection" style={{ flex: 1 }}>
                    {myList.map((item, index) => item)}
                  </div>
                </div>
              </div>
            </div>
          </Provider>
        </div>
      </>
    </>
  );
};

export default FormPage;
