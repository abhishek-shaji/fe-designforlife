export const Footer = () => (
  <footer
    className="clean-footer crev bg-img"
    data-background="/imgs/header/bg1.jpg"
    data-overlay-dark={10}
  >
    <div className="container pb-40 section-padding ontop">
      <div className="cal-action pb-50 mb-80 bord-thin-bottom">
        <h2 className="fz-120 line-height-1 d-rotate wow">
          <span className="rotate-text">
            <a href="page-contact3.html">
              Let’s Contact <span className="ml-30 fz-70 ti-arrow-top-right" />
            </a>
          </span>
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="logo icon-img-100">
            <img src="/imgs/logo-light.png" alt="" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="column">
            <div className="mb-40">
              <h6 className="sub-title mb-30">Address</h6>
              <h5 className="opacity-8">
                5919 Trussville <br /> Crossings Pkwy, Birmingham
              </h5>
            </div>
            <a href="#0" className="underline">
              <span className="fz-22 main-color">+2 456 (343) 24 45</span>
            </a>
          </div>
        </div>
        <div className="col-lg-2 offset-lg-1">
          <div className="column">
            <h6 className="sub-title mb-30">Useful Links</h6>
            <ul className="rest fz-14">
              <li className="mb-15">
                <a href="page-about.html">About</a>
              </li>
              <li className="mb-15">
                <a href="page-services.html">Services</a>
              </li>
              <li className="mb-15">
                <a href="blog-list2.html">Blog</a>
              </li>
              <li>
                <a href="page-contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="column">
            <h6 className="sub-title mb-30">Support</h6>
            <ul className="rest fz-14">
              <li className="mb-15">
                <a href="page-FAQS.html">FAQS</a>
              </li>
              <li className="mb-15">
                <a href="page-about.html">Term &amp; Conditions</a>
              </li>
              <li className="mb-15">
                <a href="page-about.html">Privacy policy</a>
              </li>
              <li>
                <a href="page-about.html">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center pt-30 pb-30 mt-80 bord-thin-top">
        <div>
          <ul className="rest d-flex align-items-center">
            <li className="hover-this cursor-pointer">
              <a href="#0" className="hover-anim">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="hover-this cursor-pointer ml-30">
              <a href="#0" className="hover-anim">
                <i className="fab fa-dribbble" />
              </a>
            </li>
            <li className="hover-this cursor-pointer ml-30">
              <a href="#0" className="hover-anim">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li className="hover-this cursor-pointer ml-30">
              <a href="#0" className="hover-anim">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <p className="fz-14">
            © 2023 InFolio is Proudly Powered by{" "}
            <span className="underline main-color">
              <a href="https://themeforest.net/user/ui-themez" target="_blank">
                UI-ThemeZ
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
