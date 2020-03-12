import React from 'react';
import C from '../components/Documents/C_Logo/C_Logo'

export default {
  title: 'C Logo color by Category',
  component: C,
  excludeStories: /.*Data$/
};

export const CategoryIceCream = () => <C category="Ice Cream" style={{top: 0}}/>
export const CategoryRandomString = () => <C category="dasgfagagdagdg" style={{top: 0}}/>
export const Category1 = () => <C category="Category 1" style={{top: 0}}/>
