import * as React from 'react';
import { SVGProps } from 'react';
const SvgCloseCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {
        '.st0{opacity:.2;fill:white;stroke:#fff;stroke-width:5.000000e-02;stroke-miterlimit:10}'
      }
    </style>
    <path
      d="M5.3 18.7c.2.2.4.3.7.3s.5-.1.7-.3l5.3-5.3 5.3 5.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4z"
      id="_icons"
    />
  </svg>
);
export default SvgCloseCross;
