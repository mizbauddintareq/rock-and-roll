import React, { useEffect, useState } from "react";
import Band from "../Band/Band";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

const Bands = () => {
  const musicIcon = <FontAwesomeIcon icon={faCompactDisc} />;
  const [bands, setBands] = useState([]);

  const [cart, setCart] = useState([]);

  const [totalFees, setTotalFees] = useState(0);

  useEffect(() => {
    fetch("./bands.JSON")
      .then((res) => res.json())
      .then((data) => setBands(data));
  }, []);

  const handleBtn = (bands) => {
    const cartInfo = [...cart, bands];
    setCart(cartInfo);

    const totalFeeCount = totalFees + bands.fees;
    setTotalFees(totalFeeCount);
  };

  return (
    // bands section
    <div className="row mt-4">
      <div className="col-md-9 border-end">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {bands.map((band) => (
            <Band band={band} key={band.id} handleBtn={handleBtn}></Band>
          ))}
        </div>
      </div>
      {/* cart section */}
      <div className="col-md-3" style={{ color: "#023e8a" }}>
        <div className="text-center">
          <h3>
            {musicIcon} {cart.length} Bands Chosen
          </h3>
          <h6>Total Fees: ${totalFees}</h6>
        </div>
        <hr />
        <h5>Chosen Band's List</h5>
        {cart.map((band) => (
          <Cart info={band} key={band.fees}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Bands;
