import type { Meta, StoryObj } from "@storybook/react-vite";

import { MacOSDock } from "./MacOSDock";
import AppIcon, {
  Fauxtos,
  Lazy,
  Puzzle,
  Strata,
  Taurus,
} from "../AppIcons/AppIcons";
import { FolderIcon, GearIcon } from "@phosphor-icons/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "2025/ Sept 26th - MacOS Dock",
  component: MacOSDock,
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
} satisfies Meta<typeof MacOSDock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <MacOSDock {...args}>
      <div className="app-icon-wrapper">
        <AppIcon size="small">
          <FolderIcon color="cornflowerblue" weight="fill" size={36} />
        </AppIcon>
      </div>
      <div className="app-icon-wrapper">
        <AppIcon size="small">
          <Lazy />
        </AppIcon>
      </div>
      <div className="app-icon-wrapper">
        <AppIcon size="small">
          <Fauxtos />
        </AppIcon>
      </div>
      <div className="app-icon-wrapper">
        <AppIcon size="small">
          <Puzzle />
        </AppIcon>
      </div>
      <div className="app-icon-wrapper">
        <AppIcon size="small">
          <Taurus />
        </AppIcon>
      </div>
      <div className="app-icon-wrapper">
        <AppIcon size="small">
          <Strata />
        </AppIcon>
      </div>
      <div className="app-icon-wrapper">
        <AppIcon size="small">
          <GearIcon color="#333" size={36} />
        </AppIcon>
      </div>
    </MacOSDock>
  ),
};
