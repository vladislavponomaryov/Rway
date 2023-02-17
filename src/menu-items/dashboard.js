import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

const icons = {
    DashboardCustomizeOutlinedIcon,
    GroupOutlinedIcon,
    AccountBoxOutlinedIcon,
    MessageOutlinedIcon,
    NewspaperOutlinedIcon
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
            url: '/dashboard/default',
            icon: icons.DashboardCustomizeOutlinedIcon
        },
        {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '/profile',
            icon: icons.AccountBoxOutlinedIcon
        },
        {
            id: 'messages',
            title: 'Messages',
            type: 'item',
            url: '/messages',
            icon: icons.MessageOutlinedIcon
        },
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/users',
            icon: icons.GroupOutlinedIcon
        },
        {
            id: 'news',
            title: 'News',
            type: 'item',
            url: '/news',
            icon: icons.NewspaperOutlinedIcon
        }
    ]
}

export default dashboard