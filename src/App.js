import React, { lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components";
import { useApodData } from "./hooks";

// Views
const Home = lazy(() => import("./views/Home"));
const ImageDetails = lazy(() => import("./views/ImageDetails"));

function App() {
  const location = useLocation();
  useApodData();
  
  return (
    
    <main className="App">
      <NavBar location={location} />
      <Suspense fallback={<div className="loader"><span>Loading Images</span></div>}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/details/:id" component={ImageDetails} />
        </Switch>
      </Suspense>
    </main>

  );
}

export default App;
