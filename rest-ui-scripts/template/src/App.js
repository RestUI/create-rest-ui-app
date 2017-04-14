import React from 'react';

import { Admin, Resource, englishMessages, resolveBrowserLocale } from 'rest-ui';
import { Delete } from 'rest-ui/lib/mui';

import jsonRestClient from 'aor-json-rest-client';
import frenchMessages from 'aor-language-french';

import addUploadFeature from './utils/addUploadFeature';

import { PostList, PostCreate, PostEdit, PostShow, PostIcon } from './resources/posts';
import { CommentList, CommentEdit, CommentCreate, CommentIcon } from './resources/comments';

import data from './utils/data';
import * as customMessages from './i18n';

const restClient = jsonRestClient(data, true);
const uploadCapableClient = addUploadFeature(restClient);
const delayedRestClient = (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(uploadCapableClient(type, resource, params)), 1000));

export default class App extends React.Component {
    render () {
        const messages = {
            fr: { ...frenchMessages, ...customMessages.fr },
            en: { ...englishMessages, ...customMessages.en },
        };

        return (
            <Admin restClient={delayedRestClient} title="Example Admin" locale={resolveBrowserLocale()} messages={messages}>
                <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} remove={Delete} icon={PostIcon} />
                <Resource name="comments" list={CommentList} create={CommentCreate} edit={CommentEdit} remove={Delete} icon={CommentIcon} />
            </Admin>
        )
    }
}