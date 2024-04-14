import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const CasePage = lazy(() => import('src/pages/cases'));
export const UserPage = lazy(() => import('src/pages/rachel'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const FilesPage = lazy(() => import('src/pages/files'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const FileUpload = lazy(() => import('src/pages/file-upload'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'rachel', element: <UserPage /> },
        { path: 'files', element: <FilesPage /> },
        { path: 'cases', element: <CasePage /> },
         { path: 'file-upload', element: <FileUpload /> },

      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
   
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    
  ]);

  return routes;
}
