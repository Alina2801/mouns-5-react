import { BrowserRouter, Routes,Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import NavBar from "./components/navBar/NavBar";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import { LoginPage } from "./pages/loginPage/LoginPage";
import Layout from "./components/hoc/Layout";
import LastPage from "./pages/lastPage/LastPage";
import UserPage from "./pages/userPage/UserPage";
import UserInfo from "./components/userInfo/UserInfo";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import ImagePage from "./pages/imagePage/ImagePage";
import ImageInfo from "./components/imageInfo/ImageInfo";
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
            <Route index element={<MainPage/>} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="portfolio" element={<PortfolioPage/>}/>
            <Route path="lastpage" element={<LastPage/>}/>
            <Route path="/users" element={<UserPage/>}></Route>
            <Route path="/users/:id" element={<UserInfo/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/image/:id" element={<ImageInfo/>}/>
            <Route path="/photo" element={<ImagePage/>}/>
      </Route>

      <Route path="login" element={<LoginPage></LoginPage>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
