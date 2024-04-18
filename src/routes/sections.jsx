import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const CasePage = lazy(() => import('src/pages/cases'));
export const UserPage = lazy(() => import('src/pages/rachel'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const FilesPage = lazy(() => import('src/pages/files'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const Case = lazy(() => import('src/pages/case'));
export const FilePage = lazy(() => import('src/pages/file'));
export const Rachel2 = lazy(() => import('src/pages/rachel2'));
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
        { path: 'rachel', element: <Rachel2 /> },
        { path: 'files', element: <FilesPage /> },
        { path: 'cases', element: <CasePage /> },
        { path: 'case/:id', element: <Case /> },
        { path: 'file/:id', element: <FilePage /> },
        { path: 'rachel2', element: <Rachel2 /> },
      ],
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
