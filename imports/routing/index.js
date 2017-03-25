import route from './router.js';
import Login from '/imports/ui/pages/login';
import Register from '/imports/ui/pages/register';
import Donuts from '/imports/ui/pages/donutsList';
import DonutsCreate from '/imports/ui/pages/donutsCreate';
import DonutEdit from '/imports/ui/pages/donutEdit';

route('/login', Login);
route('/register', Register);
route('/donuts', Donuts, {roles: 'USER'});
route('/donuts/create', DonutsCreate);
route('/donut/edit/:id', DonutEdit);
