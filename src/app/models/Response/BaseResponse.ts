/**
 * clase base para las repsuestas del backend
 */
export class BaseResponse {

    public data:any[]
    public mensaje:responseMsg
    public total: number
    public success: boolean

}

class responseMsg {
    version: string
    msg: string
}