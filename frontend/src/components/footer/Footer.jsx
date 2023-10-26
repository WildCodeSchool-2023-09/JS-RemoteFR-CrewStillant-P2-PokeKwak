import styles from "./footer.module.css";
import facebook from "../../assets/icons8-facebook-30.png";
import instagram from "../../assets/icons8-instagram-30.png";
import twitterx from "../../assets/icons8-twitterx-30.png";

function Footer() {
  return (
    <footer>
      <section>
        <h2>LINKS</h2>
        <div className={styles.columnOne}>
          <h3>About</h3>
          <h3>Services</h3>
          <h3>Contact</h3>
          <h3>Blog</h3>
        </div>
      </section>
      <section className={styles.columnTwo}>
        <h2>CONTACT</h2>
        <p>12, Rue de la Kwak, 75005 cedex Paris</p>
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={twitterx} alt="X logo" />
      </section>
    </footer>
  );
}
export default Footer;
