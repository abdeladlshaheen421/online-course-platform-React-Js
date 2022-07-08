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
import { LoggedOut } from "./guards/authGuard";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Login and register Routes*/}
          <Route path="" element={<LoggedOut />}>
            <Route index path="/login" exact element={<LoginComponent />} />
            <Route path="/register" exact element={<RegisterComponent />} />
          </Route>
          {/* categories and Courses routes */}
          <Route path="/categories" exact element={<CategoriesComponent />} />
          <Route path="/courses" exact element={<CoursesComponent />} />
          {/*user routes */}
          <Route
            exact
            path="/user"
            element={
              <ProtectUserRoute>
                <UserDashboardComponent />
              </ProtectUserRoute>
            }
          />
          {/* admin routes*/}
          <Route
            exact
            path="/admin"
            element={
              <ProtectAdminRoute>
                <AdminDashboardComponent />
              </ProtectAdminRoute>
            }
          />
          {/* unauthorized route */}
          <Route
            path="/unauthorized"
            exact
            element={<UnAuthorizedComponent />}
          />
          {/* Not Found Route */}
          <Route path="*" exact element={<NotFoundComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
