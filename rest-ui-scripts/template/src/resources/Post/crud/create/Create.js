import React from 'react';
import {
    BooleanInput,
    Create as CrudCreate,
    DateInput,
    NumberInput,
    SimpleForm,
    TextInput,
} from 'rest-ui/lib/mui';
import RichTextInput from 'aor-rich-text-input';

const Create = ({ ...props }) => (
    <CrudCreate {...props}>
        <SimpleForm defaultValue={{ average_note: 0 }} validation={(values) => {
            const errors = {};
            ['title', 'teaser'].forEach((field) => {
                if (!values[field]) {
                    errors[field] = ['Required field'];
                }
            });

            if (values.average_note < 0 || values.average_note > 5) {
                errors.average_note = ['Should be between 0 and 5'];
            }

            return errors;
        }}>
            <TextInput source="title" />
            <TextInput source="password" type="password" />
            <TextInput source="teaser" options={{ multiLine: true }} />
            <RichTextInput source="body" />
            <DateInput source="published_at" defaultValue={() => new Date()} />
            <NumberInput source="average_note" />
            <BooleanInput source="commentable" defaultValue={true} />
        </SimpleForm>
    </CrudCreate>
);

export default Create;