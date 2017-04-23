import React from 'react';
import { translate } from 'rest-ui';

const Title = translate(({ record, key, translate }) => {
    return <span>{record ? translate(key, { title: record.title }) : ''}</span>;
});

export default Title;