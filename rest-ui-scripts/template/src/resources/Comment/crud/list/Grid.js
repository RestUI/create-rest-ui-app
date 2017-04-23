import React from 'react';
import { DateField, EditButton, ReferenceField, TextField } from 'rest-ui/lib/mui';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import PersonIcon from 'material-ui/svg-icons/social/person';
import Avatar from 'material-ui/Avatar';
import { translate } from 'rest-ui';

const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top',
};

const Grid = translate(({ ids, data, basePath, translate }) => (
    <div style={{ margin: '1em' }}>
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardHeader
                    title={<TextField record={data[id]} source="author.name" />}
                    subtitle={<DateField record={data[id]} source="created_at" />}
                    avatar={<Avatar icon={<PersonIcon />} />}
                />
                <CardText>
                    <TextField record={data[id]} source="body" />
                </CardText>
                <CardText>
                    {translate('comment.list.about')}&nbsp;
                    <ReferenceField resource="comments" record={data[id]} source="post_id" reference="posts" basePath={basePath}>
                        <TextField source="title" />
                    </ReferenceField>
                </CardText>
                <CardActions style={{ textAlign: 'right' }}>
                    <EditButton resource="posts" basePath={basePath} record={data[id]} />
                </CardActions>
            </Card>,
        )}
    </div>
));

Grid.defaultProps = {
    data: {},
    ids: [],
};

export default Grid;