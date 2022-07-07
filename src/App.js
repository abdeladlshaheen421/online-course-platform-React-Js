import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFoundComponent } from "./components/notFoundComponent";
import { UnAuthorizedComponent } from "./components/unauthorizedComponent";
import { LoginComponent } from "./components/loginComponent";
import { CategoriesComponent } from "./components/categoriesComponent";
import { CoursesComponent } from "./components/coursesComponent";
import { RegisterComponent } from "./components/registerComponent";
import { AdminDashboardComponent } from "./components/admin/adminDashboardComponent";
import { UserDashboardComponent } from "./components/user/userDashboardComponent";
import { ProtectAdminRoute } from "./guards/adminGuard";
import { ProtectUserRoute } from "./guards/userGuard";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginComponent />} />
          <Route path="/login" exact element={<LoginComponent />} />
          <Route path="/register" exact element={<RegisterComponent />} />
          <Route path="/categories" exact element={<CategoriesComponent />} />
          <Route path="/courses" exact element={<CoursesComponent />} />

          <Route exact path="/user" element={<ProtectUserRoute />}>
            <Route path="" element={<UserDashboardComponent />} />
          </Route>
          <Route exact path="/admin" element={<ProtectAdminRoute />}>
            <Route path="" element={<AdminDashboardComponent />} />
          </Route>
          <Route
            path="/unauthorized"
            exact
            element={<UnAuthorizedComponent />}
          />
          <Route path="*" exact element={<NotFoundComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
