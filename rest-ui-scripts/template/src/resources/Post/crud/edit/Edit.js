import React from 'react';
import { BooleanInput, CheckboxGroupInput, Datagrid, DateField, DateInput, DisabledInput, Edit as CrudEdit, EditButton, FormTab, ImageField, ImageInput, LongTextInput, NumberInput, ReferenceManyField, TabbedForm, TextField, TextInput } from 'rest-ui/lib/mui';
import RichTextInput from 'aor-rich-text-input';
import Title from '../../common/Title';

const Edit = ({ ...props }) => (
    <CrudEdit title={<Title key="post.edit.title"/>} {...props}>
        <TabbedForm defaultValue={{ average_note: 0 }}>
            <FormTab label="post.form.summary">
                <DisabledInput source="id" />
                <TextInput source="title" validation={{ required: true }} />
                <CheckboxGroupInput
                    source="notifications"
                    choices={[
                        { id: 12, name: 'Ray Hakt' },
                        { id: 31, name: 'Ann Gullar' },
                        { id: 42, name: 'Sean Phonee' },
                    ]}
                />
                <LongTextInput source="teaser" validation={{ required: true }} />
                <ImageInput multiple source="pictures" accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>
            </FormTab>
            <FormTab label="post.form.body">
                <RichTextInput source="body" label="" validation={{ required: true }} addLabel={false} />
            </FormTab>
            <FormTab label="post.form.miscellaneous">
                <TextInput source="password" type="password" />
                <DateInput source="published_at" />
                <NumberInput source="average_note" validation={{ min: 0 }} />
                <BooleanInput source="commentable" defaultValue />
                <DisabledInput source="views" />
            </FormTab>
            <FormTab label="post.form.comments">
                <ReferenceManyField reference="comments" target="post_id" addLabel={false}>
                    <Datagrid>
                        <DateField source="created_at" />
                        <TextField source="author.name" />
                        <TextField source="body" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </CrudEdit>
);

export default Edit;