import styles from './index.module.scss';

const Hero = () => {
  return (
    <section className={styles['hero']}>
      <h1 className="h-xl">Never Pay More, Not A Penny More!</h1>
      <h2 className={`${styles['hero__sub-heading']} h-s`}>Buy when price drops, track price drops with UnPrice!</h2>
    </section>
  );
};

export default Hero;
