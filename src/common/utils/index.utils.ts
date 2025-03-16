/**
 * 将手机号中间四位打码
 * @param phoneNumber - 原始手机号
 * @returns 打码后的手机号
 */
export const maskPhoneNumber = (phoneNumber: string): string => {
  const phoneRegex = /^1[3-9]\d{9}$/;
  if (!phoneRegex.test(phoneNumber)) return "";
  return `${phoneNumber.slice(0, 3)}****${phoneNumber.slice(7)}`;
};

/**
 * 格式化数字 小数点后两位
 * @param v
 * @returns
 */
export const formattedNumber = (v: number) => v.toFixed(2);
