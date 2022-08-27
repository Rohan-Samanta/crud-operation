import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Read() {
  const [userDetail, setUserDetail] = useState([]);
  const navigate = useNavigate();

  const updateUser = (id) => {
    navigate(`/update/${id}`);
  };
  const getData = () => {
    axios
      .get(`https://630a2e843249910032820119.mockapi.io/crud`)
      .then((res) => {
        setUserDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const deleteUser = (id) => {
    axios
      .delete(`https://630a2e843249910032820119.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Read Data</h1>
      {userDetail?.map((elm, idx) => {
        return (
          <div key={idx}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p>{elm?.id}</p>
              <p>{elm?.allDetails?.userName}</p>
              <p>{elm?.allDetails?.userEmail}</p>
              <button onClick={() => updateUser(elm.id)}>Update</button>
              <button onClick={() => deleteUser(elm.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Read;
