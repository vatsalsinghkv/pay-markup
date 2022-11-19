import Card from '../Card';
import Button from '../Button';
import { trimText } from '../../utils/helper';
import { useContext } from 'react';
import ShowFormModalContext from '../../context/show-form';
import styles from './index.module.scss';

const Product = ({ name, price, description, img }) => {
  const { open } = useContext(ShowFormModalContext);
  return (
    <Card className={styles['product']}>
      <img className={styles['product__img']} src={img} alt={name} />
      <div className={styles['product__details']}>
        <h3 className={`${styles['product__name']} h-m`}>{name}</h3>
        <p className={styles['product__desc']}>{trimText(`${description}`)}</p>
        <footer className={styles['product__footer']}>
          <p className={styles['product__price']}>{price} sol</p>
          <Button className={styles['product__btn']} onClick={() => open(+price)}>
            Buy Now
          </Button>
        </footer>
      </div>
    </Card>
  );
};

export default Product;
