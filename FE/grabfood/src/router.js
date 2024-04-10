import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/users/homePage";
import MasterLayout from "./pages/users/theme/masterlayout";
import ListStorePage from "./pages/users/listStorePage";
import Detailmenu from "./pages/users/detailsmenu";
import Orders from "./pages/users/orders";

const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
      // path: ROUTERS.USER.STORE,
      // component: <ListStorePage />,
      // path: ROUTERS.USER.MENU,
      // component: <Detailmenu />,
      // path: ROUTERS.USER.ORDER,
      // component: <Orders />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
