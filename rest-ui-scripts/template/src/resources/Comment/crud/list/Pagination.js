import React from 'react';
import { translate } from 'rest-ui';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const Pagination = translate(({ page, perPage, total, setPage, translate }) => {
    const nbPages = Math.ceil(total / perPage) || 1;
    return (
        nbPages > 1 &&
        <Toolbar>
            <ToolbarGroup>
                {page > 1 &&
                <FlatButton primary key="prev" label={translate('aor.navigation.prev')} icon={<ChevronLeft />} onClick={() => setPage(page - 1)} />
                }
                {page !== nbPages &&
                <FlatButton primary key="next" label={translate('aor.navigation.next')} icon={<ChevronRight />} onClick={() => setPage(page + 1)} labelPosition="before" />
                }
            </ToolbarGroup>
        </Toolbar>
    );
});

export default Pagination;