export interface TreeOption {
    key: string
    label: string
    path: string
    icon: string,
    isExpand?: boolean,
    children?: TreeOption[]
}