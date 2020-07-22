import { Status } from '../constants';

interface Res<T> {
    code: Status,
    data: T,
    msg: string
}

export class Result {
    static success<T>(data: T): Res<T> {
        return {
            code: Status.success,
            data,
            msg: ''
        };
    }

    static fail(msg: string): Res<string> {
        return {
            code: Status.fail,
            data: null,
            msg
        };
    }

    static unAuth(): Res<string> {
        return {
            code: Status.unAuth,
            data: null,
            msg: '未登录'
        };
    }
}