import * as React from "react";
import {
  PlasmicSiteButton,
  DefaultSiteButtonProps
} from "./plasmic/17_s_website/PlasmicSiteButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface SiteButtonProps extends DefaultSiteButtonProps {
  // Feel free to add any additional props that this component should receive
}
function SiteButton_(props: SiteButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicSiteButton.useBehavior<SiteButtonProps>(
    props,
    ref
  );
  return <PlasmicSiteButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<SiteButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<SiteButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const SiteButton = React.forwardRef(SiteButton_) as any as ButtonComponentType;

export default Object.assign(SiteButton, { __plumeType: "button" });
