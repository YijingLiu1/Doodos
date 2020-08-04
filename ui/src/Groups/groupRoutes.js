import NotFound from '../NotFound.jsx';
import GroupPage from './GroupPage.jsx';
import Dashboard from './Dashboard.jsx';
import User from "../User/User.jsx";
import Post from "../Discover/Post.jsx";
import Event from "../Discover/Event.jsx";
import Register from "../User/Register.jsx";

const groupRoutes = [
    { path: '/groups/dashboard', component: Dashboard },
    { path: '/groups/:id', component: GroupPage },
    { path: '*', component: NotFound },
];

export default groupRoutes;
