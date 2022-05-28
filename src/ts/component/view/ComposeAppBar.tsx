import {ComposeComponent} from "../../core/ComposeComponent";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Drawer from "@mui/material/Drawer";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export class HomeTabData {
    public readonly title: string
    public readonly path: string
    public readonly key: string

    constructor(title: string, path: string) {
        this.title = title;
        this.path = path;
        this.key = path.split("/")[1];
    }
}

export interface ComposeAppBarProp {
    window: (() => HTMLElement),
    title: string,
    tags: Array<HomeTabData>,
    actions: JSX.Element,
    redirect: (url: string) => void,

    index: string,
    onSelect: (index: string) => void,

    open: boolean,
    onClose: React.ReactEventHandler<{}>,
    onOpen: React.ReactEventHandler<{}>
}

export default class ComposeAppBar extends ComposeComponent<ComposeAppBarProp> {
    private drawerWidth = 240;

    public render() {
        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            color="inherit" aria-label="open drawer"
                            edge="start" onClick={this.props.onOpen}
                            sx={{mr: 2, display: {md: 'none'}}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div">
                            { this.props.title }
                        </Typography>
                        <Tabs aria-label="nav tabs" value={ComposeAppBar.getAbstractPath()}
                              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>{
                            this.props.tags.map((data) => (
                                <Tab label={data.title} value={data.key}
                                    onClick={() => {
                                        this.props.redirect(data.path)
                                        this.props.onSelect(data.key)
                                    }}/>
                            ))
                        }</Tabs>
                        <div>{this.props.actions}</div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    container={this.props.window}
                    variant="temporary"
                    open={this.props.open}
                    onClose={this.props.onClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: this.drawerWidth}}}>
                    <Toolbar />
                    <List>{
                        this.props.tags.map((data, index) => (
                            <ListItem onClick={() => {this.props.redirect(data.path)}} key={index} >
                                <ListItemText primary={data.title}/>
                            </ListItem>
                        ))
                    }</List>
                </Drawer>
            </div>
        );
    }

    private static getAbstractPath() {
        const path = window!!.location.href.split("//")[1]
        return path.split("/")[1]
    }
}