import React from 'react';
import { BooleanField, Datagrid, DateField, EditButton, List as CrudList, NumberField, Responsive, ShowButton, SimpleList, TextField} from 'rest-ui/lib/mui';
import Filter from './Filter';

const titleFieldStyle = {
    maxWidth: '20em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};

const List = ({ ...props }) => (
    <CrudList {...props} filters={<Filter />} sort={{ field: 'published_at', order: 'DESC' }}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="title" style={titleFieldStyle} />
                    <DateField source="published_at" style={{ fontStyle: 'italic' }} />
                    <BooleanField source="commentable" />
                    <NumberField source="views" />
                    <EditButton />
                    <ShowButton />
                </Datagrid>
            }
        />
    </CrudList>
);

export default List;