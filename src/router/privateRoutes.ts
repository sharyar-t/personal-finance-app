export const privateRoutes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Overview',
        component: () => import('@/views/Overview.vue'),
      },
      {
        path: '/transactions',
        name: 'Transactions',
        component: () => import('@/views/Transactions.vue'),
      },
      {
        path: '/budgets',
        name: 'Budgets',
        component: () => import('@/views/Budgets.vue'),
      },
      {
        path: '/pots',
        name: 'Pots',
        component: () => import('@/views/Pots.vue'),
      },
      {
        path: '/recurring-bills',
        name: 'RecurringBills',
        component: () => import('@/views/RecurringBills.vue'),
      },
    ],
  },
]
