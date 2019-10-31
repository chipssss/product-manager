import {post} from "@/api/http";

let curSearchObj;

/**
 * 模糊搜索产品
 * @returns {Promise<unknown>}
 * @param keyword
 */
export function apiProductSearch(keyword) {
  searchObj.keyword = keyword;
  curSearchObj = searchObj;
  return post('backend/product/search.do', searchObj);
}

export function apiProductGetAll() {
  return apiProductSearch(null);
}

export function nextPage() {
  if (curSearchObj) {
    curSearchObj.pageNum++;
  }
  return apiProductSearch(curSearchObj)
}

export function apiProductGetByPage(page) {
  if (curSearchObj) {
    curSearchObj.pageNum = page;
  }
  return post('backend/product/search.do', curSearchObj);
}

curSearchObj = null;

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
 * @returns {Promise<data>}
 * data : {
 *  "url": "https://www.mikelam.top/", // 服务器相对路径 头部
    "zipUri": "1.zip", // zip包尾部
    "excelUri": "15.excel" // excel表尾部
 * }
 * @param selected
 */
export function apiProductOutput(selected) {
  var idList = [];
  selected.map(item => idList.push(item.id));
  console.log('idList', idList)
  return post('/portal/product/output.do', {
    productIds: idList
  })
}

