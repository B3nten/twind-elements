import React, { useRef, createElement, PropsWithChildren } from "react";

type ElementProps<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : never;

type Props = {
  tagName?: React.ComponentType | keyof JSX.IntrinsicElements;
};

function Editable({ tagName = "div", ...props }: PropsWithChildren<Props>) {
  const elementProps: ElementProps<typeof tagName> = {
    ...props,
  };

  return createElement(tagName, elementProps, elementProps.children);
}

export default Editable;
