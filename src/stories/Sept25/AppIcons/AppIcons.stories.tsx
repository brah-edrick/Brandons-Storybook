import type { Meta, StoryObj } from "@storybook/react-vite";

import { AppIcon, Fauxtos, Lazy, Puzzle, Strata, Taurus } from "./AppIcons";
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

export const FauxtosIcon: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <div className="app-icons-container">
      <AppIcon {...args}>
        <Fauxtos />
      </AppIcon>
    </div>
  ),
};

export const TaurusIcon: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <div className="app-icons-container">
      <AppIcon {...args}>
        <Taurus />
      </AppIcon>
    </div>
  ),
};

export const PuzzleIcon: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <div className="app-icons-container">
      <AppIcon {...args}>
        <Puzzle />
      </AppIcon>
    </div>
  ),
};

export const LazyIcon: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <div className="app-icons-container">
      <AppIcon {...args}>
        <Lazy />
      </AppIcon>
    </div>
  ),
};

export const StrataIcon: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <div className="app-icons-container">
      <AppIcon {...args}>
        <Strata />
      </AppIcon>
    </div>
  ),
};
