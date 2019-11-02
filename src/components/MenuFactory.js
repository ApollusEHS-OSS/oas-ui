import React from 'react';
import OasService from '../services/OasService';
import Menu from '../pages/menu/Menu';
import PropTypes from 'prop-types';

MenuFactory.propTypes = {
  match: PropTypes.object
};

export default function MenuFactory(props) {
  const categories = OasService.getCategories();
  const category = props.match.params.category ? props.match.params.category : categories[0];
  return (
    <Menu categories={categories}
          category={category}
          item={props.match.params.item}/>
  );
}