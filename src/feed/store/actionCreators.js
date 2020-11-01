import axios from 'axios';
import {fromJS} from 'immutable';

// 直接返回对象
export const logIn = () => ({
  type: 'log'
})

export const logout = () => ({
  type: 'change_logout',
  value: false
})

const changeLoginState = (id) => ({
  type: 'change_log_state',
  id: fromJS(id)
})

export const getList = (account, password) => {
  return (dispatch) => {
    axios.get('/api/headerList.json?account=' + account + '&password=' + password).then((res) =>{
      const data = res.data;

      if (data.success === true){
        console.log(data.success);
        dispatch(logIn());
      }else {
        alert('login failed')
      }
      dispatch(changeLoginState(data.id))
    }).catch(() => {
      console.log('error');
    })
  }
}
