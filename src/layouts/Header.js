import React, { Component } from 'react';
import { Layout, message, Modal, Button,Form,Input } from 'antd';
import Animate from 'rc-animate';
import { connect } from 'dva';
import router from 'umi/router';
import GlobalHeader from '@/components/GlobalHeader';
import TopNavHeader from '@/components/TopNavHeader';
import styles from './Header.less';
import { getSessionStorage } from '@/utils/storage';
import _ from 'lodash';

const FormItem = Form.Item;
const { Header } = Layout;

@Form.create()
class HeaderView extends Component {
  state = {
    visible: true,
    modalVisible:false,
    modalVisibleEdit:false,
  };

  static getDerivedStateFromProps(props, state) {
    if (!props.autoHideHeader && !state.visible) {
      return {
        visible: true,
      };
    }
    return null;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handScroll, { passive: true });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handScroll);
  }

  getHeadWidth = () => {
    const { isMobile, collapsed, setting } = this.props;
    const { fixedHeader, layout } = setting;
    if (isMobile || !fixedHeader || layout === 'topmenu') {
      return '100%';
    }
    return collapsed ? 'calc(100% - 80px)' : 'calc(100% - 256px)';
  };

  handleNoticeClear = type => {
    message.success('已清空');
    const { dispatch } = this.props;
    dispatch({
      type: 'global/clearNotices',
      payload: type,
    });
  };

  menuClickLogout = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/logout', 
    });
  }

  handleMenuClick = ({ key }) => {
    const { dispatch } = this.props;
    if (key === 'userCenter') {
      const { dispatch } = this.props;
      dispatch({
        type: 'user/fetchProfile',
        callback: (res) => {
          this.setState({
            modalVisible:true,
          })
        }
      })
    }
    if (key === 'userPassword') {
      this.setState({
        modalVisibleEdit:true
      })
    }
  };

  // handleNoticeVisibleChange = visible => {
  //   if (visible) {
  //     const { dispatch } = this.props;
  //     dispatch({
  //       type: 'global/fetchNotices',
  //     });
  //   }
  // };

  handScroll = () => {
    const { autoHideHeader } = this.props;
    const { visible } = this.state;
    if (!autoHideHeader) {
      return;
    }
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    if (!this.ticking) {
      this.ticking = true;
      requestAnimationFrame(() => {
        if (this.oldScrollTop > scrollTop) {
          this.setState({
            visible: true,
          });
        } else if (scrollTop > 300 && visible) {
          this.setState({
            visible: false,
          });
        } else if (scrollTop < 300 && !visible) {
          this.setState({
            visible: true,
          });
        }
        this.oldScrollTop = scrollTop;
        this.ticking = false;
      });
    }
  };

  handleModalVisible = () => {
    this.setState({
      modalVisible:false
    })
  }

  handleModalVisibleEdit=() =>{
    this.setState({
      modalVisibleEdit:false
    })
  }

  okHandle = () => {    
    this.props.form.validateFields( (err,fieldsValue) => {
      if (err){
        if(err.phoneNumber||err.email){
          return;
        }
      } 
      var param={
        phoneNumber:fieldsValue.phoneNumber,
        email:""
      }
      const { dispatch } = this.props;
      dispatch({
        type: 'user/updateProfile',
        payload:param,
        callback: () => {
          this.setState({
            modalVisible:false
          })
        }
      })
    });
    
  }
  okHandleEdit = () =>{
    this.props.form.validateFields( (err,fieldsValue) => {
      if (err){
        if(err.password||err.confirmNewPassword||err.oldPassword){
          return;
        }
      } 
      if(fieldsValue.password!=fieldsValue.confirmNewPassword){
        message.error("新密码和确认密码不一致！")
        return;
      }
      const { dispatch} = this.props;
      var userInfo = JSON.parse(getSessionStorage('loginName'))
      console.log(fieldsValue);
      var param={
        "id" :userInfo.id,
        "oldPassword":fieldsValue.oldPassword,
        "newPassword":fieldsValue.password
      }
      dispatch({
        type: 'user/updatePwd',
        payload:param,
        callback: () => {
          this.setState({
            modalVisibleEdit:false
          })
        }
      })
    });
  }

  render() {
    const { isMobile, handleMenuCollapse, setting, form,user:{profile} } = this.props;
    const { navTheme, layout, fixedHeader } = setting;
    const { visible,modalVisible,modalVisibleEdit } = this.state;
    var userInfo = JSON.parse(getSessionStorage('loginName'))
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 },
      },
    };
    const isTop = layout === 'topmenu';
    const width = this.getHeadWidth();
    const HeaderDom = visible ? (
      <Header
        style={{ padding: 0, width, zIndex: 2 }}
        className={fixedHeader ? styles.fixedHeader : ''}
      >
        {isTop && !isMobile ? (
          <TopNavHeader
            theme={navTheme}
            mode="horizontal"
            onCollapse={handleMenuCollapse}
            onNoticeClear={this.handleNoticeClear}
            onMenuClick={this.handleMenuClick}
            // onNoticeVisibleChange={this.handleNoticeVisibleChange}
            {...this.props}
          />
        ) : (
          <GlobalHeader
            onCollapse={handleMenuCollapse}
            onNoticeClear={this.handleNoticeClear}
            onMenuClick={this.handleMenuClick}
            menuClickLogout={this.menuClickLogout}
            // onNoticeVisibleChange={this.handleNoticeVisibleChange}
            {...this.props}
          />
        )}
      </Header>
    ) : null;
    return (
      <div>
      <Animate component="" transitionName="fade">
        {HeaderDom}
      </Animate>

      <Modal
        destroyOnClose
        title="修改密码"
        width={'40%'}
        visible={modalVisibleEdit}
        onCancel={this.handleModalVisibleEdit}
        destroyOnClose={true}
        footer={[
          <Button key="submit" type="success" onClick={this.okHandleEdit}>保存</Button>,
          <Button onClick={this.handleModalVisibleEdit}>取消</Button>
        ]}
      >
        {
          <Form onSubmit={this.okHandleEdit} {...formItemLayout}>
            <FormItem label="旧密码">
              {form.getFieldDecorator('oldPassword', {
                initialValue: '',
                rules: [
                  {required: true,message: '原密码不能为空！'},
                ],
              })(
                <Input.Password  placeholder="请输入原来的密码" allowClear  />
              )}
            </FormItem>

            <FormItem label="新密码">
              {form.getFieldDecorator('password', {
                initialValue: '',
                rules: [
                  {required: true,message: '新密码不能为空！'},
                ],
              })(
                <Input.Password  placeholder="请输入新的密码" allowClear />
              )}
            </FormItem>

            <FormItem label="确认密码">
              {form.getFieldDecorator('confirmNewPassword', {
                initialValue: '',
                rules: [
                  {required: true,message: '新密码不能为空！'},
                ],
              })(
                <Input.Password  placeholder="请确认密码" allowClear />
              )}
            </FormItem>
          </Form>
        }
      </Modal>
 
        <Modal
          destroyOnClose
          title="个人资料"
          width={'40%'}
          visible={modalVisible}
          onCancel={this.handleModalVisible}
          destroyOnClose={true}
          footer={[
            <Button key="submit" type="success" onClick={this.okHandle}>保存</Button>,
            <Button onClick={this.handleModalVisible}>取消</Button>
          ]}
        >
          {
            <Form onSubmit={this.okHandle} {...formItemLayout}>
              <FormItem label="所属机构">
                {form.getFieldDecorator('orgId', {
                  initialValue: userInfo?userInfo.orgName:'',
                })(
                  <Input disabled />
                )}
              </FormItem>
              <FormItem label="登录账号">
                {form.getFieldDecorator('username', {
                  initialValue: profile?profile.username:'',
                })(
                  <Input disabled />
                )}
              </FormItem>
              <FormItem label="姓名">
                {form.getFieldDecorator('name', {
                  initialValue: profile?profile.name:'',
                })(
                  <Input disabled />
                )}
              </FormItem>
              <FormItem label="联系方式">
                {form.getFieldDecorator('phoneNumber', {                  
                  initialValue:!_.isEmpty(profile) ?profile.phoneNumber:null,
                  rules: [
                    {required: true,message: '联系方式不能为空！'},
                    { pattern: /(^0\d{2,3}\-\d{7,8}$)|(^1[3|4|5|6|7|8|9][0-9]{9}$)/, message: '格式不正确！' },
                  ],
                })(
                  <Input placeholder="请输入联系方式" />
                )}
              </FormItem>
              {/* <FormItem label="邮箱地址">
                {form.getFieldDecorator('email', {
                  initialValue:!_.isEmpty(profile) ?profile.email:null,
                  rules: [
                    { type: 'email', message: '邮箱格式无效！' },
                    { required: true, message: '请输入邮箱！' },
                  ],
                })(
                  <Input placeholder="请输入邮箱地址" />
                )}
              </FormItem> */}
            </Form>
          }
        </Modal>
      </div>
    );
  }
}

export default connect(({ user, global, setting, loading }) => ({
  // currentUser: user.currentUser,
  collapsed: global.collapsed,
  fetchingMoreNotices: loading.effects['global/fetchMoreNotices'],
  fetchingNotices: loading.effects['global/fetchNotices'],
  notices: global.notices,
  setting,
  user,
}))(HeaderView);
