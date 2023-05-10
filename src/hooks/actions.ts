import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {UserActions} from "../store/user.slice";

const actions = {
    ...UserActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}