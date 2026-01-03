
const Banner = ({ name = "Test" }) => {

  const image = "/images/Banners.jpg"
  return (
    <div >
      <div
        className="container-fluid py-5 mb-5 banner-container"
        style={{
          background: `url(${image
            }) center/cover no-repeat fixed`,

        }}
      >
        <div className="container py-5 banner-content" style={{ zIndex: 2000 }}>
          <h1 style={{ textAlign: "center", color: "#fff" }}>
            { name }
          </h1>
        </div>


    
      </div>
    </div>
  );
};

export default Banner