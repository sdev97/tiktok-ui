import { HeaderOnly } from '~/components/Layout';

import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import routes from '~/config/routesConfig';

// Public Route
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload, layout: HeaderOnly },
    { path: routes.search, component: Search, layout: null },
];

// Private Route
const privateRoutes = [];

export { publicRoutes, privateRoutes };
