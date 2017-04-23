import React from 'react';
import { Filter as CrudFilter, TextInput } from 'rest-ui/lib/mui';
import { translate } from 'rest-ui';
import Chip from 'material-ui/Chip';

const QuickFilter = translate(({ label, translate }) => <Chip style={{ marginBottom: 8 }}>{translate(label)}</Chip>);

const Filter = ({ ...props }) => (
    <CrudFilter {...props}>
        <TextInput label="post.list.search" source="q" alwaysOn />
        <TextInput source="title" defaultValue="Qui tempore rerum et voluptates" />
        <QuickFilter label="resources.posts.fields.commentable" source="commentable" defaultValue={true} />
    </CrudFilter>
);

export default Filter;