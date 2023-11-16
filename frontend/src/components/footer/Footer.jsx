import styles from "./footer.module.css";
import facebook from "../../assets/icons8-facebook-30.png";
import instagram from "../../assets/icons8-instagram-30.png";
import twitterx from "../../assets/icons8-twitterx-30.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <div className={styles.columnOne}>
          <h2>LINKS</h2>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>
      </div>
      <section className={styles.columnTwo}>
        <h2>© Pokekwack Industry</h2>
        <p>12, Rue de la Kwak, 75005 cedex Paris</p>
        <img src={facebook} className={styles.netWork} alt="facebook logo" />
        <img src={instagram} className={styles.netWork} alt="instagram logo" />
        <img src={twitterx} className={styles.netWork} alt="X logo" />
      </section>
    </footer>
  );
}
export default Footer;
