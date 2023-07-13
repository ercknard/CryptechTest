const Footer = () => (
  <>
    <footer className="main-footer">
      <h3 className="for-footer">CT</h3>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a
            title="CT YouTube"
            className="social-icon__link"
            href="https://www.youtube.com/@CryptechTest-tx3zb"
          >
            <ion-icon name="logo-youtube" />
          </a>
        </li>
        <li className="social-icon__item">
          <a
            title="CT Twitter"
            className="social-icon__link"
            href="https://twitter.com/CryptechCraft"
          >
            <ion-icon name="logo-twitter" />
          </a>
        </li>
        <li className="social-icon__item">
          <a
            title="CT Discord"
            className="social-icon__link"
            href="https://discord.gg/YDCSGp8h5V"
          >
            <ion-icon name="logo-discord" />
          </a>
        </li>
        <li className="social-icon__item">
          <a
            title="CT Github"
            className="social-icon__link"
            href="https://github.com/CryptechTest"
          >
            <ion-icon name="logo-github" />
          </a>
        </li>
      </ul>
      <h3 className="main-footer-text text-motion-index">
        {" "}
        © 2023 CryptechTest SMP Server | CryptechTest.
      </h3>
    </footer>
  </>
);

export default Footer;
