import Link from "next/link";


const Footer = () => {
    return <footer className="footer">
  
    {/* START THE SOCIAL MEDIA CONTENT  */}
    <div className="footer-sm" style={{ backgroundColor: "#212121" }}>
      <div className="container">
        <div className="row py-4 text-center text-white">
          <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
            connect with us on social media
          </div>
          <div className="col-lg-7 col-md-6">
            <Link href="#">
              <i className="fab fa-facebook" />
            </Link>
            <Link href="#">
              <i className="fab fa-twitter" />
            </Link>
            <Link href="#">
              <i className="fab fa-github" />
            </Link>
            <Link href="#">
              <i className="fab fa-linkedin" />
            </Link>
            <Link href="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* START THE CONTENT FOR THE CAMPANY INFO */}
    <div className="container mt-5">
      <div className="row text-white justify-content-center  pb-3">
        <div className="col-12 col-sm-6 col-lg-6 mx-auto">
          <h5 className="text-capitalize fw-bold">Nexel Data</h5>
          <hr
            className="bg-white d-inline-block mb-4"
            style={{ width: 60, height: 2 }}
          />
          <p className="lh-lg">
            We are the pioneers of leading in software industrry lading from last from lat 8 year w ehandle every ened to end solutuon
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
          <h5 className="text-capitalize fw-bold">Web Links</h5>
          <hr
            className="bg-white d-inline-block mb-4"
            style={{ width: 60, height: 2 }}
          />
          <ul className="list-inline campany-list">
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            {/* <li>
              <Link href="#">Clients</Link>
            </li> */}
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
          <h5 className="text-capitalize fw-bold">useful links</h5>
          <hr
            className="bg-white d-inline-block mb-4"
            style={{ width: 60, height: 2 }}
          />
          <ul className="list-inline campany-list">
          <li>
              <Link href="/about-us"> About us</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions"> Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
           
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
          <h5 className="text-capitalize fw-bold">contact</h5>
          <hr
            className="bg-white d-inline-block mb-4"
            style={{ width: 60, height: 2 }}
          />
          <ul className="list-inline campany-list">
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
      
          </ul>
        </div>
      </div>
    </div>

  </footer>
  
};

export default Footer