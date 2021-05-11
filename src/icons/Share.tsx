import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const Share: FC<Props> = (props) => {
  return (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.7536 15.7485V22.4365L23 12.2182L12.7536 2V8.98273C12.7536 8.98273 0.109459 8.73334 1.04998 23C6.17982 14.9517 12.7536 15.7485 12.7536 15.7485Z"
        stroke="#413E93"
        stroke-width="1.6"
        stroke-miterlimit="10"
      />
    </svg>
  );
};
