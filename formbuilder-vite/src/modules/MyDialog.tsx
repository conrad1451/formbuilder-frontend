import React, { useRef, useEffect } from "react";

// @ts-ignore
function Dialog({ children, open }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (open) {
        // CHQ: ignoring errors
        // @ts-ignore
        dialogRef.current.showModal();
      } else {
        // CHQ: ignoring errors
        // @ts-ignore
        dialogRef.current.close();
      }
    }
  }, [open]);

  return <dialog ref={dialogRef}>{children}</dialog>;
}

export default Dialog;