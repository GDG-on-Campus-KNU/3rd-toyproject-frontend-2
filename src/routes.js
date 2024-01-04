import BillPage from './pages/BillPage';
import CallPage from './pages/CallPage';
import CartPage from './pages/CartPage';
import DrinkPage from './pages/DrinkPage';
import HomePage from './pages/HomePage';
import SnackPage from './pages/SnackPage';
import SoupPage from './pages/SoupPage';

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/order/soup',
        component: SoupPage,
    },
    {
        path: '/order/snack',
        component: SnackPage,
    },
    {
        path: '/order/drink',
        component: DrinkPage,
    },
    {
        path: '/order/cart',
        component: CartPage,
    },
    {
        path: '/order/bill',
        component: BillPage,
    },
    {
        path: '/order/call',
        component: CallPage,
    },
];

export default routes;
