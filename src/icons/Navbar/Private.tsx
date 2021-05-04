import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const Private: FC<Props> = (props) => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.5"
        d="M5.125 7.13462V3.75C5.125 2.26923 6.39423 1 7.875 1H15.9135C17.3942 1 18.6635 2.26923 18.6635 3.75V7.24038M20.25 20.9904H3.75C2.26923 20.9904 1 19.7212 1 18.2404V11.5769C1 10.0962 2.26923 8.82692 3.75 8.82692H20.25C21.7308 8.82692 23 10.0962 23 11.5769V18.2404C23 19.7212 21.7308 20.9904 20.25 20.9904Z"
        stroke="#413E93"
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
  );
};
