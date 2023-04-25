/***
 * Function Root And Sub Link
 * @param root
 * @param sublink
 * @returns {string}
 */

function path(root, sublink) {
    return `${root}${sublink}`;
}

/***
 * Add Route Constant
 * @type {string}
 */

const ROOTS_DASHBOARD = '/';


/***
 * PATH PAGE 404
 * @type {{page404: string}}
 */

export const PATH_PAGE = {
    page404: '/404',
}

/***
 * PATH DASHBOARD ROUTE
 * @type {{cars: string, companies: string, tickets: string, root: string, banners: string, dashboard: string, notifications: string}}
 */

export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    dashboard:path(ROOTS_DASHBOARD , ""),
    services:path(ROOTS_DASHBOARD , "services"),
    products:path(ROOTS_DASHBOARD , "products"),
    tickets:path(ROOTS_DASHBOARD , "tickets"),
}