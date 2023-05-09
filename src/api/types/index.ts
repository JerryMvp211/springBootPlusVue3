
/**
 * @description 分页列表参数配置
 */
export interface ListParams {
    pageIndex?:number
    pageSize?:number
    orderBy?:OrderByParams
}

/**
 * @description 排序参数配置
 */
export interface OrderByParams {
    column?:string
    asc?:boolean
    orderBy?:string
}


/**
 * @description 接口返回值类型
 * */
export type ResultType = {
    code:number,
    data:NullType<any>
    msg:string
    success:boolean
    time:string|Date|number
}

/**
 * @description 列表接口返回值类型
 * */
export type ListResultType = {
    list:Array<any>
    total?:number
}
