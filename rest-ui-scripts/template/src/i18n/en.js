export default {
    resources: {
        posts: {
            name: 'Post |||| Post',
            fields: {
                allow_comments: 'Allo comments?',
                average_note: 'Average note',
                body: 'Body',
                comments: 'Comment',
                commentable: 'Commentable',
                created_at: 'Created at',
                notifications: 'Notifications recipients',
                nb_view: 'Nb views',
                password: 'Password (if protected post)',
                pictures: 'Related Pictures',
                published_at: 'Published at',
                teaser: 'Teaser',
                title: 'Title',
                views: 'Vues',
            },
        },
        comments: {
            name: 'Comment |||| Comment',
            fields: {
                body: 'Body',
                created_at: 'Created at',
                post_id: 'Post',
                author: {
                    name: 'Author',
                },
            },
        },
    },
    post: {
        list: {
            search: 'Search',
        },
        form: {
            summary: 'Summary',
            body: 'Body',
            miscellaneous: 'Miscellaneous',
            comments: 'Comment',
        },
        edit: {
            title: 'Post "%{title}"',
        },
    },
    comment: {
        list: {
            about: 'About',
        },
    },
};
