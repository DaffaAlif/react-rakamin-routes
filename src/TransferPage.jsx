import React from "react";
import { NavLink } from "react-router";

const TransferPage = () => {
  return (
    <div>
      TransferPage
      <button>
        <NavLink to="/" end>
          Go To Home Page
        </NavLink>
      </button>
    </div>
  );
};

export default TransferPage;
