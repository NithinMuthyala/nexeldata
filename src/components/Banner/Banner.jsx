import styles from "./Banner.module.css";

const Banner = ({ name = "Test" }) => {
  const image = "/images/Banners.jpg";
  return (
    <div className={styles.bannerWrapper}>
      <div
        className={styles.bannerContainer}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;