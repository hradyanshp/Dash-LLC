import "../../Styles/AppLayout/Graph.css";
import './style.css';

import React from "react";

import {
  XYPlot,
  VerticalBarSeries,
  HorizontalGridLines,
  VerticalGridLines,
  MarkSeries,
  YAxis,
  XAxis
//   Borders
} from "react-vis";

//SVG
import { Argentina, 
 Britian, 
 Canada, 
 Chile, 
 Germany, 
 India, 
 Spain, 
 Sweden, 
 USA, 
 SouthAfrica, 
 Czechia, 
 Finland} from './SVG/Flags'; 

function randomDataset() {
 const data = [
    {
      x: 0,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    },
    {
      x: 1,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    },
    {
      x: 2,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    },
    {
      x: 3,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    },
    {
      x: 4,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    },
    {
      x: 5,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    },
    {
      x: 6,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    },
    {
      x: 7,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    },
    {
      x: 8,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    },
    {
      x: 9,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    },
    {
      x: 10,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    },
    {
      x: 11,
      y: Math.floor(Math.random() * 100),
      color: Math.floor(Math.random() * 10)
    }
  ];

  return data;
}

export default function Graph() {

  const [data, setData] = React.useState(randomDataset());
  

  // const reload = (cb) => {
  //   setData(rData);
  //   cb();
  // }

  const handleClick = () => {
    let rData = randomDataset()
    setData(rData);
    
  }
  const rColor = Math.floor(Math.random()) + 1;

  const courses = [
    "Argentina",
    "Britian",
    "Canada",
    "Chile",
    "Germany",
    "India",
    "Spain",
    "Sweden",
    "USA",
    "RSA",
    "Czechia"
  ];


  return (
    <>
    <br />
      <div
        className="graph"
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#F1F8F4",
          padding:20
        }}
      >
        <br />
        <br />
        <XYPlot
          height={600}
          width={700}
          colorType="category"
          strokeType="literal"
          colorRange={["#1A374D", "#406882", "#6998AB", "#B1D0E0", "#22577E"]}
          // style={{ strokeWidth: 5 }}
          style={{ mark: { stroke: "black" } }}
          // animation="noWobble"
          title="Hradyansh"
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <MarkSeries />
          <XAxis
            // tickFormat={(v) => ``}
            tickFormat={(v) => `${courses[Math.floor(Math.random() * 10)]}`}
            // tickLabelAngle={0}
            // title="Hradyansh"
            // position="end"
          />
          <YAxis />
          {/* <Borders /> */}

          <VerticalBarSeries
            data={data}
            // animation="noWobble"
            animation={{ damping: 14, stiffness: 100 }}
            stroke={data.color}
          />
        </XYPlot>
        
        
        <div className="index">
        <button
          onClick={handleClick}
          type='button'
        >
          CLICK
        </button>
        <br />
        
        <div className="flagContainer" >
          <Argentina />
          <Britian />         
          <Canada />      
          <Chile />       
          <Germany />
          <India />
          <Spain />
          <Sweden />
          <USA />
          <SouthAfrica />
          <Finland />
          <Czechia />
        </div>
      </div>
      </div>

      
    </>
  );
}
