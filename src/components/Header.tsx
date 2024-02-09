import Head from "next/head";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bord blur">
        <div className="container">
          <a className="logo icon-img-100" href="#">
            <img src="/imgs/logo-light.png" alt="logo" />
          </a>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Home</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="home-main.html">
                    Main Home
                  </a>
                  <a className="dropdown-item" href="home-startup-onepage.html">
                    Modern Startup
                  </a>
                  <a className="dropdown-item" href="home-creative-agency.html">
                    Creative Agency
                  </a>
                  <a className="dropdown-item" href="home-modern-agency.html">
                    Modern Agency
                  </a>
                  <a
                    className="dropdown-item"
                    href="home-creative-portfolio.html"
                  >
                    Creative Portfolio
                  </a>
                  <a className="dropdown-item" href="home-digital-agency.html">
                    Digital Agency
                  </a>
                  <a className="dropdown-item" href="home-freelancer.html">
                    Freelancer
                  </a>
                  <a className="dropdown-item" href="home-personal-vcard.html">
                    Personal vCard
                  </a>
                  <a
                    className="dropdown-item"
                    href="home-minimal-portfolio.html"
                  >
                    Minimal Portfolio
                  </a>
                  <a
                    className="dropdown-item"
                    href="home-asymmetric-portfolio.html"
                  >
                    Asymmetric Portfolio
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Portfolio</span>
                </a>
                <div className="dropdown-menu mega-menu">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="clumn mb-80">
                          <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Portfolio Type
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="portfolio-standard.html"
                              >
                                Standerd
                              </a>
                              <a
                                className="dropdown-item"
                                href="portfolio-gallery.html"
                              >
                                Gallery
                              </a>
                              <a
                                className="dropdown-item"
                                href="portfolio-metro.html"
                              >
                                Metro
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="portfolio-masonry.html"
                              >
                                Masonry
                              </a>
                              <a
                                className="dropdown-item"
                                href="portfolio-caption-cursor.html"
                              >
                                Caption Cursor
                              </a>
                              <a
                                className="dropdown-item"
                                href="portfolio-outline.html"
                              >
                                Outline
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="portfolio-parallax.html"
                              >
                                Parallax
                              </a>
                              <a
                                className="dropdown-item"
                                href="portfolio-sticky.html"
                              >
                                Sticky
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="clumn">
                          <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Showcases
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="showcase-fullscreen.html"
                              >
                                Parallax Slider
                              </a>
                              <a
                                className="dropdown-item"
                                href="showcase-carousel.html"
                              >
                                Showcase Carousel
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="showcase-half-slider.html"
                              >
                                Creative Slider
                              </a>
                              <a
                                className="dropdown-item"
                                href="showcase-interactive-full.html"
                              >
                                Interactive Full
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="showcase-interactive-center.html"
                              >
                                Interactive Center
                              </a>
                              <a
                                className="dropdown-item"
                                href="showcase-interactive-vertical.html"
                              >
                                Interactive Vertical
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="clumn">
                          <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Portfolio Single
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                              <a className="dropdown-item" href="project1.html">
                                project1
                              </a>
                              <a className="dropdown-item" href="project2.html">
                                project2
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a className="dropdown-item" href="project3.html">
                                project3
                              </a>
                              <a className="dropdown-item" href="project4.html">
                                project4
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a className="dropdown-item" href="project5.html">
                                project5
                              </a>
                              <a className="dropdown-item" href="project6.html">
                                project6
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Pages</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a href="#0">
                      About Us <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="page-about.html">
                          About Us 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-about2.html">
                          About Us 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-about3.html">
                          About Us 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <a href="#0">
                      Services <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="page-services.html">
                          Services 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-services2.html">
                          Services 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="page-services-details.html"
                        >
                          Services Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <a href="#0">
                      Contact Us{" "}
                      <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="page-contact.html">
                          Contact Us 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-contact2.html">
                          Contact Us 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="page-contact3.html">
                          Contact Us 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="page-team.html">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="page-team-single.html">
                      Team Details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="page-FAQS.html">
                      FAQS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="page-error404.html">
                      Error 404
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Blogs</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="blog-classic.html">
                    Blog Standerd
                  </a>
                  <a className="dropdown-item" href="blog-list.html">
                    Blog List
                  </a>
                  <a className="dropdown-item" href="blog-list2.html">
                    Blog List 2
                  </a>
                  <a className="dropdown-item" href="blog-details.html">
                    Blog Details
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="page-contact.html">
                  <span className="rolling-text">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="search-form">
            <div className="form-group">
              <input type="text" name="search" placeholder="Search" />
              <button>
                <span className="pe-7s-search"></span>
              </button>
            </div>
            <div className="search-icon">
              <span className="pe-7s-search open-search"></span>
              <span className="pe-7s-close close-search"></span>
            </div>
          </div>
          <div className="topnav">
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>
      <div className="hamenu">
        <div className="logo icon-img-100">
          <img src="/imgs/logo-light.png" alt="" />
        </div>
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Home">
                          Home
                        </span>{" "}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a href="home-main.html" className="sub-link">
                            Main Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-startup-onepage.html"
                            className="sub-link"
                          >
                            Modern Startup
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-creative-agency.html"
                            className="sub-link"
                          >
                            Creative Agency
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-modern-agency.html"
                            className="sub-link"
                          >
                            Modern Agency
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-creative-portfolio.html"
                            className="sub-link"
                          >
                            Creative Portfolio
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-digital-agency.html"
                            className="sub-link"
                          >
                            Digital Agency
                          </a>
                        </li>
                        <li>
                          <a href="home-freelancer.html" className="sub-link">
                            Freelancer
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-personal-vcard.html"
                            className="sub-link"
                          >
                            Personal vCard
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-minimal-portfolio.html"
                            className="sub-link"
                          >
                            Minimal Portfolio
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-asymmetric-portfolio.html"
                            className="sub-link"
                          >
                            Asymmetric Portfolio
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Pages">
                          Pages
                        </span>{" "}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu no-bord">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="About Us">
                                About Us
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="page-about.html" className="sub-link">
                                  About Us v1
                                </a>
                              </li>
                              <li>
                                <a href="page-about2.html" className="sub-link">
                                  About Us v2
                                </a>
                              </li>
                              <li>
                                <a href="page-about3.html" className="sub-link">
                                  About Us v3
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Services">
                                Services
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="page-services.html"
                                  className="sub-link"
                                >
                                  Services v1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="page-services2.html"
                                  className="sub-link"
                                >
                                  Services v2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="page-services-details.html"
                                  className="sub-link"
                                >
                                  Services Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Contact">
                                Contact
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="page-contact.html"
                                  className="sub-link"
                                >
                                  Contact v1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="page-contact2.html"
                                  className="sub-link"
                                >
                                  Contact v2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="page-contact3.html"
                                  className="sub-link"
                                >
                                  Contact v3
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Team">
                                Team
                              </span>{" "}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="page-team.html" className="sub-link">
                                  Our Team
                                </a>
                              </li>
                              <li>
                                <a
                                  href="page-team-single.html"
                                  className="sub-link"
                                >
                                  Team Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Others">
                                Others
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="page-FAQS.html" className="sub-link">
                                  FAQS
                                </a>
                              </li>
                              <li>
                                <a
                                  href="page-error404.html"
                                  className="sub-link"
                                >
                                  Error 404
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Portfolio">
                          Portfolio
                        </span>{" "}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu no-bord">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span
                                className="fill-text"
                                data-text="Portfolio Type"
                              >
                                Portfolio Type
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="portfolio-standard.html"
                                  className="sub-link"
                                >
                                  Standerd
                                </a>
                              </li>
                              <li>
                                <a
                                  href="portfolio-gallery.html"
                                  className="sub-link"
                                >
                                  Gallery
                                </a>
                              </li>
                              <li>
                                <a
                                  href="portfolio-metro.html"
                                  className="sub-link"
                                >
                                  Metro
                                </a>
                              </li>
                              <li>
                                <a
                                  href="portfolio-masonry.html"
                                  className="sub-link"
                                >
                                  Masonry
                                </a>
                              </li>
                              <li>
                                <a
                                  href="portfolio-caption-cursor.html"
                                  className="sub-link"
                                >
                                  Caption Cursor
                                </a>
                              </li>
                              <li>
                                <a
                                  href="portfolio-outline.html"
                                  className="sub-link"
                                >
                                  Outline
                                </a>
                              </li>
                              <li>
                                <a
                                  href="portfolio-parallax.html"
                                  className="sub-link"
                                >
                                  Parallax
                                </a>
                              </li>
                              <li>
                                <a
                                  href="portfolio-sticky.html"
                                  className="sub-link"
                                >
                                  Sticky
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Showcases">
                                Showcases
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="showcase-fullscreen.html"
                                  className="sub-link"
                                >
                                  Parallax Slider
                                </a>
                              </li>
                              <li>
                                <a
                                  href="showcase-carousel.html"
                                  className="sub-link"
                                >
                                  Showcase Carousel
                                </a>
                              </li>
                              <li>
                                <a
                                  href="showcase-half-slider.html"
                                  className="sub-link"
                                >
                                  Creative Slider
                                </a>
                              </li>
                              <li>
                                <a
                                  href="showcase-interactive-full.html"
                                  className="sub-link"
                                >
                                  Interactive Full
                                </a>
                              </li>
                              <li>
                                <a
                                  href="showcase-interactive-center.html"
                                  className="sub-link"
                                >
                                  Interactive Center
                                </a>
                              </li>
                              <li>
                                <a
                                  href="showcase-interactive-vertical.html"
                                  className="sub-link"
                                >
                                  Interactive Vertical
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span
                                className="fill-text"
                                data-text="Portfolio Single"
                              >
                                Portfolio Single
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="project1.html" className="sub-link">
                                  project1
                                </a>
                              </li>
                              <li>
                                <a href="project2.html" className="sub-link">
                                  project2
                                </a>
                              </li>
                              <li>
                                <a href="project3.html" className="sub-link">
                                  project3
                                </a>
                              </li>
                              <li>
                                <a href="project4.html" className="sub-link">
                                  project4
                                </a>
                              </li>
                              <li>
                                <a href="project5.html" className="sub-link">
                                  project5
                                </a>
                              </li>
                              <li>
                                <a href="project6.html" className="sub-link">
                                  project6
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Blogs">
                          Blogs
                        </span>{" "}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a className="sub-link" href="blog-classic.html">
                            Standard
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="blog-list.html">
                            Blog List
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="blog-list2.html">
                            Blog List 2
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="blog-details.html">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a href="page-contact3.html" className="link">
                        <span className="fill-text" data-text="Contact Us">
                          Contact Us
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    541 Melville Geek, <br /> Palo Alto, CA 94301
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Facebook</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5>
                    <a href="#0">Hello@email.com</a>
                  </h5>
                  <h5 className="underline mt-10">
                    <a href="#0">+1 840 841 25 69</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Header };
