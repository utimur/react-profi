import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
