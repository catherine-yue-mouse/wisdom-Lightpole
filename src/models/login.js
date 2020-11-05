import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { userAccountLogin, getFakeCaptcha,queryUserInfo,logoutLog,checkProgress,registerinfo } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import { setSessionStorage,clearSessionStorage,setSessionLoginStorage } from '@/utils/storage';
import { notification, message } from 'antd';

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ callback,activeKey,payload,errorHandler }, { call, put }) {
      const response = yield call(userAccountLogin, payload, errorHandler);
      yield put({
        type: 'changeLoginStatus',
        // payload: response,
        payload: {
          currentAuthority: 'user'
        },
      });
      
      if(activeKey == '1'){
        if (response && response.access_token) {
          if (callback) callback();
          reloadAuthorized();
          setSessionStorage(response.access_token);
          yield put(routerRedux.push('/' ));
        }else{
          // notification.error({
          //   message: '登陆失败'
          // })
          yield put(routerRedux.push('/user/login' ));
        }
      }else{
        if (response && response.access_token) {
          if (callback) callback();
          reloadAuthorized();
          setSessionStorage(response.access_token);
          yield put(routerRedux.push('/' ));
        }else{
          // notification.error({
          //   message: '账号或密码错误,请联系管理员'
          // })
          yield put(routerRedux.push('/user/login' ));
        }
      }
    },
    *getUserInfo({ payload }, { call }) {
      const response = yield call(queryUserInfo, payload);
      if (response && response.username) {
        setSessionLoginStorage(JSON.stringify(response));
      }
    },
    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },

    *logout(_, { call, put }) {
      // yield call(logoutLog);
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      clearSessionStorage();
      yield put(routerRedux.push('/user/login' ));
    },
    *checkProgress({ callback,payload }, { call, put }) {
      const response = yield call(checkProgress, payload);
      if (callback) callback(response);
    },
    *registerinfo({ callback,payload }, { call, put }) {
      const response = yield call(registerinfo, payload);
      if (callback) callback(response);
    },
    
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        // type: payload.type,
      };
    },
  },
};
