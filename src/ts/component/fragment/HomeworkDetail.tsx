import {RouteComponent, withRouter} from "../../core/RouteComponent";

class HomeworkDetail extends RouteComponent<HomeworkDetailProp> {
    public render() {
        return (
            <div>HomeworkDetail, id: { this.props.params.id }</div>
        );
    }
}

interface HomeworkDetailProp {
    id: String | undefined
}

export default withRouter(HomeworkDetail)