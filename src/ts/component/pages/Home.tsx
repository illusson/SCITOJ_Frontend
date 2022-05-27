import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import ComposeAppBar, {HomeTabData} from "../view/ComposeAppBar";
import Problems from "../fragment/Problems";
import Submission from "../fragment/Submission";
import Homework from "../fragment/Homework";
import About from "../fragment/About";
import {SampleRouteComponent, withRouter} from "../../core/RouteComponent";
import HomeworkDetail from "../fragment/HomeworkDetail";
import ProblemDetail from "../fragment/ProblemDetail";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

class Home extends SampleRouteComponent {
    state = {
        mobileOpen: false,
        index: 0,
    }

    private route = [
        { title: "题目", path: "/problem", component: <Problems />, sub: false },
        { title: "题目详情", path: "/problem/:id", component: <ProblemDetail />, sub: true },
        { title: "提交", path: "/submission", component: <Submission />, sub: false },
        { title: "作业", path: "/homework", component: <Homework />, sub: false },
        { title: "作业详情", path: "/homework/:id", component: <HomeworkDetail />, sub: true },
        { title: "关于", path: "/about", component: <About />, sub: false }
    ]

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ComposeAppBar
                        title={"SCIT Online Judge"}
                        window={() => window.document.body}
                        tags={ this.route.filter((data) => !data.sub)
                            .map((data) => new HomeTabData(data.title, data.path)) }
                        onClose={() => this.setState({ mobileOpen: false })}
                        onOpen={() => this.setState({ mobileOpen: true })}
                        open={this.state.mobileOpen}
                        redirect={this.redirect}
                        actions={[
                            ( <Button color="inherit">登录</Button> )
                        ]}
                        index={this.state.index}
                        onSelect={(index) => this.setState({ index: index })}/>
                </header>
                <main>
                    <Toolbar />
                    <Routes>{
                        this.route.map((data) => (
                            <Route path={data.path} element={data.component} />
                        ))
                    }</Routes>
                </main>
                <footer>
                    <p>Edit <code>src/Home.tsx</code> and save to reload.</p>
                </footer>
            </div>
        )
    }

    protected get TAG(): string {
        return "Home";
    }
}

export default withRouter(Home)