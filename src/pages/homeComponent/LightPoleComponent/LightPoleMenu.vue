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
      <div class="light_pole_list_title">
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
    <div class="light_control"></div>
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
      checkedKeys: ['0-0-0'],
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
    .light_pole_list_title {
      height: 50px;
      font-size: 18px;
      color: #fff;
      // line-height: 50px;
      padding: 10px 25px;
      background: linear-gradient(
        90deg,
        rgba(0, 151, 255, 0.24),
        rgba(1, 11, 35, 0.24)
      );

      img {
        width: 22px;
        height: 22px;
      }
      .ant-checkbox-wrapper {
        position: absolute;
        right: 20px;
        top: 15px;
      }
    }
    .light_pole_list_tree {
      padding: 10px 30px;
      position: relative;
      /deep/ .ant-tree-checkbox {
        // position: absolute;
        left: 82%;
        top:3px;
        // top: 25px;
      }
      .ant-tree li ul {
        padding: 0;
      }
     /deep/ .ant-tree-title {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        line-height: 25px;
        opacity: 0.6;
      }
      .ant-tree{
        color:#0D92D7;
        // font-size: 20px;
      }
      /deep/.ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected{
          background-color: rgba(15, 102, 172, 0.38);
      }
    }

    //   /deep/.ant-tree li .ant-tree-node-content-wrapper {
    //     height: 50px;
    //     font-size: 18px;
    //     color: #fff;
    //     line-height: 50px;
    //   }
    //   .ant-tree-treenode-switcher-close {
    //     .ant-tree-title {
    //       font-size: 18px;
    //       font-family: Microsoft YaHei;
    //       font-weight: 400;
    //       color: #ffffff;
    //       line-height: 25px;
    //     }
    //   }
  }
  .light_pole_list::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}
</style>
