/**
 * demo页面的接口文档
 */
export interface ListItem {
    id: number;
    name: string;
}

export interface DemoState {
    name: string;
    list: ListItem[];
}