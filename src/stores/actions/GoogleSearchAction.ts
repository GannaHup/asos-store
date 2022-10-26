import { Dispatch } from 'redux'
import AxiosApi from '@/services'
import { AppDispatch } from '@/stores'
import { SET_LOADING } from '@/constants/actions-store'

export const searchContent = () => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    AxiosApi
      .get('/pokemon/ditto')
      .then((res) => {
        console.log('res', res)
      })
      .catch(() => {
        dispatch(setLoading(false))
      })
  }
}

// Mutation
function setLoading(bool: boolean) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_LOADING,
      loading: bool
    })
  }
}
