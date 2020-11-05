import { query as queryUsers, queryCurrent } from '@/services/user';
import { updatePwd,queryUserInfo,updateProfile,editAdminUser } from '@/services/api';
import { notification, message } from 'antd';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
    profile:{}
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },    
    *updatePwd({ payload ,callback }, { call, put }) {
        const response = yield call(updatePwd,  payload);
      notification.success({
          message: response.Message || '修改成功'
      })
      if (callback) callback();
    },
    *fetchProfile({callback}, { call, put }) {
      const response = yield call(queryUserInfo);
      yield put({
        type: 'saveProfile',
        payload: response,
      });
      if (callback) callback(response);
    },   
    *updateProfile({ payload,id, callback }, { call, put }) {
      const response = yield call(updateProfile, payload,id);
      if(response&&response.success) {
        notification.error({
          message: response.Message || '修改失败'
        })
      }else {
        notification.success({
          message: response.Message || '修改成功'
        })
        if (callback) callback();
      }
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    saveProfile(state, action) {
      return {
        ...state,
        profile: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
