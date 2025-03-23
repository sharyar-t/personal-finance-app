export const publicRoutes = [
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'Login' },
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue'),
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: () => import('@/views/auth/SignUp.vue'),
      },
    ],
  },
]
