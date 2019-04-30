
import { blocks, data, i18n } from 'wp';
const { registerBlockType } = blocks;
const { dispatch, select } = data;
const { __ } = i18n;

// TODO: Import each block herer
import * as hero from './hero';
import * as button from './button';
import * as featuredSolution from './featured-solution';

const blockList = [
  hero,
  button,
  featuredSolution,
];

// Category name and slug
const category = {
  slug: 'ibm', // needs to match the css class of the block container: ".wp-block-cloudblocks-[block-name]"
  title: __('IBM Blocks'),
};

// Add the new category to the list
const currentCategories = select('core/blocks').getCategories().filter(item => item.slug !== category.slug);
dispatch('core/blocks').setCategories([ category, ...currentCategories ]);

// Register each block
blockList.forEach(b => {
  registerBlockType(`${category.slug}/${b.name}`, { category: category.slug, ...b.settings });
});
