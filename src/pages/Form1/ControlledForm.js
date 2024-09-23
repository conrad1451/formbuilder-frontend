import React, { useState } from 'react';

function ControlledForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    // no "submit event" param needed above ^
    sendInputValueToApi(value).then(() =>  
        // alert("YOU GOT IT DUDE")
    console.log("YOU GOT IT DUDE"))
  };

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />   
      <button onClick={handleSubmit}>Send</button>
    </>)
}

export default ControlledForm;
