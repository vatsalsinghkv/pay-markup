import styles from './index.module.scss';

const Hero = () => {
  return (
    <section className={styles['hero']}>
      <h1 className="h-xl">Crypto Can Buy Anything!</h1>
      <h2 className={`${styles['hero__sub-heading']} h-s`}>Revolutionizing the method of payment</h2>
    </section>
  );
};

export default Hero;
