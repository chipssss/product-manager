import React, {useState, useEffect} from 'react';
import Overview from './components/Overview';
import TabTable from './components/TabTable';
import {apiProductGetAll} from "@/api/product";

export default function TopicList() {
  const [products, setProducts] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  // 初次请求数据
  useEffect(() => {
    apiProductGetAll().then(res => {
      setProducts(res.list);
      setPageInfo(res);
    });
  }, []);

  return (
    <div>
      <Overview />
      <TabTable dataSource={products} pageInfo={pageInfo} />
    </div>
  );
}
