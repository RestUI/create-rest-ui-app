import React from 'react';

import { Admin, Resource, englishMessages, resolveBrowserLocale } from 'rest-ui';
import { Delete } from 'rest-ui/lib/mui';

import Posts from './resources/posts';
import Comments from './resources/comments';

//Use this client for test purpose only
import createFakeJsonClient from './utils/mock/createFakeJsonClient';
import fakeData from './utils/mock/data';

import * as customMessages from './i18n';


export default class App extends React.Component {
    render () {
        const messages = {
            en: {
                ...englishMessages,
                ...customMessages.en
            }
        };

        return (
            <Admin restClient={createFakeJsonClient(fakeData)} locale={resolveBrowserLocale()} title="Rest UI Admin" messages={messages}>
                <Resource name="posts" list={Posts.List} create={Posts.Create} edit={Posts.Edit} show={Posts.Show} remove={Delete}/>
                <Resource name="comments" list={Comments.List} create={Comments.Create} edit={Comments.Edit} remove={Delete}/>
            </Admin>
        )
    }
}