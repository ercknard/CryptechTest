const Footer = () => (
  <>
    <footer className="main-footer">
      <h3 className="for-footer">CT</h3>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a title="Facebook" className="social-icon__link" href="#">
            <ion-icon name="logo-facebook" />
          </a>
        </li>
        <li className="social-icon__item">
          <a
            title="Twitter"
            className="social-icon__link"
            href="https://twitter.com/CryptechCraft"
          >
            <ion-icon name="logo-twitter" />
          </a>
        </li>
        <li className="social-icon__item">
          <a
            title="Discord"
            className="social-icon__link"
            href="https://discord.com/invite/WxvrzzPFAH"
          >
            <ion-icon name="logo-discord" />
          </a>
        </li>
        <li className="social-icon__item">
          <a
            title="Instagram"
            className="social-icon__link"
            href="https://github.com/CryptechTest"
          >
            <ion-icon name="logo-github" />
          </a>
        </li>
      </ul>
      <h3 className="main-footer-text text-motion-index">
        {" "}
        © 2023 CryptechTest SMP Server | All rights reserved.
      </h3>
    </footer>
  </>
);

export default Footer;
