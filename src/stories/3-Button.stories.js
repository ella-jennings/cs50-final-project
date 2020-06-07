import React from 'react';
import ResetButton from '../components/resetButton/resetButton';
import SettingsButton from '../components/settingsButton/settingsButton';
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: 'Buttons',
  component: ResetButton,
  decorators: [withKnobs]
};

export const resetButton = () => (
  <div style={
      {
        transform: "translateY(10em)",
        width: "100%",
        padding: "70px 0px",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "gray"
    }}>
    <ResetButton isWhite={boolean("isWhite", false)}/>
  </div>
);

export const settingsButton = () => (
  <div style={
      {
        transform: "translateY(10em)",
        width: "100%",
        display: "flex",
        justifyContent: "space-around"
    }}>
    <SettingsButton />
  </div>
);
