import React from 'react';
import ResetButton from '../components/resetButton/resetButton';
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: 'Reset Button',
  component: ResetButton,
  decorators: [withKnobs]
};

export const resetButton = () => (
  <div style={
      {
        transform: "translateY(10em)",
        width: "100%",
        display: "flex",
        justifyContent: "space-around"
    }}>
    <ResetButton />
  </div>
);