import  { useState } from "react";
import "./Card.css";

import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { Table } from "@mui/material";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={handleToggleExpand} />
      ) : (
        <CompactCard param={props} setExpanded={handleToggleExpand} />
      )}
    </div>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      
      onClick={setExpanded}
    >
      <div className="radialBar">
        <span>total value</span>
      </div>
      <div className="detail">
        <Png />
        <span>{param.title}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  

  return (
    <div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
        <span>{param.title}</span>
      <div className="chartContainer">
        
      </div>
      <span>Last 24 hours</span>
    </div>
  );
}

export default Card;
