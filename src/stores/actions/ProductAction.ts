import { Dispatch } from 'redux'
import { SET_LOADING } from '@/constants/actions-store'

export function setLoading(bool: boolean) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_LOADING,
      loading: bool
    })
  }
}
