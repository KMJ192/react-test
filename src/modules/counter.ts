import { handleActions, createAction } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increase_by = createAction<number>(INCREASE_BY);

type CounterAction = 
    ReturnType<typeof increase> |
    ReturnType<typeof decrease> |
    ReturnType<typeof increase_by>;

export interface CounterState{
    count: number;
}
export const initialCounterState: CounterState = {
    count: 0
}

export default handleActions<CounterState, CounterAction>({
    [INCREASE]: (state: CounterState) => ({
        ...state,
        count: state.count + 1
    }),
    [DECREASE]: (state: CounterState) => ({
        ...state,
        count: state.count - 1
    }),
    [INCREASE_BY]: (state: CounterState, action: CounterAction) => ({
        ...state,
        count: state.count + action.payload
    })
}, initialCounterState);