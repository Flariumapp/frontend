import { applyMiddleware, createStore, compose } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

const composeEnhancer = compose;
// const makeStore = () => createStore(rootReducer, composeEnhancer(applyMiddleware(Thunk)));
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(Thunk)));

// export const wrapper = createWrapper(makeStore);

const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default ReduxProvider;
