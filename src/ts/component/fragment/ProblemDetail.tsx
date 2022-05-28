import {RouteComponent, withRouter} from "../../core/RouteComponent";

class ProblemDetail extends RouteComponent<ProblemDetailProp> {
    public render() {
        return (
            <div>ProblemDetail, id: { this.props.params.id }</div>
        );
    }
}

interface ProblemDetailProp {
    id: String | undefined
}

export default withRouter(ProblemDetail)