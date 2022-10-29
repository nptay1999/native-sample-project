import { Provider } from 'react-redux';
import Navigation from './Navigation';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
