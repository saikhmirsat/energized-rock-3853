import React, { useEffect, useState } from "react";
import AdminIndex from "./AdminIndex";
import axios from "axios";
import "./dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios
      .get(`http://localhost:5050/products`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete=(id)=>{
   axios.delete(`http://localhost:5050/products/${id}`)
   .then(()=>{
    alert("Product deleted")
    window.location.reload()
   })
  }
 
  return (
    <div>
      <div>
        <AdminIndex />
      </div>
      <hr />

      <div className="all_products">
        {data.map((ele) => (
          <div key={ele.id} className="product_container">
            <div className="product_image">
              <img src={ele.image_1} alt="Product photo" />
            </div>
            <hr />
            <div className="product_details">
              <h3>{ele.title}</h3>
              <p>{ele.type}</p>
              <h3>${ele.price}</h3>
            </div>
            <div className="edit_btn">
              <button onClick={()=>(handleDelete(ele.id))}>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
