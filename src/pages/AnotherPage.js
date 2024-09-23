import { useState } from "react";
import React from "react";
import '../App.css';

// CHQ: I added the imports above

function AnotherPage({ onSubmit }) {
    const [text, setText] = React.useState("")
    return <form onSubmit={e => onSubmit(text)}>
      <input
        onChange={e => setText(e.target.value)}
        value={text}
        placeholder="enter a comment"
      />
      <button
        type="submit"
        disabled={text.length >= 10}
        children="disabled at 10 chars"
      />
      <p>{Math.max(0, 10 - text.length)} characters remaining...</p>
    </form>
  }

  export default AnotherPage;