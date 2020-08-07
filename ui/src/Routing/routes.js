import NotFound from '../NotFound.jsx';
import Category from "../Categories/Category.jsx";
import Discover from "../Discover/Discover.jsx";
import DoodleMaps from "../DoodleMaps/DoodleMaps.jsx";
import Store from "../Store/Store.jsx";
import User from "../User/User.jsx";
import Post from "../Discover/Post.jsx";
import Event from "../Discover/Event.jsx";
import Register from "../User/Register.jsx";
import About from "../About.jsx";
import Dashboard from "../User/Dashboard.jsx";
import Item from '../Store/ItemPage.jsx';

const routes = [
    { path: '/discover', component: Discover },
    { path: '/category', component: Category },
    { path: '/doodlemaps', component: DoodleMaps },
    { path: '/store', component: Store },
    { path: '/post/:id', component: Post },
    { path: '/item/:id', component: Item },
    { path: '/user/:id/:tab?', component: User },
    { path: '/event/:id/:tab?', component: Event },
    { path: '/register', component: Register },
    { path: '/dashboard/:tab?', component: Dashboard },
    { path: '/about', component: About },
    { path: '*', component: NotFound },
];

export default routes;
