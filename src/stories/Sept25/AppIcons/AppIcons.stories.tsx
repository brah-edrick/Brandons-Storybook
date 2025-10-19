import type { Meta, StoryObj } from "@storybook/react-vite";

import { AppIcon } from "./AppIcons";
import { ApertureIcon } from "@phosphor-icons/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "2025/ Sept 25th - App Icons",
  component: AppIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <div className="app-icons-container">
      <AppIcon {...args}>
        <ApertureIcon
          weight="fill"
          color="#333"
          size={args.size === "small" ? 42 : args.size === "medium" ? 64 : 86}
        />
      </AppIcon>
    </div>
  ),
};

export const Fauxtos: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <div className="app-icons-container">
      <AppIcon {...args}>
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
      </AppIcon>
    </div>
  ),
};

export const Taurus: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <div className="app-icons-container">
      <AppIcon {...args}>
        <div className="star scale"></div>
      </AppIcon>
    </div>
  ),
};

export const Puzzle: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <div className="app-icons-container">
      <AppIcon {...args}>
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
      </AppIcon>
    </div>
  ),
};

export const Lazy: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <div className="app-icons-container">
      <AppIcon {...args}>
        <div className="lazy">
          <div
            className="blue"
            style={{ gridColumn: "2", gridRow: "1 / 3" }}
          ></div>
          <div
            className="blue"
            style={{
              gridColumn: "1",
              gridRow: "2",
              borderBottomRightRadius: 0,
            }}
          ></div>
          <div
            className="green"
            style={{ gridColumn: "3 / 5", gridRow: "2" }}
          ></div>
          <div
            className="green"
            style={{
              gridColumn: "3",
              gridRow: "1",
              borderBottomLeftRadius: 0,
            }}
          ></div>
          <div
            className="red"
            style={{ gridColumn: "3", gridRow: "3 / 5" }}
          ></div>
          <div
            className="red"
            style={{
              gridColumn: "4",
              gridRow: "3",
              borderTopLeftRadius: 0,
            }}
          ></div>
          <div
            className="yellow"
            style={{ gridColumn: "1 / 3", gridRow: "3" }}
          ></div>
          <div
            className="yellow"
            style={{
              gridColumn: "2",
              gridRow: "4",
              borderTopRightRadius: 0,
            }}
          ></div>
        </div>
      </AppIcon>
    </div>
  ),
};

export const Strata: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <div className="app-icons-container">
      <AppIcon {...args}>
        <div className="strata">
          <div className="triangle"></div>
          <div className="triangle"></div>
        </div>
      </AppIcon>
    </div>
  ),
};
