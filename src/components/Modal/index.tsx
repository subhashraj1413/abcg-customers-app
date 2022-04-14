import React, { useEffect, useRef } from "react";

import { Close } from '@styled-icons/material'
import styles from "./modal.module.css";


const Modal = ({ modalStyle, children, show, onClose, backdropStyle }: any) => {
    const modalRef: any = useRef(null);
    useEffect(() => {
        if (show) {
            modalRef.current.classList.add(styles.visible);
        } else {
            modalRef.current.classList.remove(styles.visible);
        }
    }, [show]);
    return (
        <>
            <div ref={modalRef} style={backdropStyle} className={`${styles.modal}`}>
                
                <div style={modalStyle} className={styles.modal__wrap}>
                    <div className={styles.modal__close}>
                    <Close onClick={onClose}
                        size={"32px"}
                        color={"#fff"}
                        className={styles.close__icon}
                    />
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
