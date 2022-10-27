import { Dispatch } from 'redux'
import AxiosApi from '@/services'
import { AppDispatch } from '@/stores'
import { SET_LOADING } from '@/constants/actions-store'

// Mutation
function setLoading(bool: boolean) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_LOADING,
      loading: bool
    })
  }
}
