import type { PropsWithChildren } from "react";
import "./styles.scss";

type Props = {} & PropsWithChildren;

export const MacOSDock = ({ children }: Props) => (
  <div className={`macos-dock-container`}>{children}</div>
);

export default MacOSDock;
