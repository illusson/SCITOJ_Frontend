import {SampleRouteComponent, withRouter} from "../../core/RouteComponent";
import {GridView} from "@mui/icons-material";

class Welcome extends SampleRouteComponent {
    componentDidMount() {
        this.redirect("/problem")
    }

    public render() {
        return (
            <div>

            </div>
        );
    }
}

export default withRouter(Welcome)