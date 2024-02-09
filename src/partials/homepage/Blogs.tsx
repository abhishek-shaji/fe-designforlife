export const Blogs = () => (
  <section className="blog-list-crev section-padding sub-bg">
    <div className="container">
      <div className="sec-head mb-80">
        <h6 className="sub-title main-color mb-25">Our Blog</h6>
        <div className="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 className="fw-600">
            Read Latest <span className="fw-200">News</span>
          </h2>
          <div className="ml-auto">
            <a href="blog-list.html" className="go-more">
              <span className="text">View all posts</span>
              <span className="icon ti-arrow-top-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="item sub-bg2 wow fadeInUp" data-wow-delay=".1s">
        <div className="row">
          <div className="col-lg-3">
            <div className="info md-mb30">
              <div className="d-flex align-items-center">
                <div className="author">
                  <div className="img">
                    <img src="/imgs/blog/author.png" alt="" />
                  </div>
                </div>
                <div className="author-info">
                  <span className="fz-13 opacity-8 mb-5">Posted by</span>
                  <h6 className="fz-18">Olivia Rhye</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cont">
              <h5 className="mb-10 underline">
                <a href="blog-details.html">
                  The Highly Creative UI/UX Workflow from a Silicon Valley.
                </a>
              </h5>
              <div className="tags">
                <a href="blog-classic.html">Design</a>
                <a href="blog-classic.html">Marketing</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-end">
            <div className="ml-auto">
              <span className="date sub-title fz-13 opacity-8 mb-30">
                6 August 2022
              </span>
            </div>
          </div>
        </div>
        <div
          className="background bg-img valign text-center"
          data-background="/imgs/blog/blog1.jpg"
          data-overlay-dark={4}
        >
          <div className="more ontop full-width">
            <a href="blog-details.html">
              <span>
                Read More <i className="fas fa-arrow-right ml-10" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="item wow fadeInUp" data-wow-delay=".3s">
        <div className="row">
          <div className="col-lg-3">
            <div className="info md-mb30">
              <div className="d-flex align-items-center">
                <div className="author">
                  <div className="img">
                    <img src="/imgs/blog/author.png" alt="" />
                  </div>
                </div>
                <div className="author-info">
                  <span className="fz-13 opacity-8 mb-5">Posted by</span>
                  <h6 className="fz-18">Olivia Rhye</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cont">
              <h5 className="mb-10 underline">
                <a href="blog-details.html">
                  Creativo Jóvenes: a Lead Designers UI/UX Core Checklist.
                </a>
              </h5>
              <div className="tags">
                <a href="blog-classic.html">Design</a>
                <a href="blog-classic.html">Marketing</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-end">
            <div className="ml-auto">
              <span className="date sub-title fz-13 opacity-8 mb-30">
                6 August 2022
              </span>
            </div>
          </div>
        </div>
        <div
          className="background bg-img valign text-center"
          data-background="/imgs/blog/blog2.jpg"
          data-overlay-dark={4}
        >
          <div className="more ontop full-width">
            <a href="blog-details.html">
              <span>
                Read More <i className="fas fa-arrow-right ml-10" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="item sub-bg2 wow fadeInUp" data-wow-delay=".5s">
        <div className="row">
          <div className="col-lg-3">
            <div className="info md-mb30">
              <div className="d-flex align-items-center">
                <div className="author">
                  <div className="img">
                    <img src="/imgs/blog/author.png" alt="" />
                  </div>
                </div>
                <div className="author-info">
                  <span className="fz-13 opacity-8 mb-5">Posted by</span>
                  <h6 className="fz-18">Olivia Rhye</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cont">
              <h5 className="mb-10 underline">
                <a href="blog-details.html">
                  Definitive Guide to Make a Daily More Productive Working Flow.
                </a>
              </h5>
              <div className="tags">
                <a href="blog-classic.html">Design</a>
                <a href="blog-classic.html">Marketing</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-end">
            <div className="ml-auto">
              <span className="date sub-title fz-13 opacity-8 mb-30">
                6 August 2022
              </span>
            </div>
          </div>
        </div>
        <div
          className="background bg-img valign text-center"
          data-background="/imgs/blog/blog4.jpg"
          data-overlay-dark={4}
        >
          <div className="more ontop full-width">
            <a href="blog-details.html">
              <span>
                Read More <i className="fas fa-arrow-right ml-10" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
