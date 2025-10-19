import type { PropsWithChildren } from "react";
import "./styles.scss";

type Props = {
  size: "small" | "medium" | "large";
} & PropsWithChildren;

export const AppIcon = ({ children, size }: Props) => (
  <div className={`app-icon ${size}`}>{children}</div>
);

export default AppIcon;
