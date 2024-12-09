import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category/Category";
import News from "../Pages/News/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "../PrivateRouter/PrivateRoutes";
import Others from "../Pages/Others/Others";
import Profile from "../Pages/Others/Profile";

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch("https://dragon-news-server-mocha-sigma.vercel.app/news")
         },
         {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`https://dragon-news-server-mocha-sigma.vercel.app/category/${params.id}`)
         },
         {
            path: '/news/:id',
            element: <PrivateRoutes><News></News></PrivateRoutes>,
            loader: ({ params }) => fetch(`https://dragon-news-server-mocha-sigma.vercel.app/news/${params.id}`)
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/terms',
            element: <Others></Others>
         },
         {
            path: '/profile',
            element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
         }
      ]

   }
])