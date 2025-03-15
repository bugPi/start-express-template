/**
 * 生成骨架(简单版本)
 * @param num 骨架数量 默认1
 * @param type 骨架类型 默认line
 * @returns 骨架
 */
export const generateSkeleton = (num: number = 1, type: string = "line") => {
  return [
    {
      type,
      num,
    },
  ];
};
