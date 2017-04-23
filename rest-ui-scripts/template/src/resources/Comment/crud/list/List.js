import React from 'react';
import { List as CrudList, Responsive, SimpleList } from 'rest-ui/lib/mui';
import PersonIcon from 'material-ui/svg-icons/social/person';
import Avatar from 'material-ui/Avatar';

import Grid from './Grid';
import Filter from './Filter';
import Pagination from './Pagination';

const MobileList = (props) => (
    <SimpleList
        primaryText={record => record.author.name}
        secondaryText={record => record.body}
        secondaryTextLines={2}
        tertiaryText={record => new Date(record.created_at).toLocaleDateString()}
        leftAvatar={() => <Avatar icon={<PersonIcon />} />}
        {...props}
    />
);

const List = ({ ...props }) => (
    <CrudList {...props} perPage={6} filters={<Filter />} pagination={<Pagination />}>
        <Responsive small={<MobileList />} medium={<Grid />} />
    </CrudList>
);

export default List;