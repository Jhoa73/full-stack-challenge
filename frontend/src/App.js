import './App.css';
import "antd/dist/antd.css";
import "antd/lib/style/themes/default.less"
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import { routes } from 'utils/routes';
import { UsersPage } from 'pages/UsersPage';
import { MainRoute } from 'components/organims/Layout/MainRoute';
import { UserPage } from 'pages/UserPage';

const { home, users, userAdd, userEdit } = routes

const Home = <MainRoute page={<UsersPage />} />
const UserEdit = <MainRoute page={<UserPage />} />
const UserAdd = <MainRoute page={<UserPage isAdd={true} />} />

const Routes = () => {
  let routes = useRoutes([
    { path: home, element: Home },
    { path: users, element: Home },
    { path: userAdd, element: UserAdd },
    { path: userEdit(":user_id"), element: UserEdit },

  ]);
  return routes;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
