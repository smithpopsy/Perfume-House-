import React from "react";
import Modal from "react-bootstrap/Modal";
import tick  from "../assets/tick.png"
import cross from "../assets/cross.png"
import { useContext } from "react";
import { CartContext } from "../context";

const ConfirmOrderModal = ({ showModal, setShowModal,  }) => {
  const { cart, totalPrice,startNewOrder } = useContext(CartContext);

  return (
    <div>
      <Modal centered show={showModal}>
      <Modal.Body>
          <div className="d-flex justify-content-between">
            <img src={tick} alt="img" />
            <img
              src={cross}
              alt="img"
              role="button"
              onClick={() => setShowModal(false)}
              style={{ weight: "25px", height: "25px" }}
            />
          </div>
          <h1>confirm order</h1>
          <p>We hope you enjoy your order</p>
          <div className="p-3">
            {cart.map((perfume) => {
              return (
                <div key={perfume.id}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2 align-items-center">
                      <img
                        src={perfume.image}
                        alt="img"
                        style={{ width: "77.58px", height: "76.76px" }}
                        className="mb-3"
                      />
                      <div>
                        <h1 className="fs-6 fw-bold">{perfume.title}</h1>
                        <div className="d-flex">
                          <p className="maincolor fw-bold">
                            {" "}
                            {perfume.quantity}x
                          </p>
                          <p className="ms-2 f"> N{perfume.price}</p>
                        </div>
                      </div>
                    </div>
                    <div className="fw-bold">
                      {perfume.price * perfume.quantity}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="d-flex justify-content-between mt-2 ">
              <p>Order Total</p>
              <h5>{totalPrice}</h5>
            </div>

            <button className="rounded-3 w-100 main-color-bg p-2 border-0 text-white" onClick={startNewOrder}>
              Start New Order
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ConfirmOrderModal;





