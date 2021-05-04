import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const Post: FC<Props> = (props) => {
  return (
    <svg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.568 5.15799C21.325 5.15799 21.136 5.34699 21.136 5.58999V15.985C21.136 17.659 19.7725 19.036 18.085 19.036H5.58999C5.34699 19.036 5.15799 19.225 5.15799 19.468C5.15799 19.711 5.34699 19.9 5.58999 19.9H18.085C20.245 19.9 22 18.145 22 15.985V5.58999C22 5.34699 21.811 5.15799 21.568 5.15799Z"
        fill="white"
      />
      <path
        d="M19.3405 14.3245V3.916C19.3405 2.3095 18.031 1 16.4245 1H3.916C2.3095 1 1 2.3095 1 3.916V14.338C1 15.9445 2.3095 17.254 3.916 17.254H16.4245C18.031 17.2405 19.3405 15.931 19.3405 14.3245ZM1.864 14.3245V3.916C1.864 2.782 2.782 1.8775 3.9025 1.8775H16.411C17.545 1.8775 18.463 2.7955 18.463 3.916V14.338C18.463 15.472 17.545 16.3765 16.411 16.3765H3.916C2.782 16.3765 1.864 15.4585 1.864 14.3245Z"
        fill="white"
      />
      <path
        d="M21.568 5.15799C21.325 5.15799 21.136 5.34699 21.136 5.58999V15.985C21.136 17.659 19.7725 19.036 18.085 19.036H5.58999C5.34699 19.036 5.15799 19.225 5.15799 19.468C5.15799 19.711 5.34699 19.9 5.58999 19.9H18.085C20.245 19.9 22 18.145 22 15.985V5.58999C22 5.34699 21.811 5.15799 21.568 5.15799Z"
        stroke="white"
        stroke-miterlimit="10"
      />
      <path
        d="M19.3405 14.3245V3.916C19.3405 2.3095 18.031 1 16.4245 1H3.916C2.3095 1 1 2.3095 1 3.916V14.338C1 15.9445 2.3095 17.254 3.916 17.254H16.4245C18.031 17.2405 19.3405 15.931 19.3405 14.3245ZM1.864 14.3245V3.916C1.864 2.782 2.782 1.8775 3.9025 1.8775H16.411C17.545 1.8775 18.463 2.7955 18.463 3.916V14.338C18.463 15.472 17.545 16.3765 16.411 16.3765H3.916C2.782 16.3765 1.864 15.4585 1.864 14.3245Z"
        stroke="white"
        stroke-miterlimit="10"
      />
    </svg>
  );
};