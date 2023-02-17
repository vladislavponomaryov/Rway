import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const icons = {
    LoginOutlinedIcon
}

const Authentication = {
    id: 'group-authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlinedIcon
        }
    ]
}

export default Authentication