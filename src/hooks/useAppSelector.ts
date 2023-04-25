import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../Reducer/redux/store";

export const useAppSelector:TypedUseSelectorHook<rootState> = useSelector