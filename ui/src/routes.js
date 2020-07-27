import NotFound from './NotFound.jsx';
import Groups from "./Groups.jsx";
import Discover from "./Discover.jsx";
import DoodleMaps from "./DoodleMaps.jsx";
import Store from "./Store.jsx";
import User from "./User.jsx";
import Post from "./Post.jsx";

const routes = [
    { path: '/discover', component: Discover },
    { path: '/groups', component: Groups },
    { path: '/doodlemaps', component: DoodleMaps },
    { path: '/store', component: Store },
    { path: '/post/:id', component: Post },
    { path: '/user/:id/:tab?', component: User },
    { path: '*', component: NotFound },
];

export default routes;
