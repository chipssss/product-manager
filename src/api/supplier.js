import {get, post} from "@/api/http";

export function apiSupplierGetList() {
  return getSupplierListByStatus(STATUS.passed);
}

export function apiSupplierGetUnPassedList() {
  return getSupplierListByStatus(STATUS.unPassed);
}

const STATUS = {
  passed: 1,
  unPassed: 0
};
function getSupplierListByStatus(status) {
  return new Promise(resolve => {
    get('/backend/user/allSupplierInfo.do')
      .then(res => resolve(res.filter(item => item.status === status))) // 过滤
  })
}

/**
 * 审核供应商账号
 * @param params [] ，审核id列表
 * @returns {Promise<unknown>}
 */
export function apiSupplierVerify(supplierIdList) {
  return post('backend/user/verifySupplier.do', {
    supplierIds: supplierIdList
  })
}

export function apiSupplierGet(supplierId) {
  return post('backend/user/supplierInfo.do', {
    supplierId: supplierId
  });
}

