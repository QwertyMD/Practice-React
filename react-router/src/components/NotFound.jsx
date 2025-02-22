import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Error 404 | Not Found</p>
      <button onClick={() => navigate("/")}>Goto Home</button>
    </div>
  );
};

export default NotFound;
