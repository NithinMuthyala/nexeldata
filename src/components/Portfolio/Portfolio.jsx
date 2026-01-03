



const Portfolio = () => {
    return <section id="portfolio" className="portfolio">
    <div className="container">
      <div className="row text-center mt-5">
        <h1 className="display-3 fw-bold text-capitalize">Latest work</h1>
        <div className="heading-line" />
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro
          temporibus distinctio.
        </p>
      </div>
      {/* FILTER BUTTONS  */}
      <div className="row mt-5 mb-4 g-3 text-center">
        <div className="col-md-12">
          <button className="btn btn-outline-primary" type="button">
            All
          </button>
          <button className="btn btn-outline-primary" type="button">
            websites
          </button>
          <button className="btn btn-outline-primary" type="button">
            design
          </button>
          <button className="btn btn-outline-primary" type="button">
            mockup
          </button>
        </div>
      </div>
      {/* START THE PORTFOLIO ITEMS  */}
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-box shadow">
            <img
              src="images/portfolio/portfolio-1.jpg"
              alt="portfolio 1 image"
              title="portfolio 1 picture"
              className="img-fluid"
            />
            <div className="portfolio-info">
              <div className="caption">
                <h4>project name goes here 1</h4>
                <p>category project</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-box shadow">
            <img
              src="images/portfolio/portfolio-2.jpg"
              alt="portfolio 2 image"
              title="portfolio 2 picture"
              className="img-fluid"
            />
            <div className="portfolio-info">
              <div className="caption">
                <h4>project name goes here 2</h4>
                <p>category project</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-box shadow">
            <img
              src="images/portfolio/portfolio-3.jpg"
              alt="portfolio 3 image"
              title="portfolio 3 picture"
              className="img-fluid"
            />
            <div className="portfolio-info">
              <div className="caption">
                <h4>project name goes here 3</h4>
                <p>category project</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-box shadow">
            <img
              src="images/portfolio/portfolio-4.jpg"
              alt="portfolio 4 image"
              title="portfolio 4 picture"
              className="img-fluid"
            />
            <div className="portfolio-info">
              <div className="caption">
                <h4>project name goes here 4</h4>
                <p>category project</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-box shadow">
            <img
              src="images/portfolio/portfolio-5.jpg"
              alt="portfolio 5 image"
              title="portfolio 5 picture"
              className="img-fluid"
            />
            <div className="portfolio-info">
              <div className="caption">
                <h4>project name goes here 5</h4>
                <p>category project</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-box shadow">
            <img
              src="images/portfolio/portfolio-6.jpg"
              alt="portfolio 6 image"
              title="portfolio 6 picture"
              className="img-fluid"
            />
            <div className="portfolio-info">
              <div className="caption">
                <h4>project name goes here 6</h4>
                <p>category project</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-box shadow">
            <img
              src="images/portfolio/portfolio-7.jpg"
              alt="portfolio 7 image"
              title="portfolio 7 picture"
              className="img-fluid"
            />
            <div className="portfolio-info">
              <div className="caption">
                <h4>project name goes here 7</h4>
                <p>category project</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-box shadow">
            <img
              src="images/portfolio/portfolio-8.jpg"
              alt="portfolio 8 image"
              title="portfolio 8 picture"
              className="img-fluid"
            />
            <div className="portfolio-info">
              <div className="caption">
                <h4>project name goes here 8</h4>
                <p>category project</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-box shadow">
            <img
              src="images/portfolio/portfolio-9.jpg"
              alt="portfolio 9 image"
              title="portfolio 9 picture"
              className="img-fluid"
            />
            <div className="portfolio-info">
              <div className="caption">
                <h4>project name goes here 9</h4>
                <p>category project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
};

export default Portfolio