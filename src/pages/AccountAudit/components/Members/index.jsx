import React, {useEffect, useState} from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import ContainerTitle from "@/components/ContainerTitle";
import {Table} from '@alifd/next';
import {apiSupplierGetList, apiSupplierGetUnPassedList} from "@/api/supplier";

export default function Member() {
  const [dataSource, setDataSource] = useState([]);
  // 初始化页面数据
  useEffect(() => {apiSupplierGetUnPassedList().then(setDataSource)}, []);

  const renderProfile = (value, index, record) => {
    return (
      <div className={styles.profile}>
        <img src={record.avatarurl} alt="" className={styles.avatar} />
        <span className={styles.name}>{record.name}</span>
      </div>
    );
  };

  return (
    <IceContainer className={styles.container}>
      <ContainerTitle
        title="用户列表"
        className={styles.title}
      />
      <Table dataSource={dataSource} hasHeader={true} hasBorder={false}>
        <Table.Column dataIndex="name" title={"用户名"} cell={renderProfile} />
        <Table.Column dataIndex="phonenum" title={"手机号"}/>
        <Table.Column dataIndex="wechat" title={"微信"}/>
        <Table.Column dataIndex="location" title={"市场位置"} />
      </Table>
    </IceContainer>
  );
}
