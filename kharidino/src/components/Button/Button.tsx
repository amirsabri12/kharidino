import { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./Button.module.scss";

type Shape = "rectangel" | "circle";
type Variant = "solid" | "outlined";
type Size = "small" | "large";

type Props = ComponentProps<"button"> & {
  shape?: Shape;
  variant?: Variant;
  size?: Size;
};

function Button({
  children,
  variant = "solid",
  shape = "rectangel",
  size = "small",
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
