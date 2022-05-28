import {SampleRouteComponent, withRouter} from "../../core/RouteComponent";

class Welcome extends SampleRouteComponent {
    componentDidMount() {
        setTimeout(() => {
            this.historyReplace("/problem")
        }, 1000)
    }

    public render() {
        return (
            <div>Welcome</div>
        );
    }
}

export default withRouter(Welcome)