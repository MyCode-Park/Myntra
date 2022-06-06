import React from "react";
import "./Footer.css";
import Original from "../../assets/Footer/Original.png";
import Return from "../../assets/Footer/30DaysReturn.png";
import GPlay from "../../assets/Footer/GPlay.png";
import AppStore from "../../assets/Footer/AppStore.png";



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import 'font-awesome/css/font-awesome.min.css';

function Footer() {

  const onlineShoppingList = [
    "Men",
    "Women",
    "Kids",
    "Home & Living",
    "Beauty",
    "Gift Cards",
    "Myntra Insider",
  ];

  const useFulLinksList = [
    "Contact Us",
    "FAQ",
    "T&C",
    "Terms Of Use",
    "Track Orders",
    "Shipping",
    "Cancellation",
    "Returns",
    "Whitehat",
    " Blog",
    "Careers",
    "Privacy Policy",
    "Site Map",
    "Corporate Information",
  ];

  const keepInTouchList = [
    "fa-brands fa-facebook-square",
    "fa-brands fa-twitter",
    "fa-brands fa-youtube",
    "fa-brands fa-instagram",
  ];
  return (
    <div>
      <>
        <footer className="footer">
          <div className="footer--container">
            <div className="footer--row">
              <div className="footer--col">
                <h4 className="footer--title">Online Shopping</h4>
                <ul>
                  {onlineShoppingList.map((title) => (
                    <li>{title}</li>
                  ))}
                </ul>
              </div>
              <div className="footer--col">
                <h4 className="footer--title">Useful links</h4>
                <ul>
                  {useFulLinksList.map((title) => (
                    <li>{title}</li>
                  ))}
                </ul>
              </div>
              <div className="col-split">
                <div className="footer--col">
                  <div>
                    <h4 className="footer--title">
                      Experience myntra app on mobile
                    </h4>
                    <div className="footer--subTitle-link">
                      <img
                        src={GPlay}
                        alt=""
                        className="footer--android-link"
                      />
                      <img src={AppStore} alt="" className="footer--IOS-link" />
                    </div>
                  </div>
                </div>
                <div className="footer--col">
                  <h4 className="footer--title">Keep in touch</h4>
                  <div className="footer--subTitle">
                    {keepInTouchList.map((icons) => (
                      <a>
                        <i class={icons}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="footer--col footer--stamps">
                <div className="footer--stamps-ideal">
                  <img className="desktop-original" src={Original} alt="" />
                  <p>
                    <strong>100% ORIGINAL</strong> guarantee for all products at
                    myntra.com
                  </p>
                </div>
                <div className="footer--stamps-ideal">
                  <img className="desktop-return" src={Return} alt="" />
                  <p>
                    <strong>Return within 30days</strong> of receiving your order
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Footer;
