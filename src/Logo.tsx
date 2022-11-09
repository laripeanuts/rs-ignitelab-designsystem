import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={150}
      height={150}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path fill-rule="evenodd" clip-rule="evenodd" d="M132.141 98.5215C118.155 115.131 96.7946 126.188 74.2459 125.276C51.6972 124.363 32.4169 116.522 17.6656 98.0826L20.955 95.8896C36.1537 109.663 53.1322 114.53 74.0265 114.53C94.9208 114.53 112.633 109.573 129.51 95.8896L132.141 98.5215ZM41.573 54.866C41.573 47.7223 37.0946 43.9979 31.3438 43.9979C27.1416 43.9979 23.8234 46.3799 22.8281 49.0654H22.7176V33.4978H14.9754V77.3322H22.7176V58.7118C22.7176 53.7672 25.372 51.2031 28.7999 51.2031C33.7211 51.2031 33.8324 55.2325 33.8324 57.6138V77.3322H41.573V54.866ZM66.0695 67.808C65.461 70.1278 63.2486 71.3503 61.093 71.3503C54.8442 71.3503 54.4022 65.8555 54.1812 63.4128H74.3634V61.8868C74.3634 47.0522 66.3458 43.9986 60.5397 43.9986C47.6553 43.9986 46.439 56.5142 46.439 60.4215C46.439 73.7923 52.7984 78.1976 61.093 78.1976C66.124 78.1976 71.9869 75.6226 74.0319 67.8088H66.0695V67.808ZM54.4022 57.8566C54.8442 53.5836 56.7795 51.0194 60.4292 51.0194C62.9171 51.0194 65.9583 52.6069 66.401 57.8566H54.4022ZM87.4681 33.4978H79.7275V77.3322H87.4681V33.4978ZM102.842 33.4978H95.0998V77.3322H102.842V33.4978ZM138.617 61.0931C138.617 49.372 131.485 43.9986 123.578 43.9986C115.67 43.9986 108.537 49.372 108.537 61.0931C108.537 72.8156 115.67 78.1968 123.578 78.1968C131.485 78.1968 138.617 72.8156 138.617 61.0931ZM130.656 61.0931C130.656 65.2439 129.549 70.983 123.577 70.983C117.606 70.983 116.499 65.2439 116.499 61.0931C116.499 56.9422 117.606 51.2031 123.577 51.2031C129.549 51.2031 130.656 56.9414 130.656 61.0931Z" fill="#EA0054"/>
    </svg>
  )
}
