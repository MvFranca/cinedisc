// icon:menu | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="2.2em"
      width="2.2em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={48}
        d="M88 152h336M88 256h336M88 360h336"
      />
    </svg>
  );
}

export default IconMenu;
