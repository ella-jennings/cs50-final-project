import React from 'react';
import City from '../components/city/city';
import { CityEnum, GetInitialCards } from '../constants';
import { withKnobs, select, text } from "@storybook/addon-knobs";

export default {
  title: 'City',
  component: City,
  decorators: [withKnobs]
};

export const city = () => (
  <City 
    colour={select("Colour", CityEnum, CityEnum.YELLOW)} 
    cards={GetInitialCards()}
    resetTotal={() => {return}}
    selectCard={() => {return}}
    total={text("total", 0)}
  />
);
