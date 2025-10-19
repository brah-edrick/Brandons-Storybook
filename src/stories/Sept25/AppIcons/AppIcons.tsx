import type { PropsWithChildren } from "react";
import "./styles.scss";

type Props = {
  size: "small" | "medium" | "large";
} & PropsWithChildren;

export const AppIcon = ({ children, size }: Props) => (
  <div className={`app-icon ${size}`}>{children}</div>
);

export default AppIcon;

export const Fauxtos = () => (
  <div className="flower scale">
    <div className="petal"></div>
    <div className="petal"></div>
    <div className="petal"></div>
    <div className="petal"></div>
    <div className="petal"></div>
    <div className="petal"></div>
    <div className="petal"></div>
    <div className="petal"></div>
  </div>
);

export const Taurus = () => <div className="star scale"></div>;

export const Puzzle = () => (
  <div className="puzzle">
    <div className="black" style={{ gridColumn: "1 / 3" }}></div>
    <div className="yellow"></div>
    <div className="blue"></div>
    <div className="blue"></div>
    <div className="green"></div>
    <div
      className="black"
      style={{ gridRow: "2 / 4", gridColumn: "3 / 5" }}
    ></div>
    <div className="black"></div>
    <div className="yellow"></div>
  </div>
);

export const Lazy = () => (
  <div className="lazy">
    <div className="blue" style={{ gridColumn: "2", gridRow: "1 / 3" }}></div>
    <div
      className="blue"
      style={{
        gridColumn: "1",
        gridRow: "2",
        borderBottomRightRadius: 0,
      }}
    ></div>
    <div className="green" style={{ gridColumn: "3 / 5", gridRow: "2" }}></div>
    <div
      className="green"
      style={{
        gridColumn: "3",
        gridRow: "1",
        borderBottomLeftRadius: 0,
      }}
    ></div>
    <div className="red" style={{ gridColumn: "3", gridRow: "3 / 5" }}></div>
    <div
      className="red"
      style={{
        gridColumn: "4",
        gridRow: "3",
        borderTopLeftRadius: 0,
      }}
    ></div>
    <div className="yellow" style={{ gridColumn: "1 / 3", gridRow: "3" }}></div>
    <div
      className="yellow"
      style={{
        gridColumn: "2",
        gridRow: "4",
        borderTopRightRadius: 0,
      }}
    ></div>
  </div>
);

export const Strata = () => (
  <div className="strata">
    <div className="triangle"></div>
    <div className="triangle"></div>
  </div>
);
