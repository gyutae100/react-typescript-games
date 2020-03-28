import {
    createAction,
    ActionType,
    createReducer
} from 'typesafe-actions';

//액션 type 선언
const INCREASE  = 'counter/INCREASE';
const DECREASE  = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_by';

//액션 생성 함수 선언
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

//액션 객체들에 대한 type준비하기
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

//상태 타입과 상태의 초깃값 선언하기
type CounterState = {
    count:number;
}

const initialState : CounterState = {
    count : 0
}

//리듀서 작성하기
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
});

export default counter;