import { Route, Switch } from "react-router";
import InputImage from "../views/InputImage";
import Camera from "../containers/Camera";
import { BrowserRouter } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/upload">
          <InputImage />
        </Route>
        <Route exact path="/camera">
          <Camera />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
