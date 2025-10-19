import type { Meta, StoryObj } from "@storybook/react-vite";

import { MixBlendModeDifference } from "./MixBlendModeDifference";
import { MouseScrollIcon, SpiralIcon } from "@phosphor-icons/react";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Sept 25/ 25.09.24 - Mix-Blend-Mode: Difference",
  component: MixBlendModeDifference,
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

  args: { mode: "difference" },
} satisfies Meta<typeof MixBlendModeDifference>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "difference",
    className: "cover",
  },
  render: (args) => (
    <div className="default-container">
      <MixBlendModeDifference {...args}>
        <div className="covertype">
          <SpiralIcon size="5rem" />
          Blend
        </div>
      </MixBlendModeDifference>
      <section className="section dark" />
      <section className="section light" />
    </div>
  ),
};

export const Scrolling: Story = {
  args: {
    mode: "difference",
    className: "sticky-header",
  },
  render: (args) => (
    <div className="scroll-container light">
      <MixBlendModeDifference {...args}>
        <div className="logotype">
          <MouseScrollIcon size={32} weight="fill" />
          Scroll
        </div>
      </MixBlendModeDifference>
      <section className="section dark" />
      <section className="section light" />
      <section className="section dark" />
      <section className="section light" />
      <section className="section dark" />
    </div>
  ),
};

export const OverAnImage: Story = {
  args: {
    mode: "difference",
    className: "overlay-image-inner",
  },
  render: (args) => (
    <div className="overlay-image">
      <MixBlendModeDifference {...args}>
        <span className="covertype">San Francisco</span>
      </MixBlendModeDifference>
    </div>
  ),
};

export const AnimatedCircles: Story = {
  args: {
    mode: "difference",
    className: "animated-circle circle light",
  },
  render: (args) => (
    <div className="circle-wrapper dark">
      <div className="circle light"></div>
      <div className="circle light"></div>
      <div className="circle light"></div>
      <MixBlendModeDifference {...args}></MixBlendModeDifference>
    </div>
  ),
};
