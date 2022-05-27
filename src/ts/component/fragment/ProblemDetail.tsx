import {RouteComponent, withRouter} from "../../core/RouteComponent";

class ProblemDetail extends RouteComponent<ProblemDetailProp> {
    public render() {
        return (
            <div>HomeworkDetail</div>
        );
    }
}

interface ProblemDetailProp {
    displayId: String | undefined
}

export default withRouter(ProblemDetail)