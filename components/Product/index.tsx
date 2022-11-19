import Card from '../Card';
import Button from '../Button';
import { trimText } from '../../utils/helper';
import styles from './index.module.scss';
import { useState } from 'react';
import { SendSolForm } from '../SendSolForm';

const Product = ({ name, price, description, img }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Card className={styles['product']}>
      <img className={styles['product__img']} src={img} alt={name} />
      <div className={styles['product__details']}>
        <h3 className={`${styles['product__name']} h-m`}>{name}</h3>
        <p className={styles['product__desc']}>{trimText(`${description}`)}</p>
        <p className={styles['product__price']}>{price}</p>
        <Button className={styles['product__btn']} onClick={() => setClicked(true)}>
          Buy Now
        </Button>
        {clicked && <SendSolForm />}
      </div>
    </Card>
  );
};

export default Product;
