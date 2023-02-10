import { useState } from "react";
import Modal from "./Modal";

interface ButtonModalToggleProps {
  children: any;
  form: any;
  modalExtraButton?: any;
  submitFormModalEvent?: any;
}

export default function ButtonModalToggle(props: ButtonModalToggleProps) {
  const [modalOn, setModalOn] = useState(false);

  const clicked = () => setModalOn(true);

  return (
    <>
      <button
        type="button"
        className={`
                text-white bg-violet-400 hover:bg-violet-800 
                focus:outline-none focus:ring-4 focus:ring-violet-300
                font-medium rounded-full text-sm px-5 py-2.5 text-center
            `}
        onClick={clicked}
      >
        {props.children}
      </button>

      {modalOn && (
        <Modal
          setModalOn={setModalOn}
          form={props.form}
          modalExtraButton={props.modalExtraButton}
          submitFormModalEvent={props.submitFormModalEvent}
        />
      )}
    </>
  );
}
