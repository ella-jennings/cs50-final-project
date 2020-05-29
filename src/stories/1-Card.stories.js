import React from 'react';
import Card from '../components/card/card';
import { CityEnum, CardOrder } from '../constants';
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs]
};

export const card = () => (
  <div style={{transform: "translateY(10em)", width: "100%"}}>
    <Card 
      colour={select("Colour", CityEnum, CityEnum.YELLOW)} 
      value={select("Value", CardOrder, "2")} 
      selected={boolean("Selected", false)}
    />
  </div>
);

