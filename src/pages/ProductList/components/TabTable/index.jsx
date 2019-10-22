import React, {useState} from 'react';
import {Table, Slider} from '@alifd/next'
import styles from "./index.module.scss";
import ContainerTitle from "@/components/ContainerTitle";
import IceContainer from '@icedesign/container';
import {getImage} from "@/base/utils";


export default function TabTable(params) {
  const {dataSource} = params;
  const rowSelection = {
    onSelect: function (selected, record, records) {
      console.log('onSelect', selected, record, records);
    },
    onSelectAll: function (selected, records) {
      console.log('onSelectAll', selected, records);
    }
  };

  const renderImageList = (value, index, record) => {
    if (!record) return null;
    // 产品图片展示
    const imageList = value.map((url, index) => <img key={index} src={getImage(url)} alt="" className={styles.image}/>)
    return (
      <div style={{width: '350px'}}>
        <Slider slidesToShow={4} arrowPosition="outer" dots={false} lazyLoad>
          {imageList}
        </Slider>

      </div>
    );
  };

  return (
    <div className="tab-table">
      <IceContainer className={styles.container}>
        <ContainerTitle
          title="产品列表"
          className={styles.title}
        />
        <Table dataSource={dataSource} hasHeader={true} hasBorder={false}
               rowSelection={rowSelection}>
          <Table.Column dataIndex="name" title={"产品名"}/>
          <Table.Column dataIndex="price" title={"价格"}/>
          <Table.Column dataIndex="type" title={"类型"}/>
          <Table.Column dataIndex="remark" title={"备注"}/>
          <Table.Column dataIndex="imageList" title={"图片"} cell={renderImageList}/>
        </Table>
      </IceContainer>
    </div>
  );
}


