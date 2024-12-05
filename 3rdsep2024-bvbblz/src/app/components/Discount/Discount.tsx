import React, { useState } from "react";
import Discount from "../../../../public/svg/discount.svg";
import "../../style/discountComponent.scss";

interface FramerComponentProps {
  setActiveTab: React.Dispatch<React.SetStateAction<"Monthly" | "Yearly">>;
}

const FramerComponent: React.FC<FramerComponentProps> = ({ setActiveTab }) => {
  const [activeTab, setActiveTabLocal] = useState<"Monthly" | "Yearly">(
    "Monthly"
  );

  const handleTabClick = (tab: "Monthly" | "Yearly") => {
    setActiveTab(tab);
    setActiveTabLocal(tab);
  };

  return (
    <div className="container">
      <div className="floating-text">
        <p className="discount-text">Get 20% OFF</p>
        <Discount className="discount-banner__icon" />
      </div>
      <div className="tabs">
        {["Monthly", "Yearly"].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "tab--active" : ""}`}
            onClick={() => handleTabClick(tab as "Monthly" | "Yearly")}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FramerComponent;
