import React from 'react';
import {
    Create as CrudCreate,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    DateInput,
    LongTextInput
} from 'rest-ui/lib/mui';

const Create = ({ ...props }) => (
    <CrudCreate {...props} defaultValues={{ created_at: new Date() }}>
        <SimpleForm>
            <ReferenceInput source="post_id" reference="posts" allowEmpty validation={{ required: true }}>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <DateInput source="created_at" />
            <LongTextInput source="body" />
        </SimpleForm>
    </CrudCreate>
);

export default Create;