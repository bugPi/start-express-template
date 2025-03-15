import type { JSX } from "vue/jsx-runtime";

export interface ColumnsType {
  title: string;
  key: string;
  dataIndex: string;
  align?: "left" | "center" | "right";
  customRender?: (params: { row: Record<string, any> }) => JSX.Element;
}
