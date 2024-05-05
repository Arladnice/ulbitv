import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type RootState = ReturnType<typeof createReduxStore>['getState'];
