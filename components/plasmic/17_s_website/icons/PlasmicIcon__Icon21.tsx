// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
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
          "M480 210A160 160 0 00210 93.8V0A160 160 0 0093.8 270H0a160 160 0 00270 116.2V480a160 160 0 00116.2-270H480zm-210 60h-60v-60h60v60z"
        }
      ></path>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
