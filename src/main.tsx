import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import configureStore from './store/configureStore'

export const store = configureStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store.store}>
    <App />
  </Provider>
)
