import { TabNavigator } from 'react-navigation';

import LoginForm from './LoginForm';
import newsPage from './NewsPage';

const Tabs = TabNavigator({
  LoginForm: {
    screen: LoginForm,
  },
  newsPage: {
    screen: newsPage,
  },
});

export default Tabs;
