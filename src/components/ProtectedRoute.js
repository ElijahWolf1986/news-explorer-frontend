import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  React.useEffect(() => {
    if (localStorage.loggedIn === "true") {
      props.onOpenLogin();
    }
  });

  return (
    <Route>
      {() =>
        localStorage.loggedIn === "false" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    </Route>
  );
};

export default ProtectedRoute;
