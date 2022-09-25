import { CoreVariants, SimplePseudoClasses, SimplePseudoElements, tw as twind } from "twind";

import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
import { createElement } from "react";

type Variants = 'sm' | 'md' | "lg" | 'xl' | '2xl' | CoreVariants | SimplePseudoClasses | SimplePseudoElements

type TagContainsVariant = string extends Variants ? string : never

let x: TagContainsVariant = 'sm'

export type TagName = keyof JSX.IntrinsicElements;

type CustomProps = {[key in Variants]?: string | string[]}

export type PolymorphicProps<Tag extends TagName> =
  ComponentPropsWithRef<Tag> & { readonly type?: Tag } & CustomProps;

function createComponent<T extends TagName>(
  tag: T
): ({ type, ...props }: PolymorphicProps<T>) => React.DOMElement<any, any> {
  return function ({ type = tag, ...props }: PolymorphicProps<T>) {
    // do twind stuff here
    return createElement(type ?? "div", props, props.children);
  };
}

const tw = {
  a: createComponent("a"),
  div: createComponent("div"),
  span: createComponent("span"),
  p: createComponent("p"),
  h1: createComponent("h1"),
  h2: createComponent("h2"),
  h3: createComponent("h3"),
  h4: createComponent("h4"),
  h5: createComponent("h5"),
  h6: createComponent("h6"),
  ul: createComponent("ul"),
  ol: createComponent("ol"),
  li: createComponent("li"),
  table: createComponent("table"),
  img: createComponent("img"),
  video: createComponent("ul"),
};
export default tw;
