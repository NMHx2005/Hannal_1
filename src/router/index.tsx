import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/client/HomePage';
import ProjectPage from '@/pages/client/ProjectPage';
import ErrorPage from '@/pages/error/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projects',
    element: <ProjectPage />,
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