import type { PropsWithChildren } from "react";
import "./styles.scss";

type AllowedModes = "difference";

type Props = {
  mode: AllowedModes;
  className?: string;
} & PropsWithChildren;

export const MixBlendModeDifference = ({ mode, children, className }: Props) => (
  <div className={`mix-blend-mode-${mode} ${className}`}>{children}</div>
);

export default MixBlendModeDifference;
