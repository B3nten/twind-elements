import { tw as twind } from "twind";

import type { ComponentPropsWithRef } from "react";
import { createElement } from "react";

const Variants = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"] as const;

const tags = [
  "a","abbr","area", "article", "aside", "blockquote", "br", "button", "canvas", "caption", "cite", "code", "col", "del", "details", "dialog", "div", "em", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "i", "iframe", "img", "input", "label", "li", "link", "map", "menu", "nav", "ol", "option", "output", "p", "pre", "progress", "section", "select", "small", "span" ,"strong","table","tbody","td","textarea","tfoot","th","thead","tr","u","ul","video"
]

type TType =
  | "a"
  | "abbr"
  | "area"
  | "article"
  | "aside"
  | "blockquote"
  | "br"
  | "button"
  | "canvas"
  | "caption"
  | "cite"
  | "code"
  | "col"
  | "del"
  | "details"
  | "dialog"
  | "div"
  | "em"
  | "figure"
  | "footer"
  | "form"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "i"
  | "iframe"
  | "img"
  | "input"
  | "label"
  | "li"
  | "link"
  | "map"
  | "menu"
  | "nav"
  | "ol"
  | "option"
  | "output"
  | "p"
  | "pre"
  | "progress"
  | "section"
  | "select"
  | "small"
  | "span" 
  |"strong"
  |"table"
  |"tbody"
  |"td"
  |"textarea"
  |"tfoot"
  |"th"
  |"thead"
  |"tr"
  |"u"
  |"ul"
  |"video"

type TVariants = `${string | never}${typeof Variants[number]}${string | never}`;

type TCustomProps = { [K in TVariants]: string | string[] };

export type TPolymorphicProps<Tag extends TType> =
  ComponentPropsWithRef<Tag> & { readonly type?: Tag } & TCustomProps;

function createComponent<T extends TType>(
  tag: T
): ({ type, ...props }: TPolymorphicProps<T>) => React.DOMElement<any, any> {
  return function ({ type = tag, ...props }: TPolymorphicProps<T>) {
    const { className, children, ...rest } = props;
    return createElement(
      type,
      { className: twind(className), ...rest },
      children
    );
  };
}

const renderedTags = {}

for(const i in tags){
  renderedTags[i] = createComponent(tags[i])
}

const tw = {
  ...renderedTags,
};
export default tw;
