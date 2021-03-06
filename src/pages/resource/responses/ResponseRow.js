import React from 'react';
import PropTypes from 'prop-types';
import OasService from '../../../services/OasService';
import ComponentContent from '../../../pages/component/ComponentContent';
import ComponentLink from '../../../components/ComponentLink';
import ExpandableRow from '../../../components/expandablerow/ExpandableRow';
import ExpandableContent from '../../../components/expandablerow/ExpandableContent';

const ResponseRow = ({response}) => {
  let contentType;
  let componentName;
  if (response.content) {
    contentType = Object.keys(response.content)[0];
    componentName = response.content[contentType].schema.items
                    ? OasService.componentNameFromRef(response.content[contentType].schema.items.$ref)
                    : OasService.componentNameFromRef(response.content[contentType].schema.$ref);
  }

  const component = OasService.getComponent(componentName);
  return (
    <ExpandableRow
      disabledExpansion={component === undefined}
      content={
        <>
          <td>
            {response.httpStatus}
          </td>
          <td>
            {response.description}
          </td>
          <td>
            <ComponentLink componentName={componentName} />
          </td>
          <td>
            {contentType}
          </td>
        </>
      }
      expandableContent={
        <ExpandableContent>
          <ComponentContent componentName={componentName}/>
        </ExpandableContent>
      }
    />
  );
};

ResponseRow.propTypes = {
  response: PropTypes.object
};

export default ResponseRow;
