import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';
import styles from './index.module.scss';

const Modal = ({ onClose, children, className, isOpen }) => {
  if (!isOpen) return <></>;

  return createPortal(
    <>
      <div className={styles['overlay']} onClick={onClose}></div>
      <div className={`modal ${className}`}>
        <button className={styles['modal__close']} onClick={onClose}>
          <ImCross />
        </button>
        {children}
      </div>
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
