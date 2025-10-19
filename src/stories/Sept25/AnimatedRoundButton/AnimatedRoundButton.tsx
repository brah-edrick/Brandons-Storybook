import "./styles.scss";
import { Pause, Play, Stop, Rewind, Shuffle, Repeat } from "phosphor-react";

type AllowedIcons = "Play" | "Pause" | "Stop" | "Rewind" | "Shuffle" | "Repeat";

type Props = {
  size: "small" | "medium" | "large";
  icon: AllowedIcons;
  color: "yellow" | "blue" | "green" | "red" | "purple" | "orange" | "pink";
};

export const iconMap: Record<AllowedIcons, React.ComponentType<any>> = {
  Play,
  Pause,
  Stop,
  Rewind,
  Shuffle,
  Repeat,
};

export const AnimatedMediaButton = ({ size, icon, color }: Props) => {
  const Icon = iconMap[icon];
  return (
    <button className={`animated-media-button ${size} ${color}`}>
      <span className="animated-media-button-icon">
        <Icon weight="fill" />
      </span>
    </button>
  );
};

export default AnimatedMediaButton;
