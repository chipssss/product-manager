import {get, post} from "@/api/http";

export function apiSupplierGetList() {
  return get('/backend/user/allSupplierInfo.do');
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

