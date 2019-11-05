import React, {useEffect, useState} from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import ContainerTitle from "@/components/ContainerTitle";
import {Table, Button, Message} from '@alifd/next';
import {apiSupplierGetList, apiSupplierGetUnPassedList, apiSupplierVerify} from "@/api/supplier";

export default function Member(params) {
  const [dataSource, setDataSource] = useState([]);
  const [selected, setSelected] = useState([]);
  const rowSelection = {
    onSelect: function (selected, record, records) {
      setSelected(records);
      console.log('onSelect', selected, record, records);
    },
    onSelectAll: function (selected, records) {
      setSelected(records);
      console.log('onSelectAll', selected, records);
    }
  };
  // 初始化页面数据
  useEffect(() => {
    pullData()
  }, []);
  const pullData = () => {
    apiSupplierGetUnPassedList().then(setDataSource)
  };

  const auditSuccess = () => {
    if (selected.length === 0) {
      Message.warning('请先选择对应用户')
      return;
    }
    apiSupplierVerify(selected).then(res => {
      Message.success('审核成功');
      pullData();
    }).catch(err => Message.error('审核失败，' + err));
  };

  const renderProfile = (value, index, record) => {
    return (
      <div className={styles.profile}>
        <img src={record.avatarurl} alt="" className={styles.avatar}/>
        <span className={styles.name}>{record.name}</span>
      </div>
    );
  };

  return (
    <IceContainer className={styles.container}>
      <ContainerTitle
        buttonText={"通过"}
        onClick={auditSuccess}
        title="用户列表"
        className={styles.title}/>
      <Table dataSource={dataSource} hasHeader={true} hasBorder={false} rowSelection={rowSelection}>
        <Table.Column dataIndex="name" title={"用户名"} cell={renderProfile}/>
        <Table.Column dataIndex="phonenum" title={"手机号"}/>
        <Table.Column dataIndex="wechat" title={"微信"}/>
        <Table.Column dataIndex="location" title={"市场位置"}/>
      </Table>
    </IceContainer>
  );
}
