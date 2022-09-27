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
  "2xl",
  "hover",
  "focus",
  "focus-within",
  "focus-visible",
  "active",
  "visited",
  "target",
  "first",
  "last",
  "only",
  "odd",
  "odd",
  "even",
  "first-of-type",
  "last-of-type",
  "only-of-type",
  "empty",
  "disabled",
  "enabled",
  "checked",
  "indeterminate",
  "default",
  "required",
  "valid",
  "invalid",
  "in-range",
  "out-of-range",
  "placeholder-shown",
  "autofill",
  "read-only",
  "before",
  "after",
  "file",
  "marker",
  "selection",
  "first-letter",
  "first-line",
  "dialog",
  "dark",
  "motion-reduce",
  "motion-safe",
  "contrast-more",
  "contrast-less",
  "portrait",
  "landscape",
  "print",
  "rtl",
  "ltr",
  "open",
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

type TVariants = `t-${typeof variants[number]}${string | never}`;

type TCustomProps = { [K in TVariants]?: string | string[] } & {
  [K in typeof variants[number]]?: string | string[];
};

type TPolymorphicProps<Tag extends TType> = ComponentPropsWithRef<Tag> & {
  readonly type?: Tag;
} & TCustomProps;

function createComponent<T extends TType>(
  tag: T
): ({ type, ...props }: TPolymorphicProps<T>) => React.DOMElement<any, any> {
  return function ({ type = tag, ...props }: TPolymorphicProps<T>) {
    const { className, children, ...rest } = props;
    const classes = [];
    for (const prop of Object.keys(rest)) {
      // for (const variant of variants) {
      if (prop.indexOf("t-") === 0) {
        const validProp = prop.replaceAll("t-", "").replaceAll("_", ":");
        // if(validProp === 'variants') return
        if (validProp === "base") {
          //@ts-ignore // will fix later
          if (typeof rest[prop] === "string") {
            classes.push(rest[prop]);
          } else {
            classes.push(rest[prop].join(" "));
          }
        } else {
          //@ts-ignore // will fix later
          if (typeof rest[prop] === "string") {
            classes.push(validProp + ":(" + rest[prop] + ")");
          } else {
            classes.push(validProp + ":(" + rest[prop].join(" ") + ")");
          }
        }
      }
      // }
    }
    return createElement(
      type,
      { className: twind(className, classes), ...rest },
      children
    );
  };
}

type TwVariantValue = string | TwClassObject | Array<string | TwClassObject>;

type TwClassObject = { [K in typeof variants[number]]?: TwVariantValue } & {
  [K in `${string | never}${typeof variants[number]}${
    | string
    | never}`]?: TwVariantValue;
};

function readObject(obj: TwClassObject) {
  const keys = Object.keys(obj);
  const classes: string[] = [];
  for (const key in keys) {
    if (Array.isArray(keys[key])) {
      readObject(keys[key]);
    } else if (typeof keys[key] === "string") {
      // handle as string
    } else if (typeof keys[key] === "object") {
      // handle as array
    }
  }
  return classes.join(" ");
}

const tw = {
  parse: (obj: TwClassObject) => readObject(obj),
} as
  | { [K in TType]: ReturnType<typeof createComponent> }
  | { parse: typeof readObject };

tags.forEach((tag) => {
  tw[tag] = createComponent(tag);
});

export default tw;
