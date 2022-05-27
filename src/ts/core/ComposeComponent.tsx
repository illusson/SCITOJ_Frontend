import React from "react";
import {SharedPreferences} from "./SharedPreferences";

export class ComposeComponent<T> extends React.Component<T> {
    protected get TAG(): string {
        return "ComposeComponent"
    }

    protected getSharedPreference(name: string): SharedPreferences {
        return SharedPreferences.getInterface(name)
    }
}

export class SimpleComponent extends ComposeComponent<any> {

}