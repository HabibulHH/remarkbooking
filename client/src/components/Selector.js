import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./styles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#app");

export const Selector = (props) => {
  useEffect(() => {
    props.isOpen ? setIsOpen(true) : setIsOpen(false);
  }, []);
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  let [kids, setKids] = useState(0);
  let [adults, setAdults] = useState(1);
  let [rooms, setRooms] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        className="btn btn-outile-success btn-sm mt-1"
        onClick={openModal}
      >
        Select Needs
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>

        <h2 className="middle">Chose room variants</h2>
        <div className="offset-3 row">
          <div className="col-md-12">
            <span>
              <h4>Number of Adults -{adults}</h4>
              <button
                className="btn btn-success"
                onClick={() => {
                  adults > 0 ? setAdults(adults - 1) : setAdults(adults - 0);
                }}
              >
                -
              </button>
              <input
                type="number"
                className="from-control w_50"
                value={adults}
                name="adultsid"
              />
              <button
                onClick={() => {
                  setAdults(adults + 1);
                }}
                className="btn btn-success"
              >
                +
              </button>
            </span>
          </div>

          <div className="col-md-12">
            <span>
              <h4> Number of Kids-{kids}</h4>
              <button
                onClick={() => {
                  kids > 0 ? setKids(kids - 1) : setKids(kids - 0);
                }}
                className="btn btn-success"
              >
                -
              </button>
              <input
                type="number"
                className="from-control w_50"
                value={kids}
                name="kids"
              />
              <button
                onClick={() => {
                  setKids(kids + 1);
                }}
                className="btn btn-success"
              >
                +
              </button>
            </span>
          </div>
          <div className="col-md-12">
            <span>
              <h5> Number of Rooms -{rooms}</h5>
              <button
                onClick={() => {
                  rooms > 0 ? setRooms(rooms - 1) : setRooms(rooms - 0);
                }}
                className="btn btn-success"
              >
                -
              </button>
              <input
                type="number"
                className="from-control w_50"
                value={rooms}
                name="rooms"
              />
              <button
                onClick={() => {
                  setRooms(rooms + 1);
                }}
                className="btn btn-success"
              >
                +
              </button>
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};
