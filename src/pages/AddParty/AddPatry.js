import React from "react";
import { useState } from "react";
import "./AddParty.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPatry() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [partyname, setPatryName] = useState("");
  const navigation = useNavigate();

  const addparty = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/v1/parties/addparty", {
        name: name,
        img: img,
        pname: partyname,
      })
      .then((res) => {
        if (res.data.status === "ok") {
          alert(res.data.msg);
          navigation("/admin");
          setImg("");
          setName("");
          setPatryName("");
        } else {
          alert(res.data.msg);
          setImg("");
          setName("");
          setPatryName("");
        }
      })
      .catch((error) => {
        alert(error);
        setImg("");
        setName("");
        setPatryName("");
      });
  };

  return (
    <div>
      <form onSubmit={addparty}>
        <div className="form-add">
          <div className="title">Welcome</div>
          <div className="subtitle">Let's Add a party</div>
          <div className="input-container ic1">
            <input
              required
              className="input"
              onKeyUp={(e) => setName(e.target.value)}
              type="text"
              placeholder=" "
            />
            <div className="cut"></div>
            <label className="placeholder">Candidate name</label>
          </div>
          <div className="input-container ic2">
            <input
              required
              className="input"
              type="text"
              onKeyUp={(e) => setPatryName(e.target.value)}
              placeholder="Enter candidate name"
            />
            <div className="cut"></div>
            <label className="placeholder">Party Name</label>
          </div>
          <div className="input-container ic2">
            <input
              required
              onKeyUp={(e) => setImg(e.target.value)}
              className="input"
              type="url"
              placeholder="https://www.google.com?q=img.png "
            />
          </div>
          <button type="submit" className="submit-add">
            Add party
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPatry;
