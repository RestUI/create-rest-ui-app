import React from 'react';
import {
    Edit as CrudEdit,
    SimpleForm,
    DisabledInput,
    ReferenceInput,
    AutocompleteInput,
    TextInput,
    DateInput,
    LongTextInput
} from 'rest-ui/lib/mui';

const Edit = ({ ...props }) => (
    <CrudEdit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput source="post_id" reference="posts" perPage={5} sort={{ field: 'title', order: 'ASC' }}>
                <AutocompleteInput optionText="title" />
            </ReferenceInput>
            <TextInput source="author.name" validation={{ minLength: 10 }} />
            <DateInput source="created_at" />
            <LongTextInput source="body" validation={{ minLength: 10 }} />
        </SimpleForm>
    </CrudEdit>
);

export default Edit;