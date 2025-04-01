// this is for giving editabletextmodule title the same ability to recieve callback 
// functions and then call them, as smalltextfieldAlt can

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