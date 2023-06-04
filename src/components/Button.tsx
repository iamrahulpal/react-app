import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  color: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color }: props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
