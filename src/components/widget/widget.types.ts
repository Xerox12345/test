/* eslint-disable @typescript-eslint/no-explicit-any */
export interface WidgetComponentProps {
  title: string;
  children: React.ReactNode;
}

export interface OnResize {
  node: any;
  size: any;
  handle: any;
}