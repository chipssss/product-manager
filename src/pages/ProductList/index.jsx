import React, {useState, useEffect} from 'react';
import TabTable from './components/TabTable';
import {apiProductGetAll, apiProductGetByPage, apiProductOutput, apiProductSearch} from "@/api/product";
import Filter from "@/pages/ProductList/components/Filter";
import styles from "@/pages/ProductList/components/TabTable/index.module.scss";
import ContainerTitle from "@/components/ContainerTitle";
import IceContainer from '@icedesign/container';
import {Message, Pagination} from '@alifd/next'

export default function TopicList() {
  const [products, setProducts] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  // 选择数据
  var selected = [];
  // 初次请求数据
  useEffect(() => {
    apiProductGetAll().then(res => {
      setProducts(res.list);
      setPageInfo(res);
    });
  }, []);

  /**
   * 事件监听函数开始 》》》》》
   * @param value
   */
  const onFilterChange = (value) => {
    apiProductSearch(value.search).then(res => {
      setProducts(res.list);
      setPageInfo(res);
    });
    console.log(value)
  };

  const onDownloadClick = () => {
    if(selected.length === 0) {
      Message.warning('请先选择产品');
      return;
    }
    // 发出api请求并进行重定向下载
    apiProductOutput(selected).then(res => {
      // handle result
      console.log('request download success', res)
    }).catch(err => Message.error('下载失败，' + err))
  };

  const onSelectChange = (selectedArray) => {
    console.log('onselect change', selectedArray)
    selected = selectedArray;
  };

  const onPageChange = (page) => {
    apiProductGetByPage(page).then(res => {
      setProducts(res.list)
      setPageInfo(res);
    })
  };

  return (
    <div>
      <IceContainer className={styles.container}>
        <ContainerTitle
          title="产品列表"
          className={styles.title}
        />
        <Filter onDownloadClick={onDownloadClick} onChange={onFilterChange} style={'margin: 20px'}/>
        <TabTable onSelectChange={onSelectChange} dataSource={products}/>
        <Pagination className={styles.page} total={pageInfo.total} onChange={onPageChange}/>
      </IceContainer>
    </div>
  );
}
