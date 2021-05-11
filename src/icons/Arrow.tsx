import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const Arrow: FC<Props> = (props) => {
  return (
    <svg
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.64868 5.64854L1 0.999864M1 9.35986L5.64867 4.71119"
        stroke="#48438E"
        stroke-width="1.7"
      />
    </svg>
  );
};
