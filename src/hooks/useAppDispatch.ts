import {useDispatch} from "react-redux";
import {AppDispatch} from "../Reducer/redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()


