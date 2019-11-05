import React from 'react';
import PropTypes from 'prop-types';
import OasService from 'services/OasService';
import ResourceContent from 'pages/resource/ResourceContent';
import NotFound from 'pages/NotFound';

ResourceContentFactory.propTypes = {
  match: PropTypes.object
};

export default function ResourceContentFactory(props) {
  const resourceName = props.match.params['resource'];
  const resource = OasService.getResource(resourceName);
  return (
    resource ? <ResourceContent resource={resource}/> : <NotFound resource={resourceName}/>
  );
}
