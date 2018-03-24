import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserList from 'src/components/Dashboard/Views/UserList.vue'
import OrderList from 'src/components/Dashboard/Views/OrderList.vue'
import Blocks from 'src/components/Dashboard/Views/Blocks.vue'
import Login from 'src/components/Dashboard/Views/Login.vue'

const routes = [
  {
    path: '/',
    component: Login,
    redirect: '/login'
  },{
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserList
      },
      {
        path: 'order-list',
        name: 'Order List',
        component: OrderList
      },
      {
        path: 'blocks',
        name: 'Blocks',
        component: Blocks
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
