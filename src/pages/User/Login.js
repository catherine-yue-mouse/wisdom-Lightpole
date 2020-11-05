import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button, Input, Form, message, Tabs, notification, Modal, Icon } from 'antd';
import styles from './Login.less';
import Register from './Register'
import { value } from 'numeral';
import BG1 from '../../assets/bg_1.png';
import BG2 from '../../assets/bg_2.png';
import BG3 from '../../assets/bg_3.png';
import EWM from '../../assets/ewm.jpg';
const { TabPane } = Tabs;

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
@Form.create()
class LoginPage extends Component {
  state = {
    phoneNumber: '',
    value: true,
    count: 0,
    validPhone: true,
    isLogin: true,
    activeKey: '1',
    headTittle: '',
    resInformation: {},
    infoBgImg: 1
  }

  componentDidMount () {

  }

  render () {
    const { form, submitting } = this.props;
    const { getFieldDecorator } = form;
    const { validPhone, count, isLogin, activeKey, resInformation, infoBgImg } = this.state;
    const layout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
    };
    return (
      <div className={styles.main} style={{ backgroundImage: `url(${infoBgImg == 1 ? BG1 : (infoBgImg == 2 ? BG2 : BG3)})` }}>
        <Form
          {...layout}
          onSubmit={this.handleSubmit}
          className={styles.loginForm}
        >
          <Form.Item label='账号' name="phone">
            {getFieldDecorator('phone', {
              rules: [
                { required: true, message: '请输入账号' },
              ],
            })(<Input size="large" placeholder="请输入账号" />)}
          </Form.Item>
          <Form.Item label='密码' name='captcha'>
            {getFieldDecorator('captcha', {
              rules: [{ required: true, message: '请输入验证码' }],
            })(<Input type='password' placeholder="请输入密码" />)}
          </Form.Item>
        </Form>


      </div>
    );
  }
}
export default LoginPage