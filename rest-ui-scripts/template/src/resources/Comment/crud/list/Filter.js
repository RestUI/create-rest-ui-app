import React from 'react';
import { Filter as CrudFilter, ReferenceInput, SelectInput } from 'rest-ui/lib/mui';

const Filter = ({ ...props }) => (
    <CrudFilter {...props}>
        <ReferenceInput source="post_id" reference="posts">
            <SelectInput optionText="title" />
        </ReferenceInput>
    </CrudFilter>
);

export default Filter;