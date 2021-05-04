import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const Location: FC<Props> = (props) => {
  return (
    <svg
      width="11"
      height="13"
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.1 0C2.28525 0 0 2.28525 0 5.1C0 7.83115 4.59836 12.2344 4.79344 12.4156C4.87705 12.4992 4.98852 12.541 5.1 12.541C5.21148 12.541 5.32295 12.4992 5.40656 12.4156C5.60164 12.2344 10.2 7.83115 10.2 5.1C10.2 2.28525 7.91475 0 5.1 0ZM6.8 5.16967C6.8 6.10328 6.03361 6.86967 5.1 6.86967C4.16639 6.86967 3.4 6.10328 3.4 5.16967C3.4 4.23607 4.16639 3.46967 5.1 3.46967C6.03361 3.46967 6.8 4.23607 6.8 5.16967Z"
        fill="#7B798F"
      />
    </svg>
  );
};
