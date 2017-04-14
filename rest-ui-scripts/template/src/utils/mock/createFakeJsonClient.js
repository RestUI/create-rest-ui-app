import jsonRestClient from 'aor-json-rest-client';
import addUploadFeature from '../addUploadFeature';

export default function createFakeJsonClient(data) {
    const restClient = jsonRestClient(data, true);
    const uploadCapableClient = addUploadFeature(restClient);

    return (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(uploadCapableClient(type, resource, params)), 1000));
}