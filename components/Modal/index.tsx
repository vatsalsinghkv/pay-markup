import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';
import styles from './index.module.scss';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

const Modal = ({ onClose, children, className }: Props) => {
  return createPortal(
    <>
      <div className={styles['overlay']} onClick={onClose}></div>
      <div className={`${styles.modal} ${className ? className : ''}`}>
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
