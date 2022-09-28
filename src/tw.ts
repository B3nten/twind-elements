import { tw as twind } from "twind";
import type { ComponentPropsWithRef } from "react";
import { createElement } from "react";

const variants = [
  "tw-",
  "base",
  "modifiers",
  "pog",
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

const safeWords = [
  "tw",
  "base",
  "modifiers",
  "pog",
] as const

type TType = typeof tags[number];

type TCustomProps = { [K in typeof variants[number]]?: string | string[] | TwClassObject } 

type TPolymorphicProps<Tag extends TType> = ComponentPropsWithRef<Tag> & {
  readonly type?: Tag;
} & TCustomProps;


function wrapVariant(str: string, variant: string) {
  if (safeWords.some(s => s === variant)) return str;
  return variant + ":(" + str + ")";
}

function createComponent<T extends TType>(
  tag: T
): ({ type, ...props }: TPolymorphicProps<T>) => React.DOMElement<any, any> {
  return function ({ type = tag, ...props }: TPolymorphicProps<T>) {
    const { className, children, ...rest } = props;
    const classes = [];
    for (const [key, value] of Object.entries(rest)) {
      const validProp = key.replaceAll("t-", "").replaceAll("_", ":");
      if (!variants.some((v) => validProp.includes(v))) continue
      if (typeof value === "string") {
        classes.push(wrapVariant(value, validProp));
      } else if (Array.isArray(value)) {
        classes.push(wrapVariant(value.join(' '), validProp));
      } else if (typeof value === 'object'){
        classes.push(wrapVariant(readObject(value), validProp));
      }
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

export function readObject(obj: TwClassObject) {
  const classes: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        if (typeof item === "string") {
          classes.push(wrapVariant(item, key));
        } else if (Array.isArray(item)) {
          throw new Error("Array of array is not supported");
        } else if (typeof item === "object") {
          classes.push(wrapVariant(readObject(item), key));
        }
      }
    } else if (typeof value === "string") {
      classes.push(wrapVariant(value, key));
    } else if (typeof value === "object") {
      classes.push(wrapVariant(readObject(value), key));
    } else {
      throw new Error("The value provided is not a valid class object.");
    }
  }
  return twind(classes.join(" "));
}

const pog = {
  parse: (obj: TwClassObject) => readObject(obj)
} as {parse: typeof readObject} & { [K in TType]: ReturnType<typeof createComponent> }

tags.forEach((tag) => {
  pog[tag] = createComponent(tag);
});
export default pog;
