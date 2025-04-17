import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/client/HomePage/HomePage';
import ProjectPage from '@/pages/client/ProjectPage/ProjectPage';
import AboutPage from '@/pages/client/AboutPage/AboutPage';
import NewsPage from '@/pages/client/News/NewsPage';
import ServicesPage from '@/pages/client/Services/ServicesPage';
import RecruitmentPage from '@/pages/client/Recruitment/RecruitmentPage';
import ContactPage from '@/pages/client/Contact/ContactPage';
import ErrorPage from '@/pages/error/ErrorPage';
import ProductsPage from '@/pages/client/Products/ProductsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/projects',
    element: <ProjectPage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
  {
    path: '/news/:slug',
    element: <NewsPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/services/:slug',
    element: <ServicesPage />,
  },
  {
    path: '/recruitment',
    element: <RecruitmentPage />,
  },
  {
    path: '/recruitment/:slug',
    element: <RecruitmentPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/admin',
    element: <div>Admin Page - Coming Soon</div>,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]); 