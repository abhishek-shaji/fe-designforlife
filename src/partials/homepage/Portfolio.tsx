export function Portfolio() {
  return (
    <section className="portfolio-carsouel section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Portfolio</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              Our featured <span className="fw-200">projects</span>
            </h2>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left" />
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="work-swiper-auto"
          data-carousel="swiper"
          data-space={30}
        >
          <div
            id="content-carousel-container-unq-work"
            className="swiper-container"
            data-swiper="container"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="item">
                  <div className="img">
                    <img src="/imgs/works/1/1.jpg" alt="" />
                  </div>
                  <div className="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom">
                    <div>
                      <h5>Nice guy with a smile</h5>
                      <p>Graphic Designing</p>
                    </div>
                    <div className="ml-auto">
                      <a href="project1.html" className="rmore">
                        <img
                          src="/imgs/arrow-right.png"
                          alt=""
                          className="icon-img-20"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="item">
                  <div className="img">
                    <img src="/imgs/works/1/2.jpg" alt="" />
                  </div>
                  <div className="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom">
                    <div>
                      <h5>Nice guy with a smile</h5>
                      <p>Graphic Designing</p>
                    </div>
                    <div className="ml-auto">
                      <a href="project2.html" className="rmore">
                        <img
                          src="/imgs/arrow-right.png"
                          alt=""
                          className="icon-img-20"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="item">
                  <div className="img">
                    <img src="/imgs/works/1/3.jpg" alt="" />
                  </div>
                  <div className="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom">
                    <div>
                      <h5>Nice guy with a smile</h5>
                      <p>Graphic Designing</p>
                    </div>
                    <div className="ml-auto">
                      <a href="project3.html" className="rmore">
                        <img
                          src="/imgs/arrow-right.png"
                          alt=""
                          className="icon-img-20"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="item">
                  <div className="img">
                    <img src="/imgs/works/1/4.jpg" alt="" />
                  </div>
                  <div className="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom">
                    <div>
                      <h5>Nice guy with a smile</h5>
                      <p>Graphic Designing</p>
                    </div>
                    <div className="ml-auto">
                      <a href="#0" className="rmore">
                        <img
                          src="/imgs/arrow-right.png"
                          alt=""
                          className="icon-img-20"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
