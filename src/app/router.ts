import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    element: ,
    children: [
      {
        path: '/login',
        lazy: () => import('@/pages/login.page'),
      },
      {
        path: '/home',
        lazy: () => import('@/pages/home.page'),
      },
    ]
  }
]);
