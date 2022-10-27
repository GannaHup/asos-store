import { SET_LOADING } from "@/constants/actions-store";

const initialState = {
  isLoading: false,
};

export default function ProductsReducers(
  state = initialState,
  action: any
) {
  const { type, loading } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: loading,
      };

    default:
      return state;
  }
}
