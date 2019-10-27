import React from 'react';
import Properties from './properties/Properties';
import PropTypes from 'prop-types';
import Discriminator from "./discriminator/Discriminator";

class ComponentContent extends React.Component {

  render() {
    const component = this.props.component;
    const properties = this.getProperties(component);
    const requiredProperties = this.getRequiredProperties(component);
    return (
      <>
        <h2>{this.props.componentName}</h2>
        <p>{component.description}</p>
        {properties && <Properties properties={properties} required={requiredProperties}/>}
        {component.discriminator && <Discriminator discriminator={component.discriminator}/>}
        <pre>{JSON.stringify(component, null, 2)}</pre>
      </>
    );
  }

  getProperties = (component) => {
    let properties = component.properties;
    if (properties === undefined && component.allOf) {
      const allOfComponent = component.allOf.filter(value => value.properties);
      properties = allOfComponent.map(value => value.properties).pop();
    }
    return properties;
  };

  getRequiredProperties = (component) => {
    let requiredProperties = component.required;
    if (requiredProperties === undefined && component.allOf) {
      const allOfComponent = component.allOf.filter(value => value.properties);
      requiredProperties = allOfComponent.map(value => value.required).pop();
    }
    return requiredProperties;
  };
}

ComponentContent.propTypes = {
  component: PropTypes.object,
  componentName: PropTypes.string
};

export default ComponentContent;
