import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LogIn from "./pages/LogIn";
import OrderManagementDetail from "./pages/OrderManagementDetail";
import CustomerDetailTransaction from "./pages/CustomerDetailTransaction";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Customers from "./pages/Customers";
import CustomerDetailTransaction1 from "./pages/CustomerDetailTransaction1";
import PostsRequests from "./pages/PostsRequests";
import Categories from "./pages/Categories";
import CategoriesDelete from "./pages/CategoriesDelete";
import CategoriesDeleteConfirma from "./pages/CategoriesDeleteConfirma";
import AddCategory from "./pages/AddCategory";
import AddCategoryError from "./pages/AddCategoryError";
import AddCategoryConfirmation from "./pages/AddCategoryConfirmation";
import Profile from "./pages/Profile";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/order-management-detail":
        title = "";
        metaDescription = "";
        break;
      case "/customer-detail-transaction-detail1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/transactions":
        title = "";
        metaDescription = "";
        break;
      case "/customers":
        title = "";
        metaDescription = "";
        break;
      case "/customer-detail-transaction-detail":
        title = "";
        metaDescription = "";
        break;
      case "/posts-requests":
        title = "";
        metaDescription = "";
        break;
      case "/categories":
        title = "";
        metaDescription = "";
        break;
      case "/categories-delete":
        title = "";
        metaDescription = "";
        break;
      case "/categories-delete-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/add-category":
        title = "";
        metaDescription = "";
        break;
      case "/add-category-error":
        title = "";
        metaDescription = "";
        break;
      case "/add-category-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route
        path="/order-management-detail"
        element={<OrderManagementDetail />}
      />
      <Route
        path="/customer-detail-transaction-detail1"
        element={<CustomerDetailTransaction />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/customers" element={<Customers />} />
      <Route
        path="/customer-detail-transaction-detail"
        element={<CustomerDetailTransaction1 />}
      />
      <Route path="/posts-requests" element={<PostsRequests />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories-delete" element={<CategoriesDelete />} />
      <Route
        path="/categories-delete-confirmation"
        element={<CategoriesDeleteConfirma />}
      />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/add-category-error" element={<AddCategoryError />} />
      <Route
        path="/add-category-confirmation"
        element={<AddCategoryConfirmation />}
      />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
export default App;
