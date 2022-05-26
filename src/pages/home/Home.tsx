import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useRoutes} from 'react-router-dom'

import routes from '../../routes'

const drawerWidth = 240;

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        <div>
            <Tab component="a"
                 onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                     event.preventDefault();
                 }} {...props}/>
            {/*<Navigate to={props.href}/>*/}
        </div>
    );
}

interface Props {
    window?: () => Window;
}

export default function Home(props: Props) {

    const element = useRoutes(routes)

    const {window} = props;
    // 【响应式】移动端侧边栏展开
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // 控制抽屉
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // 当前页面
    const [pageId, setCurrentPage] = React.useState(0)
    const gotoPage = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentPage(newValue);
    };
    // 抽屉
    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    // 抽屉容器
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className="App">
            <header className="App-header">
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2, display: {md: 'none'}}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div"
                                    sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            SCIT Online Judge
                        </Typography>
                        <Tabs value={pageId} onChange={gotoPage} aria-label="nav tabs example"
                              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                            <LinkTab label="题目" href="/subject"/>
                            <LinkTab label="竞赛" href="/competition" />
                            <LinkTab label="提交" href="/submit" />
                            <LinkTab label="作业" href="/work" />
                            <LinkTab label="关于" href="/about" />
                        </Tabs>
                        <Button color="inherit">登录</Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},}}>
                    {drawer}
                </Drawer>
            </header>
            <main>
                <Box sx={{flexGrow: 1, p: 3}}>
                    <Toolbar />
                    {element}
                </Box>
            </main>
            <footer>
                <p>footer</p>
            </footer>
        </div>
    );
}
