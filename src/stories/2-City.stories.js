import React from 'react';
import City from '../components/city/city';
import { CityEnum } from '../constants';
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: 'City',
  component: City,
  decorators: [withKnobs]
};

export const city = () => (
  <City 
    colour={select("Colour", CityEnum, CityEnum.YELLOW)} 
    updateCityTotal={() => {return}}
  />
);
