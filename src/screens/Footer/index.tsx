import React from "react";
import styles from "./footer.module.scss";
import { IMAGES } from "../../assets";

const Footer = () => {
  return (
    <div className={styles.footercontent}>
      <footer className={styles.footers}>
        <div style={{ width: "30%" }}>
          <h1>Shopping</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            consequuntur quis voluptatibus nisi numquam vel tempore quia quasi
            alias non inventore aspernatur pariatur sapiente maxime, culpa aut
            distinctio exercitationem corrupti.
          </p>

          <div className="socials">
            <a href="#">
              <img src={IMAGES.FACEBOOK_ICON} alt="fb" />
            </a>
            <a href="#">
              <img src={IMAGES.INSTRAGRAM_ICON} alt="fb" />
            </a>
            <a href="#">
              <img src={IMAGES.TWITTER_ICON} alt="fb" />
            </a>
            <a href="#">
              <img src={IMAGES.YOUTUBE_ICON} alt="fb" />
            </a>
          </div>
        </div>

        <div>
          <h2>Get to Know Us</h2>

          <p>
            <a href="#"> About us</a>
          </p>

          <p>
            <a href="#"> Careers</a>
          </p>

          <p>
            {" "}
            <a href="#"> Press Releases</a>
          </p>

          <p>
            {" "}
            <a href="#"> Corporate Infoormation</a>
          </p>
        </div>
        <div>
          <h2>Help</h2>

          <p>
            <a href="#"> Payments</a>
          </p>

          <p>
            <a href="#"> Shipping</a>
          </p>

          <p>
            {" "}
            <a href="#"> Cancellation & Returns</a>
          </p>

          <p>
            {" "}
            <a href="#"> FAQ</a>
          </p>

          <p>
            <a href="#"> Report Infringement</a>
          </p>
        </div>
        <div>
          <h2>Address</h2>

          <p>
            <a href="#"> 127, Westwoood Lane </a>
          </p>

          <p>
            <a href="#"> DA15 9PS, Sidcup</a>
          </p>

          <p>
            {" "}
            <a href="#"> London</a>
          </p>

          <p>
            {" "}
            <a href="#"> United kingdom</a>
          </p>
        </div>
      </footer>
      <div className={styles.footerbottom} style={{ textAlign: "center" }}>
        <p>All Riight reserved by &copy; conceptiial 2024</p>
      </div>
    </div>
  );
};

export default Footer;
