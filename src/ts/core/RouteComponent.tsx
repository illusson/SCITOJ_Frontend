import {ComposeComponent} from "./ComposeComponent";
import {BrowserRouterProps, useLocation, useNavigate, useParams} from "react-router-dom";
import {ComponentType} from "react";

export class RouteComponent<T> extends ComposeComponent<WithRouterProps<T>> {
    protected historyReplace(url: string) {
        this.props.history.replace(url)
    }

    protected historyPush(url: string) {
        this.props.history.push(url)
    }
}

export class SampleRouteComponent extends RouteComponent<any> {

}

export interface WithRouterProps<T = ReturnType<typeof useParams>> extends BrowserRouterProps {
    history: {
        back: () => void
        goBack: () => void
        push: (url: string, state?: any) => void
        replace: (url: string, state?: any) => void
    }
    location: ReturnType<typeof useLocation>
    params: T
}

export const withRouter = <P extends object>(Component: ComponentType<P>) => {
    return (props: Omit<P, keyof WithRouterProps>) => {
        const location = useLocation();
        const navigate = useNavigate();
        const history = {
            back: () => navigate(-1),
            goBack: () => navigate(-1),
            push: (url: string, state?: any) => navigate(url, { state }),
            replace: (url: string, state?: any) => navigate(url, {
                replace: true, state
            })
        }
        return (
            <Component history={history} params={useParams()} location={location} {...props as P}/>
        )
    }
}