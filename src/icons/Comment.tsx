import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const Comment: FC<Props> = (props) => {
  return (
    <svg
      width="20"
      height="23"
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.1649 16.0844H14.4433C16.9499 16.0844 19 13.9335 19 11.3035V5.7809C19 3.15094 16.9499 1 14.4433 1H5.5567C3.05007 1 1 3.15094 1 5.7809V11.3035C1 13.9335 3.05007 16.0844 5.5567 16.0844H6.45508V20L11.1649 16.0844Z"
        stroke="#48438E"
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
  );
};
