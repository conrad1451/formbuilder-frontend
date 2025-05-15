// import React, { useRef, useEffect } from "react";
import { useRef, useEffect } from "react";

function Dialog(props: { children: string; open: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (props.open) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [props.open]);

  return <dialog ref={dialogRef}>{props.children}</dialog>;
}

export default Dialog;
