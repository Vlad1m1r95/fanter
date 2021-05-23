import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const ArrowMobileHeader: FC<Props> = (props) => {
  return (
    <svg
      width="9"
      height="13"
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 11.75L2 6.75L7 1.75"
        stroke="white"
        stroke-width="2.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
