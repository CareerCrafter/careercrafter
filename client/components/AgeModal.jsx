// import { separateOperations } from "graphql";
import React from "react";

export default function AgeModal({ open, setOpen }) {
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <dialog className="agemodal">
          Are you 21?
          <div className="buttons">
            <button onClick={() => closeModal()}>yes</button>
            <button>no</button>
          </div>
        </dialog>
      )}
    </>
  );
}
