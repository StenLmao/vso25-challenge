import { useEffect, useRef } from "react"

const Modal = (props) => {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;

        if (props.open) {
            modal.showModal();
        } else {
            modal.close();
        }

        return () => {
            modal.close();
        };
    }, [props.open]);

    return (
        <dialog ref={dialog} className={props.className}>
            {props.children}
        </dialog>
    );
}

export default Modal;