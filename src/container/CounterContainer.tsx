import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/counter/Counter';

import { increase, decrease, increase_by } from '../modules/counter';
import { RootState } from '../modules/index';

function CounterContainer() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();
    
    const onIncrease = useCallback(() => {
        dispatch(increase());
    }, [dispatch]);

    const onDecrease = useCallback(() => {
        dispatch(decrease());
    }, [dispatch]);

    const onIncreaseBy = useCallback((d: number) => {
        dispatch(increase_by(d));
    }, [dispatch]);

    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    )
}

export default CounterContainer
