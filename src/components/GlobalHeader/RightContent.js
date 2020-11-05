import React, { PureComponent } from 'react';
import { Spin, Tag, Menu, Icon, Avatar, Tooltip, message } from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import HeaderSearch from '../HeaderSearch';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import avatarAAA from '../../assets/logo.svg'
import { getSessionStorage} from '@/utils/storage'
export default class GlobalHeaderRight extends PureComponent {
  getNoticeData() {
    const { notices = [] } = this.props;
    if (notices.length === 0) {
      return {};
    }
    const newNotices = notices.map(notice => {
      const newNotice = { ...notice };
      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime).fromNow();
      }
      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }
      if (newNotice.extra && newNotice.status) {
        const color = {
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[newNotice.status];
        newNotice.extra = (
          <Tag color={color} style={{ marginRight: 0 }}>
            {newNotice.extra}
          </Tag>
        );
      }
      return newNotice;
    });
    return groupBy(newNotices, 'type');
  }

  getUnreadData = noticeData => {
    const unreadMsg = {};
    Object.entries(noticeData).forEach(([key, value]) => {
      if (!unreadMsg[key]) {
        unreadMsg[key] = 0;
      }
      if (Array.isArray(value)) {
        unreadMsg[key] = value.filter(item => !item.read).length;
      }
    });
    return unreadMsg;
  };

  changeReadState = clickedItem => {
    const { id } = clickedItem;
    const { dispatch } = this.props;
    dispatch({
      type: 'global/changeNoticeReadState',
      payload: id,
    });
  };

  render() {
    const {
      currentUser,
      fetchingNotices,
      onNoticeVisibleChange,
      onMenuClick,
      onNoticeClear,
      menuClickLogout,
      theme,
    } = this.props;
    //当前登录用户的账号
    var loginName = getSessionStorage("loginName");
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key="userCenter">
          <Icon type="user" />
          <span>个人资料</span>
        </Menu.Item>
        {loginName && JSON.parse(loginName).roleCode=='TEAM'|| loginName &&JSON.parse(loginName).roleCode=='PERSONAL'?null:<Menu.Divider />}
        {loginName && JSON.parse(loginName).roleCode=='TEAM'|| loginName &&JSON.parse(loginName).roleCode=='PERSONAL'?null:
          <Menu.Item key="userPassword">
            <Icon type="setting" />
            <span>修改密码</span>
          </Menu.Item>
        }
        
        {/* <Menu.Item key="logout">
          <Icon type="logout" />
          <span>退出登录</span>
        </Menu.Item> */}
      </Menu>
    );
    const noticeData = this.getNoticeData();
    const unreadMsg = this.getUnreadData(noticeData);
    let className = styles.right;
    if (theme === 'dark') {
      className = `${styles.right}  ${styles.dark}`;
    }
    return (
      <div className={className}>
        {(
          <HeaderDropdown overlay={menu}>
            <span className={`${styles.action} ${styles.account}`}>
              <Avatar
                size="small"
                className={styles.avatar}
                src={avatarAAA}
                alt="avatar"
              />
              <span className={styles.name}>{ loginName && JSON.parse(loginName) ? JSON.parse(loginName).name : '' }</span>
            </span>
          </HeaderDropdown>
        )}
        <span className={styles.spanName} onClick={menuClickLogout}>
          <Icon type="poweroff" style={{verticalAlign: 'middle',color:'#fff'}} />
          <span>退出</span>
        </span>
      </div>
    );
  }
}
