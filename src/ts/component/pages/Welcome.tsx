import {SampleRouteComponent, withRouter} from "../../core/RouteComponent";

class Welcome extends SampleRouteComponent {
    componentDidMount() {
        this.redirect("/problem")
    }

    public render() {
        return (
            <div>Welcome</div>
        );
    }
}

export default withRouter(Welcome)