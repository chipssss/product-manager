import React, { useState, useEffect} from 'react';
import IceContainer from '@icedesign/container';
import { Table, Dialog } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import ContainerTitle from '@/components/ContainerTitle';
import mockData from './data';
import styles from './index.module.scss';
import {apiSupplierGetList} from "@/api/supplier";

function MemberList(props) {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    // 啦取用户数据
    apiSupplierGetList().then(setDataSource);
  }, []);

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
      <Table dataSource={dataSource} hasHeader={false} hasBorder={false}>
        <Table.Column dataIndex="name" cell={renderProfile} />
        <Table.Column dataIndex="phonenum" />
        <Table.Column dataIndex="wechat" />
        <Table.Column dataIndex="location" />
      </Table>
    </IceContainer>
  );
}

export default withRouter(MemberList);
