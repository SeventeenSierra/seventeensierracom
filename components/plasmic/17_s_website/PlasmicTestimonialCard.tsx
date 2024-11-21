// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eyT2PqiWhxDZs7CQ7z9Crs
// Component: OeuHltNxsDAr

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantssoy5WCj6EAlp } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Soy5WCj6EAlp/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: eyT2PqiWhxDZs7CQ7z9Crs/projectcss
import sty from "./PlasmicTestimonialCard.module.css"; // plasmic-import: OeuHltNxsDAr/css

createPlasmicElementProxy;

export type PlasmicTestimonialCard__VariantMembers = {};
export type PlasmicTestimonialCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestimonialCard__VariantsArgs;
export const PlasmicTestimonialCard__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTestimonialCard__ArgsType = {
  testimonialCardContent?: string;
  testimonialPersonName?: string;
  testimonialPersonCompany?: string;
};
type ArgPropType = keyof PlasmicTestimonialCard__ArgsType;
export const PlasmicTestimonialCard__ArgProps = new Array<ArgPropType>(
  "testimonialCardContent",
  "testimonialPersonName",
  "testimonialPersonCompany"
);

export type PlasmicTestimonialCard__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultTestimonialCardProps {
  testimonialCardContent?: string;
  testimonialPersonName?: string;
  testimonialPersonCompany?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTestimonialCard__RenderFunc(props: {
  variants: PlasmicTestimonialCard__VariantsArgs;
  args: PlasmicTestimonialCard__ArgsType;
  overrides: PlasmicTestimonialCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          testimonialCardContent:
            '"Orci commodo maecenas fringilla ad nec amet tempus mattis platea eget tortor sit dolor etiam a ullamcorper varius."',
          testimonialPersonName: "Bruce Wayne",
          testimonialPersonCompany: "Acme Corp."
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssoy5WCj6EAlp()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__tdGCw)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__t9Xn
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.testimonialCardContent;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__dgZj)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__sYtJs
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.testimonialPersonName;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__hC0K4
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.testimonialPersonCompany;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestimonialCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonialCard__VariantsArgs;
    args?: PlasmicTestimonialCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestimonialCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTestimonialCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTestimonialCard__ArgProps,
          internalVariantPropNames: PlasmicTestimonialCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTestimonialCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonialCard";
  } else {
    func.displayName = `PlasmicTestimonialCard.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonialCard = Object.assign(
  // Top-level PlasmicTestimonialCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTestimonialCard
    internalVariantProps: PlasmicTestimonialCard__VariantProps,
    internalArgProps: PlasmicTestimonialCard__ArgProps
  }
);

export default PlasmicTestimonialCard;
/* prettier-ignore-end */