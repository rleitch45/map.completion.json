import { FC } from "react";

export const StoreMap: FC = () => {
  const [data] = Retool.useStateArray({ name: "data" });

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "W1 COMPLETE": return "#e920c0";
      case "W2 COMPLETE": return "#8b20e9";
      case "W3 COMPLETE": return "#203ce9";
      case "W4 COMPLETE": return "#20a5e9";
      case "W5 COMPLETE": return "#20e9c0";
      case "W6 COMPLETE": return "#20e98b";
      case "W7 COMPLETE": return "#4ee920";
      case "W8 COMPLETE": return "#d1e920";
      default: return "#ccc";
    }
  };

  return (
    <svg width="100%" height="600">
      {Array.isArray(data) && data.map((shape, i) => (
        <g key={shape.id || i}>
          <rect
            x={shape.x}
            y={shape.y}
            width={shape.width}
            height={shape.height}
            fill={getStatusColor(shape.status)}
            stroke="#000"
            strokeWidth={1}
          />
          <text
            x={shape.x + shape.width / 2}
            y={shape.y + shape.height / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="6"
            fill="#000"
          >
            {shape.id}
          </text>
        </g>
      ))}
    </svg>
  );
};
