import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const Trash: FC<Props> = (props) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.6 6.53353V15.6335C13.6 16.4035 12.97 17.0335 12.2 17.0335H3.8C3.03 17.0335 2.4 16.4035 2.4 15.6335V6.53353M5.27 8.63353V14.9335M10.8 8.63353V14.9335M8 8.63353V14.9335M15 5.20353H1V4.50353C1 3.73353 1.63 3.10353 2.4 3.10353H13.6C14.37 3.10353 15 3.73353 15 4.50353V5.20353ZM11.5 3.10353H4.5C4.5 1.91353 5.41 1.00353 6.6 1.00353H9.4C10.59 0.933532 11.5 1.91353 11.5 3.10353Z"
        stroke="white"
        stroke-width="1.3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
