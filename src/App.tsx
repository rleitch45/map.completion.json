import React from "react";
import mapData from "./mapData.json";

type Shape = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  department: string;
};

const App: React.FC = () => {
  const getFillColor = (department: string): string => {
    switch (department) {
      case "BUILDERS":
        return "#20e9c0";
      case "LIFESTYLES":
        return "#e920c0";
      case "ITH":
        return "#203ce9";
      default:
        return "#cccccc"; // fallback color
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Store Map</h2>

      <svg
        width="800"
        height="600"
        style={{ background: "#f5f5f5", border: "1px solid #ccc" }}
      >
        {(mapData as Shape[]).map((shape, index) => (
          <rect
            key={shape.id || index}
            x={shape.x}
            y={shape.y}
            width={shape.width}
            height={shape.height}
            fill={getFillColor(shape.department)}
            stroke="#333"
            strokeWidth={1}
          >
            <title>{shape.id}</title>
          </rect>
        ))}
      </svg>
    </div>
  );
};

export default App;
