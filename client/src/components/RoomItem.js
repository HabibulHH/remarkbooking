import "./RoomItem.css";

const RoomItem = (props) => {
  console.log(props.room.imageUrls[0]);
  return (
    <div className="all-posts">
      <div className="post">
        <div className="row">
          <div className="col-md-5 col-lg-4">
            <div className="fev-icon">
              <i className="far fa-heart" />
            </div>
            <div className="img-slider">
              <div
                id="postCarouselId"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#postCarouselId"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#postCarouselId" data-slide-to={1} />
                  <li data-target="#postCarouselId" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block img-fluid"
                      src={
                        "https://source.unsplash.com/1600x900/?resorts,hotels"
                      }
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src={
                        "https://source.unsplash.com/1600x900/?nature,resorts"
                      }
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src="./img/posts/img_1.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#postCarouselId"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fas fa-chevron-left" />
                </a>
                <a
                  className="carousel-control-next"
                  href="#postCarouselId"
                  role="button"
                  data-slide="next"
                >
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="top mt-3 mt-lg-0">
              <div className="text-left">
                <p className="mb-1">Private room</p>
              </div>
              <div className="text-right rating-text">
                <span>
                  <i className="fas fa-star" />
                  4.58<span>(256)</span>
                </span>
              </div>
            </div>
            <div className="details">
              <h3>Apartments on Belinskogo ulitsa</h3>
              <div className="tag-list">
                <span>2 Guests</span>
                <span>1 bedroom</span>
                <span>1 bed</span>
                <span>1 shared bathroom</span>
              </div>
              <div className="tag-list">
                <span> Free WiFi</span> <span>Family rooms</span>{" "}
                <span>Airport shuttle</span> <span>Non-smoking rooms</span>{" "}
                <span>24-hour front desk</span> <span>Heating</span>
              </div>
            </div>
            <div className="bottom">
              <div className="text-left special-tag">
                <button>
                  <i className="fas fa-gem" /> Rare find
                </button>
              </div>
              <div className="text-right price-container">
                <span className="d-block face-value">
                  <b>£48</b> / night
                </span>
                <span className="d-block total-value">
                  £48 total{" "}
                  <span title="£48 total">
                    <i className="far fa-question-circle" />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
