import { useEffect } from "react";
import { useState } from "react";
import "./dashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/parties/getresults")
      .then((res) => {
        setdata(res.data.votes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page">
      <h4 className="head-text">Dashboard</h4>
      <table border={1}>
        <thead>
          <tr>
            <th>Party Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.name} className="row">
                <td>{item.partyName}</td>
                <td>{item.votes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
        }}
      >
        <Link to={"/"}>
          <button
            className="btn"
            style={{
              marginRight: 20,
            }}
          >
            Back
          </button>
        </Link>
        <Link to={"/addparty"}>
          <button className="btn">Add Party</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
