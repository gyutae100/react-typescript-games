import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

//액션 객체들에 대한 type
export type TodoAction = ActionType<typeof actions>

//상태의 타입과 상태의 초깃값 선언하기
export interface ITodo{
    id : number;
    content : string;
    done : boolean;
}

export interface TodoState{
    todos: ITodo[]
}