import type { Meta, StoryObj } from "@storybook/react-vite";

import { AnimatedMediaButton, iconMap } from "./AnimatedRoundButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Sept 25/ 25.09.23 - AnimatedMediaButton",
  component: AnimatedMediaButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(iconMap),
      description: "Name of the Phosphor icon to display",
    },
    color: {
      control: "select",
      options: ["yellow", "blue", "green", "red", "purple", "orange", "pink"],
      description: "Color theme for the button",
    },
  },
  args: { size: "large", icon: "Play", color: "yellow" },
} satisfies Meta<typeof AnimatedMediaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    icon: "Play",
    color: "yellow",
  },
};

export const WithPause: Story = {
  args: {
    size: "medium",
    icon: "Pause",
    color: "green",
  },
};

export const WithStop: Story = {
  args: {
    size: "small",
    icon: "Stop",
    color: "red",
  },
};
