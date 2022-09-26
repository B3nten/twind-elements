import { tw as twind } from "twind";

import type { ComponentPropsWithRef } from "react";
import { createElement } from "react";

const variants = [
  "tw-",
  "base",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "twoxl",
  "threexl",
  "hover",
] as const;

const tags = [
  "a",
  "abbr",
  "area",
  "article",
  "aside",
  "blockquote",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "del",
  "details",
  "dialog",
  "div",
  "em",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "i",
  "iframe",
  "img",
  "input",
  "label",
  "li",
  "link",
  "map",
  "menu",
  "nav",
  "ol",
  "option",
  "output",
  "p",
  "pre",
  "progress",
  "section",
  "select",
  "small",
  "span",
  "strong",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "tr",
  "u",
  "ul",
  "video",
] as const;

type TType = typeof tags[number];

type TVariants = `${string | never}${typeof variants[number]}${string | never}`;

type TCustomProps = { [K in TVariants]?: string | string[] } & {
  [K in typeof variants[number]]?: string | string[];
};

export type TPolymorphicProps<Tag extends TType> =
  ComponentPropsWithRef<Tag> & { readonly type?: Tag } & TCustomProps;

function createComponent<T extends TType>(
  tag: T
): ({ type, ...props }: TPolymorphicProps<T>) => React.DOMElement<any, any> {
  return function ({ type = tag, ...props }: TPolymorphicProps<T>) {
    const { className, children, ...rest } = props;
    let classes = []
    for (const prop of Object.keys(rest)) {
      for (const variant of variants) {
        if (prop.includes(variant)) {
          // This is a valid prop
          const validProp = prop.replaceAll("tw-", "").replaceAll("_", ":")
          if(validProp === 'base'){
            classes.push(rest[prop])
          } else{
            classes.push(validProp + ":(" + rest[prop] + ")")
          }
        }
      }
    }
    console.log(classes)
    return createElement(
      type,
      { className: twind(className, classes), ...rest },
      children
    );
  };
}

const tw = {} as { [K in TType]: ReturnType<typeof createComponent> };

tags.forEach((tag) => {
  tw[tag] = createComponent(tag);
});

export default tw;
