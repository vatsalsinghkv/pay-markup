import Product from '../../components/Product';
import products from '../../utils/products';
import styles from './index.module.scss';

const Products = () => {
  return (
    <section id="products" className={styles['products']}>
      {products.map(({ name, img, id, description, price }) => (
        <Product key={id} name={name} description={description} price={price} img={img} />
      ))}
    </section>
  );
};

export default Products;
