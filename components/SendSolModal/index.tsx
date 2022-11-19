import React, { useContext } from 'react';
import Modal from '../Modal';
import ShowFormModalContext from '../../context/show-form';
import { SendSolForm } from '../SendSolForm';
import styles from './index.module.scss';
import { WALLET_ADDRESS } from '../../utils/config';

const SendSolModule = ({ price }: { price: number }) => {
  const { show, close } = useContext(ShowFormModalContext);

  return (
    show && (
      <Modal className={styles['modal']} onClose={close}>
        <h1>Trying</h1>
        <SendSolForm price={price} address={WALLET_ADDRESS} />
      </Modal>
    )
  );
};

export default SendSolModule;
