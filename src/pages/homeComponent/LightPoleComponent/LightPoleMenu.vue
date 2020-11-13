<template>
  <div class="menu_content">
    <div class="title">
      <img class="home_icon" src="../../../assets/menu_home_icon.png" />
      主页
    </div>
    <div class="search">
      <a-input-search
        placeholder="请输入要查询的灯杆"
        enter-button
        @search="onSearch"
      />
    </div>
    <div class="light_pole_list">
      <div class="light_pole_title">
        <img src="../../../assets/light_pole_list_icon.png" />
        所有灯杆({{ allLightPoleNum }}/{{ activeLightPoleNum }})
        <a-checkbox v-model:checked="checked" @change="onChange"> </a-checkbox>
      </div>
      <div class="light_pole_list_tree">
        <a-tree
          v-model:checkedKeys="checkedKeys"
          checkable
          :expanded-keys="expandedKeys"
          :auto-expand-parent="autoExpandParent"
          :selected-keys="selectedKeys"
          :tree-data="treeData"
          @expand="onExpand"
          @select="onSelect"
        />
      </div>
    </div>
    <div class="light_control">
      <div class="light_control_box">
        <div class="gutter-box">
          <img class="control_img" src="../../../assets/normal.png" />
          正常
        </div>
        <div class="gutter-box">
          <img class="control_img" src="../../../assets/offLine.png" />
          离线
        </div>
        <div class="gutter-box">
          <img class="control_img" src="../../../assets/stopWork.png" />
          停用
        </div>
        <div class="gutter-box">
          <img class="control_img" src="../../../assets/fault.png" />
          故障
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const treeData = [
  {
    title: '线路一',
    key: '1',
    children: [
      { title: '灯杆1', key: '0-0-0-0' },
      { title: '灯杆1', key: '0-0-0-1' },
      { title: '灯杆1', key: '0-0-0-2' },
    ],
  },
  {
    title: '线路二',
    key: '2',
    children: [
      { title: '灯杆1', key: '0-0-1-0' },
      { title: '灯杆1', key: '0-0-1-1' },
      { title: '灯杆1', key: '0-0-1-2' },
    ],
  },
]
export default {
  data() {
    return {
      checked: false,
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: ['0-0-0-0'],
      selectedKeys: [],
      treeData,
      allLightPoleNum: 40,
      activeLightPoleNum: 30,
    }
  },
  watch: {
    checkedKeys(val) {
      console.log('onCheck', val)
    },
  },
  methods: {
    onChange() {},
    onSearch() {},
    onExpand(expandedKeys) {
      console.log('onExpand', expandedKeys)
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onCheck(checkedKeys) {
      console.log('onCheck', checkedKeys)
      this.checkedKeys = checkedKeys
    },
    onSelect(selectedKeys, info) {
      console.log('onSelect', info)
      this.selectedKeys = selectedKeys
    },
  },
}
</script>

<style lang="less" scoped>
.menu_content {
  height: 100%;
  width: 100%;
  padding-right: 10px;
  position: relative;
  .title {
    padding: 40px 25px 10px 25px;
    .home_icon {
      width: 27px;
      height: 24px;
      vertical-align: bottom;
      display: inline-block;
    }
    font-size: 22px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 28px;
    background: linear-gradient(0deg, #9dffff 0%, #3398ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .search {
    padding: 15px;
    border-top: 2px solid #063c58;
    /deep/.ant-input-group .ant-input {
      background: transparent;
      border-radius: 5px 0 0 5px;
      border-color: #178ce9;
    }
    .ant-input-group .ant-input::placeholder {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666664;
      line-height: 50px;
    }
  }
  .light_pole_list {
    position: relative;
    height: calc(100% - 250px);
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none; /* IE 10+ */
    // .light_pole_list_title {
    //   height: 50px;
    //   font-size: 18px;
    //   color: #fff;
    //   // line-height: 50px;
    //   padding: 10px 25px;
    //   background: linear-gradient(
    //     90deg,
    //     rgba(0, 151, 255, 0.24),
    //     rgba(1, 11, 35, 0.24)
    //   );

    //   img {
    //     width: 22px;
    //     height: 22px;
    //   }
    //   .ant-checkbox-wrapper {
    //     position: absolute;
    //     right: 20px;
    //     top: 15px;
    //   }
    // }
    .light_pole_list_tree {
      position: relative;
      /deep/.ant-tree .ant-tree-title {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        line-height: 25px;
      }
      /deep/.ant-tree > li {
        padding: 10px 30px;
        border-bottom: 2px solid #063c58;
      }
    }
  }
  .light_pole_list::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .light_control {
    position: absolute;
    bottom: 30px;
    height: 63px;
    width: 100%;
    .light_control_box {
      display: flex;
      height: 100%;
      margin: 0 auto;
      width: 95%;
      // justify-content: space-between;
      align-items: center;
      border: 1px dashed #ccc;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 21px;
    }
    .control_img {
      width: 50px;
      height: 50px;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
