import {RouteComponent, withRouter} from "../../core/RouteComponent";

class HomeworkDetail extends RouteComponent<HomeworkDetailProp> {
    public render() {
        return (
            <div>
                <div>HomeworkDetail, id: </div>
                <div>{ this.props.params.displayId }</div>
            </div>
        );
    }
}

class HomeworkDetailProp {
    displayId: String | undefined
}

export default withRouter(HomeworkDetail)