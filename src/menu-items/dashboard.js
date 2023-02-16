import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const icons = {
    DashboardCustomizeOutlinedIcon,
    GroupOutlinedIcon
}

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: 'dashboard/default',
            icon: icons.DashboardCustomizeOutlinedIcon
        },
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: 'users',
            icon: icons.GroupOutlinedIcon
        }
    ]
}

export default dashboard