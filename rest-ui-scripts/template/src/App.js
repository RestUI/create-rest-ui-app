import React, { Component } from 'react';

import { Admin, Resource } from 'rest-ui';
import { Delete } from 'rest-ui/lib/mui';

import Post from './resources/Post';
import Comment from './resources/Comment';

//Use this client for test purpose only
import createMockJsonClient from './utils/mock/createFakeJsonClient';
import mockData from './utils/mock/data';

import messages from './i18n';
import theme from './theme';

export default class App extends Component {
    render () {
        return (
            <Admin title="Rest UI Admin" restClient={createMockJsonClient(mockData)} locale="en" messages={messages} theme={theme}>
                <Resource name="posts" list={Post.List} create={Post.Create} edit={Post.Edit} show={Post.Show} remove={Delete}/>
                <Resource name="comments" list={Comment.List} create={Comment.Create} edit={Comment.Edit} remove={Delete}/>
            </Admin>
        )
    }
}