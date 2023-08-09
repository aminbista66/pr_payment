import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const payWithEsewa = () => {
    const path = "https://uat.esewa.com.np/epay/main";
    const payload = {
      amt: 100,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: 100,
      pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
      scd: "EPAYTEST",
      su: "http://localhost:3000/success",
      fu: "http://localhost:3000/failed",
    };
    axios
      .post(path, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const payWithKhalti = () => {
    const path = "https://khalti.com/api/v2/payment/initiate/";
    const payload = {
      return_url: "https://localhost:3000/payment/",
      website_url: "https://example.com/",
      amount: 1300,
      purchase_order_id: "test12",
      purchase_order_name: "test",
      customer_info: {
        name: "Ashim Upadhaya",
        email: "example@gmail.com",
        phone: "9811496763",
      },
      amount_breakdown: [
        {
          label: "Mark Price",
          amount: 1000,
        },
        {
          label: "VAT",
          amount: 300,
        },
      ],
      product_details: [
        {
          identity: "1234567890",
          name: "Khalti logo",
          total_price: 1300,
          quantity: 1,
          unit_price: 1300,
        },
      ],
    };

    axios
      .post(path, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <div className="btn-group">
        <button className="esewa-btn" onClick={payWithEsewa}>
          Pay With Esewa
        </button>
        <button className="khalti-btn" onClick={payWithKhalti}>
          Pay With Khalti
        </button>
      </div>
    </div>
  );
}

export default App;
