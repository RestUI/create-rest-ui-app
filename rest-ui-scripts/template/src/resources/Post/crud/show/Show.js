import React from 'react';
import { Datagrid, DateField, EditButton, ReferenceManyField, RichTextField, Show as CrudShow, SimpleShowLayout, TextField } from 'rest-ui/lib/mui';
import Title from '../../common/Title';

const Show = ({ ...props }) => (
    <CrudShow title={<Title key="post.edit.title"/>} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="teaser" />
            <RichTextField source="body" stripTags={false} />
            <DateField source="published_at" style={{ fontStyle: 'italic' }} />
            <TextField source="average_note" />
            <ReferenceManyField label="resources.posts.fields.comments" reference="comments" target="post_id" sort={{ field: 'created_at', order: 'DESC' }}>
                <Datagrid selectable={false}>
                    <DateField source="created_at" />
                    <TextField source="author.name" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
            <TextField source="views" />
        </SimpleShowLayout>
    </CrudShow>
);

export default Show;