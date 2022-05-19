import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import "./styles.scss";

function Footer() {
  return (
    <div className="footer__container">
      <section className="footer__subscription">
        <p className="footer__heading">
          Join the UNCOMMON newsletter to receive our best vacation deals!
        </p>
        <p className="footer__text">You can unsubscribe at any time</p>
        <div className="input-areas">
          <form className="footer__email-form">
            <input
              className="footer__input"
              type="email"
              name="email"
              placeholder="Your e-mail"
            ></input>
            <Button btnStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer__links">
        <div className="footer__link-wrapper">
          <div className="footer__link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Terms of service</Link>
          </div>
          <div className="footer__link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer__link-wrapper">
          <div className="footer__link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer__link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media__wrap">
          <div className="footer__logo">
            <Link to="/" className="footer__logo-sign">
              UNCOMMON <i className="fas fa-route" />
            </Link>
          </div>
          <small className="footer__website-rights">UNCOMMON &copy;2022</small>
          <div className="social-media__icons">
            <Link
              className="social-media__icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook f"></i>
            </Link>
            <Link
              className="social-media__icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-media__icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-media__icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-media__icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
