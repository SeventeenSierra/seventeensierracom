// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 480 480"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M398.7 240c30.3-26.7 53.8-61 67.6-99.8A60 60 0 10353.2 100a120 120 0 01-226.3 0 60 60 0 10-113.1 40.1C27.4 179 51 213.2 81.2 240a240.3 240.3 0 00-67.6 99.8A60 60 0 10126.8 380a120 120 0 01226.3 0 60 60 0 10113.1-40.1 240.4 240.4 0 00-67.5-99.8z"
        }
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
