import Card from '../Card';
import Button from '../Button';
import { trimText } from '../../utils/helper';
import styles from './index.module.scss';
import { useContext, useState } from 'react';
import ShowFormModalContext from '../../context/show-form';

const Product = ({ name, price, description, img }) => {
  const { open } = useContext(ShowFormModalContext);
  return (
    <Card className={styles['product']}>
      <img className={styles['product__img']} src={img} alt={name} />
      <div className={styles['product__details']}>
        <h3 className={`${styles['product__name']} h-m`}>{name}</h3>
        <p className={styles['product__desc']}>{trimText(`${description}`)}</p>
        <p className={styles['product__price']}>{price}</p>
        <Button className={styles['product__btn']} onClick={() => open(+price)}>
          Buy Now
        </Button>
      </div>
    </Card>
  );
};

export default Product;
