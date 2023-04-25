import {PATH_DASHBOARD} from '../../routes/paths';
import SvgIconStyle from "../../components/SvgIconStyle";


const getIcon = (name) => <SvgIconStyle src={`/assets/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
    dashboard: getIcon('ic_dashboard'),
    ticket: getIcon('ic_mail'),
    services: getIcon('ic_kanban'),
    products: getIcon('ic_ecommerce'),
};

/**
 * NavConfig Owner Panel
 * @type {[{subheader: string, items: [{path: string, icon: JSX.Element, title: string},{path: string, icon: JSX.Element, title: string},{path: string, icon: JSX.Element, title: string},{path: string, icon: JSX.Element, title: string}]},{subheader: string, items: [{path: string, icon: JSX.Element, title: string},{path: string, icon: JSX.Element, title: string}]},{subheader: string, items: [{path: string, icon: JSX.Element, title: string}]}]}
 */

const NavConfigOwner = [
  {
    items: [
        { title: 'داشبورد', path: PATH_DASHBOARD.dashboard, icon: ICONS.dashboard },
        { title: 'تیکت', path: PATH_DASHBOARD.tickets, icon: ICONS.ticket },
        { title: 'خدمات', path: PATH_DASHBOARD.services, icon: ICONS.services },
        { title: 'محصولات', path: PATH_DASHBOARD.products, icon: ICONS.products },
    ],
  },
];

export default NavConfigOwner;
