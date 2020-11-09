<template>
  <div class="login_content">
    <div class="login_icon">
      <img src="../assets/logo.png" />
    </div>
    <div class="login_title">
      <span>艾灯杆智能AI可视化控制平台</span>
      <text>AIDG Intelligent AI visual control platform</text>
    </div>
    <a-form class="login_form" layout="vertical">
      <a-form-item label="用户名">
        <a-input placeholder="请输入用户名">
          <template #prefix
            ><UserOutlined style="color:rgba(0,0,0,.25)"
          /></template>
        </a-input>
      </a-form-item>
      <a-form-item label="密码">
        <a-input type="password" placeholder="请输入密码">
          <template #prefix
            ><LockFilled style="color:rgba(0,0,0,.25)"
          /></template>
        </a-input>
      </a-form-item>
      <a-checkbox-group class="remember_account">
        <a-checkbox value="1" name="type">
          记住账号
        </a-checkbox>
      </a-checkbox-group>
      <a-form-item>
        <a-button class="login_btn" @click="$router.push({name:'home'})" type="primary" color="#0D397B" block>
          登录
        </a-button>
      </a-form-item>
    </a-form>
    <div class="login_bottom">
      ©版权所有&nbsp;&nbsp;&nbsp;2019上海艾灯杆物联网科技有限公司
      沪ICP备19016186号-1
    </div>
  </div>
</template>
<script>
import { UserOutlined, LockFilled } from '@ant-design/icons-vue'
export default {
  components: {
    UserOutlined,
    LockFilled,
  },
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      
    },
  },
}
</script>
<style lang="less" scoped>
.login_content {
  text-align: center;
  position:absolute;
  bottom: 0;
  padding-top: 125px;
  width: 100%;
  height: 100%;
  background-color: #3fbcef;
  background-image: url('../assets/login_bg.jpg');
  .login_icon {
    margin: 0 auto;
    width: 89px;
    height: 99px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login_title {
    span {
      display: block;
      font-size: 46px;
      font-family: FZZhengHeiS-R-GB;
      font-weight: bold;
      color: #ffffff;
    }
    text {
      font-size: 24px;
      font-family: AkzidenzGroteskBQ;
      font-weight: 300;
      color: #ffffff;
      line-height: 8px;
    }
  }
  .login_form {
    width: 418px;
    margin: 50px auto;
    text-align: left;
    /deep/.ant-form-item-label {
      label {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        line-height: 6px;
      }
    }
    /deep/.ant-input-affix-wrapper {
      border-radius: 25px;
      height: 50px;
      border: none;
      // background-color: rgba(175, 182, 189, 0.5);
      .ant-input {
        // background-color: inherit;
        color: #3f3d42;
        font-weight: 300;
        font-size: 18px;
      }
      .ant-input::placeholder {
        color: rgba(63, 61, 66, 0.5);
        font-weight: 300;
        font-size: 18px;
      }
    }
    .remember_account {
      left: 10px;
      margin-bottom: 50px;
      margin-left: 20px;
      .ant-checkbox-wrapper {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .login_btn {
      height: 64px;
      border-radius: 25px;
      font-size: 30px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
    }
  }
  .login_bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #000000;
    opacity: 0.6;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #21d8e0;
    line-height: 100px;
  }
}
</style>
