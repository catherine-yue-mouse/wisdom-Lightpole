import React, { PureComponent, Fragment } from 'react';
import { Table, Alert } from 'antd';
import styles from './index.less';

function initTotalList(columns) {
  const totalList = [];
  columns.forEach(column => {
    if (column.needTotal) {
      totalList.push({ ...column, total: 0 });
    }
  });
  return totalList;
}

class StandardTable extends PureComponent {
  constructor(props) {
    super(props);
    const { columns } = props;
    const needTotalList = initTotalList(columns);

    this.state = {
      selectedRowKeys: [],
      needTotalList,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      const needTotalList = initTotalList(nextProps.columns);
      return {
        selectedRowKeys: [],
        needTotalList,
      };
    }
    return null;
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    let { needTotalList } = this.state;
    needTotalList = needTotalList.map(item => ({
      ...item,
      total: selectedRows.reduce((sum, val) => sum + parseFloat(val[item.dataIndex], 10), 0),
    }));
    const { onSelectRow } = this.props;
    if (onSelectRow) {
      onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys, needTotalList });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(pagination, filters, sorter);
    }
  };

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  };

  showTotal = total => {
    return `共 ${total} 条`;
  };

  render() {
    const { selectedRowKeys, needTotalList } = this.state;
    const { data = {}, rowKey, loading, currentFrom, selectedRows, ...rest } = this.props;
   
    const { total,paginate } = data;
    let paginationProps = true;
    if(paginate && paginate != undefined){
      if(currentFrom && currentFrom != undefined){
        paginationProps = {
          showTotal: this.showTotal,
          pageSize: paginate.size,
          showSizeChanger: true,
          showQuickJumper: true,
          current:currentFrom,
          ...paginate,
          total
        };
      }else{
        paginationProps = {
          showTotal: this.showTotal,
          pageSize: paginate.size,
          showSizeChanger: true,
          showQuickJumper: true,
          ...paginate,
          // ...data.paginate,
          total
        };
      }
    }else{
      paginationProps = false;
    }

    let rowSelection = {};
    if (selectedRows === false) {
      rowSelection = null;
    } else {
      rowSelection = {
        selectedRowKeys,
        onChange: this.handleRowSelectChange,
        getCheckboxProps: record => ({
          disabled: record.disabled,
        }),
      };
    }

    return (
      <div className={styles.standardTable}>
        <Table
          bordered
          loading={loading}
          rowKey={rowKey || 'key'}
          rowSelection={rowSelection}
          dataSource={data.data}
          pagination={paginationProps}
          onChange={this.handleTableChange}
          {...rest}
        />
      </div>
    );
  }
}

export default StandardTable;
