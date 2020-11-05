import { fakeRegister, getRegisterCaptcha,checkProgress } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';
import { notification, message } from 'antd';
export default {
  namespace: 'register',

  state: {
    status: undefined,
  },

  effects: {
    *submit({ payload,callback }, { call, put }) {
      const response = yield call(fakeRegister, payload);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
      if(response){
        if(callback) callback();
      }else{
        notification.error({
          message: response.message || '注册失败'
        })
      }
    },
    *getRegisterCaptcha({ payload,callback }, { call, put }) {
      const response = yield call(getRegisterCaptcha, payload);
      if(response.error){
        notification.error({
          message: response.Message || '发送失败'
        })
      }else{
        notification.success({
          message: response.Message || '发送成功'
        })
        if(callback) callback();
      }
    },
    *checkProgress({ payload,callback }, { call, put }){
      const response = yield call(checkProgress, payload);
      if (response && response.registerUser) {
        notification.error({
          message: '当前手机号已通过审核,请更换手机号' ,
        })
      } 

      if (callback) callback(response);

    },

  },

  reducers: {
    registerHandle(state, { payload }) {
      setAuthority('user');
      reloadAuthorized();
      return {
        ...state,
        status: payload,
      };
    },
  },
};
