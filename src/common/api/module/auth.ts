import type { ParamsType } from "@/common/types/request.types";

import { RequestMethodTypeEnum } from "@/common/enum/request.enmu";
import { requestService } from "@/common/request";

enum API {
  LOGIN = "/sysUser/login",
}

// 系统登录
export const sysSingin = (params: ParamsType) => {
  return requestService(
    {
      url: API.LOGIN,
      method: RequestMethodTypeEnum.POST,
    },
    params
  );
};
