import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("/");
  }

  return (
    <>
      <div className="backdrop" onClick={closeHandler} />
      <dialog open>{children}</dialog>
    </>
  );
}

export default Modal;
