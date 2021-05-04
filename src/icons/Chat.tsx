import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const Chat: FC<Props> = (props) => {
  return (
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.4238 19.2601H17.4307C20.4944 19.2601 23 16.6563 23 13.4727V6.78741C23 3.60377 20.4944 1 17.4307 1H6.5693C3.50565 1 1 3.60377 1 6.78741V13.4727C1 16.6563 3.50565 19.2601 6.5693 19.2601H7.66732V24L13.4238 19.2601Z"
        stroke="white"
        stroke-width="1.7"
        stroke-miterlimit="10"
      />
    </svg>
  );
};
