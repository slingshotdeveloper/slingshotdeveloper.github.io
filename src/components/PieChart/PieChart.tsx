import React, { useState } from 'react';
import styles from './PieChart.module.scss';
import PieSegmentModal from '../PieSegmentModal/PieSegmentModal';

interface Segment {
  name: string;
  value: number;
  info: string;
  radius: number;
  skillLevel: number;
  index: number;
}

interface PieChartProps {
  data: Segment[];
  size?: number;
}

const PieChart: React.FC<PieChartProps> = ({ data, size }) => {
  const outerRadius = size / 2;
  const innerRadius = outerRadius * 0.008;
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const describeArc = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
  ): string => {
    const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
    const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
    const startInner = polarToCartesian(x, y, innerRadius, endAngle);
    const endInner = polarToCartesian(x, y, innerRadius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return [
      'M',
      startOuter.x,
      startOuter.y,
      'A',
      outerRadius,
      outerRadius,
      0,
      largeArcFlag,
      0,
      endOuter.x,
      endOuter.y,
      'L',
      endInner.x,
      endInner.y,
      'A',
      innerRadius,
      innerRadius,
      0,
      largeArcFlag,
      1,
      startInner.x,
      startInner.y,
      'Z',
    ].join(' ');
  };

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number,
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const calculateSegments = (data: Segment[]) => {
    const total = data.reduce((acc, segment) => acc + segment.value, 0);
    let cumulativeAngle = 0;

    return data.map((segment) => {
      const startAngle = cumulativeAngle;
      const endAngle = cumulativeAngle + (segment.value / total) * 360;
      cumulativeAngle = endAngle;
      return { ...segment, startAngle, endAngle };
    });
  };

  const segments = calculateSegments(data);

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ overflow: 'visible' }}>
        {segments.map((segment, index) => {
          const midAngle = (segment.startAngle + segment.endAngle) / 2;
          const labelPos = polarToCartesian(
            outerRadius,
            outerRadius,
            outerRadius * segment.radius,
            midAngle,
          );
          let fillColor =
            hoveredSegment?.index === index
              ? 'rgba(2, 254, 255, 0.15)'
              : '#0B2229';

          return (
            <g key={index}>
              <path
                key={index}
                d={describeArc(
                  outerRadius,
                  outerRadius,
                  innerRadius,
                  segment.startAngle,
                  segment.endAngle,
                )}
                fill={fillColor}
                stroke={'rgba(2, 254, 255, 0.35)'}
                strokeWidth={'4px'}
                onMouseEnter={() => setHoveredSegment(segment)}
                onMouseLeave={() => setHoveredSegment(null)}
              />
              <text
                className={styles.segment_name}
                x={labelPos.x}
                y={labelPos.y}
                fill="white"
                fontSize={'16'}
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {segment.name}
              </text>
            </g>
          );
        })}
      </svg>
      {hoveredSegment && (
        <div
          className={styles.hovered_segment_modal}
          style={{
            left: `${polarToCartesian(outerRadius, outerRadius, outerRadius * hoveredSegment.radius, (hoveredSegment.startAngle + hoveredSegment.endAngle) / 2).x - 120}px`,
            top: `${polarToCartesian(outerRadius, outerRadius, outerRadius * hoveredSegment.radius, (hoveredSegment.startAngle + hoveredSegment.endAngle) / 2).y - 20}px`,
          }}
        >
          <PieSegmentModal
            name={hoveredSegment?.name}
            info={hoveredSegment?.info}
            skillLevel={hoveredSegment?.skillLevel}
          />
        </div>
      )}
    </div>
  );
};

export default PieChart;
