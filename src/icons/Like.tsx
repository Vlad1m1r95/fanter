import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const Like: FC<Props> = (props) => {
  return (
    <svg
      width="25"
      height="22"
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.4212 3.89924L12.4971 5.49905L13.5769 3.90193C15.3163 1.32936 17.8066 0.868513 19.8707 1.63583C21.9948 2.42546 23.7093 4.5327 23.7 7.29999V7.30436C23.7 9.16666 22.8642 10.8571 21.5502 12.4312C20.23 14.0127 18.5144 15.3734 16.9247 16.5699L16.9247 16.5699L16.9194 16.5739C16.268 17.0694 15.7078 17.4926 15.2195 17.8616C13.9277 18.8377 13.1383 19.4341 12.4928 19.9833C12.2018 19.7422 11.887 19.4968 11.5197 19.2159C11.3228 19.0653 11.11 18.9039 10.8758 18.7262C10.1842 18.2016 9.30533 17.5349 8.09613 16.5859L8.09504 16.5851C6.51751 15.3497 4.80199 14.0017 3.46852 12.4291C2.14452 10.8676 1.3 9.20215 1.3 7.34877C1.3 4.55329 3.02501 2.43441 5.14837 1.64053C7.21125 0.869253 9.69322 1.32968 11.4212 3.89924Z"
        stroke="#413E93"
        stroke-width="2.6"
        stroke-miterlimit="10"
      />
    </svg>
  );
};