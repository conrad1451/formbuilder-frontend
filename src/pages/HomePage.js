 // import Dialog from "./MyDialog";
import Dialog from "../modules/MyDialog";

import logo from '../logo.svg';
import '../App.css';
// import 'axios';
// import Axios from 'axios';
import axios from 'axios';

 

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
    // const    [open, setOpen] = useState(false);
  
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


  // https://stackoverflow.com/questions/36517173/how-to-store-a-javascript-function-in-json
  // CHQ: this failed when I tried it
//  let myObj = {"function":{"arguments":"a,b,c","body":"return a*b+c;"}};

//  let theParse = JSON.parse(myObj);

// let myF = new Function(theParse.function.arguments, theParse.function.body);
function HomePage() { 

  return (
    <div className="App"> 
      <FormModal3 />
      <div className='Button-section leftside'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Form sssQuestion Types
        </p>

        <p>{"myF()"}</p>
 
        <div className="bottomSideBar">
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            Help
            </a>
            <button className='formbuttons' onClick={apiCall}>Logout</button>
        </div>
        

      </div>
      <div className='rightside'>

      <img src={logo} className="App-logo" alt="logo" />
        <button onClick={apiCall}>Make API call</button>
        <p>
            Make a New Form
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        <div>        
        <form id="form3" method="POST" action="/index/signup">
        {/* <form id="form2" method="dialog"> */}
            {/* <form method="dialog" action=""> */}
            <br />
            <label htmlFor="fname">Username: </label>
            {/* <br /> */}
            <input
              className="formFields --nameField"
              type="text"
              id="username"
              name="username"
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
            <label htmlFor="DOB">Password:</label>
            <input
              className="formFields --nameField"
              type="password"
              id="password"
              name="password"
              // placeholder="john.doe@gmail.com"
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


        </div>



      </div>
    </div>
  );
}

export default HomePage;
