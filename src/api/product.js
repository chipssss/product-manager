import {post} from "@/api/http";

/**
 * 模糊搜索产品
 * @param searchObj 格式参考下面定义
 * @returns {Promise<unknown>}
 */
export function apiProductSearch(searchObj) {
  return post('backend/product/search.do', searchObj);
}

/**
 * searchProduct 格式
 * @type {{pageSize: number, keyword: string, pageNum: number}}
 */
export const searchObj = {
  pageNum: 1,
  pageSize: 10,
  keyword: ''
};


/**
 * 导出产品接口
 * @param productIdList
 * @returns {Promise<data>}
 * data : {
 *  "url": "https://www.mikelam.top/", // 服务器相对路径 头部
    "zipUri": "1.zip", // zip包尾部
    "excelUri": "15.excel" // excel表尾部
 * }
 */
export function apiProductOutput(productIdList) {
  return post('/portal/product/output.do', {
    productIds: productIdList
  })
}

