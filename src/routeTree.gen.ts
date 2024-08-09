/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppImport } from './routes/_app'
import { Route as IndexImport } from './routes/index'
import { Route as AppOnboardingLayoutImport } from './routes/_app/onboarding/_layout'
import { Route as AppLoginLayoutImport } from './routes/_app/login/_layout'
import { Route as AppDashboardLayoutImport } from './routes/_app/dashboard/_layout'
import { Route as AppLoginLayoutIndexImport } from './routes/_app/login/_layout.index'
import { Route as AppDashboardLayoutIndexImport } from './routes/_app/dashboard/_layout.index'
import { Route as AppOnboardingLayoutUsernameImport } from './routes/_app/onboarding/_layout.username'
import { Route as AppDashboardLayoutSettingsImport } from './routes/_app/dashboard/_layout.settings'
import { Route as AppDashboardLayoutCheckoutImport } from './routes/_app/dashboard/_layout.checkout'
import { Route as AppDashboardLayoutSettingsIndexImport } from './routes/_app/dashboard/_layout.settings.index'
import { Route as AppDashboardLayoutSettingsBillingImport } from './routes/_app/dashboard/_layout.settings.billing'

// Create Virtual Routes

const AppOnboardingImport = createFileRoute('/_app/onboarding')()
const AppLoginImport = createFileRoute('/_app/login')()
const AppDashboardImport = createFileRoute('/_app/dashboard')()

// Create/Update Routes

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AppOnboardingRoute = AppOnboardingImport.update({
  path: '/onboarding',
  getParentRoute: () => AppRoute,
} as any)

const AppLoginRoute = AppLoginImport.update({
  path: '/login',
  getParentRoute: () => AppRoute,
} as any)

const AppDashboardRoute = AppDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => AppRoute,
} as any)

const AppOnboardingLayoutRoute = AppOnboardingLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => AppOnboardingRoute,
} as any)

const AppLoginLayoutRoute = AppLoginLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => AppLoginRoute,
} as any)

const AppDashboardLayoutRoute = AppDashboardLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => AppDashboardRoute,
} as any)

const AppLoginLayoutIndexRoute = AppLoginLayoutIndexImport.update({
  path: '/',
  getParentRoute: () => AppLoginLayoutRoute,
} as any)

const AppDashboardLayoutIndexRoute = AppDashboardLayoutIndexImport.update({
  path: '/',
  getParentRoute: () => AppDashboardLayoutRoute,
} as any)

const AppOnboardingLayoutUsernameRoute =
  AppOnboardingLayoutUsernameImport.update({
    path: '/username',
    getParentRoute: () => AppOnboardingLayoutRoute,
  } as any)

const AppDashboardLayoutSettingsRoute = AppDashboardLayoutSettingsImport.update(
  {
    path: '/settings',
    getParentRoute: () => AppDashboardLayoutRoute,
  } as any,
)

const AppDashboardLayoutCheckoutRoute = AppDashboardLayoutCheckoutImport.update(
  {
    path: '/checkout',
    getParentRoute: () => AppDashboardLayoutRoute,
  } as any,
)

const AppDashboardLayoutSettingsIndexRoute =
  AppDashboardLayoutSettingsIndexImport.update({
    path: '/',
    getParentRoute: () => AppDashboardLayoutSettingsRoute,
  } as any)

const AppDashboardLayoutSettingsBillingRoute =
  AppDashboardLayoutSettingsBillingImport.update({
    path: '/billing',
    getParentRoute: () => AppDashboardLayoutSettingsRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_app/dashboard': {
      id: '/_app/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AppDashboardImport
      parentRoute: typeof AppImport
    }
    '/_app/dashboard/_layout': {
      id: '/_app/dashboard/_layout'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AppDashboardLayoutImport
      parentRoute: typeof AppDashboardRoute
    }
    '/_app/login': {
      id: '/_app/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AppLoginImport
      parentRoute: typeof AppImport
    }
    '/_app/login/_layout': {
      id: '/_app/login/_layout'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AppLoginLayoutImport
      parentRoute: typeof AppLoginRoute
    }
    '/_app/onboarding': {
      id: '/_app/onboarding'
      path: '/onboarding'
      fullPath: '/onboarding'
      preLoaderRoute: typeof AppOnboardingImport
      parentRoute: typeof AppImport
    }
    '/_app/onboarding/_layout': {
      id: '/_app/onboarding/_layout'
      path: '/onboarding'
      fullPath: '/onboarding'
      preLoaderRoute: typeof AppOnboardingLayoutImport
      parentRoute: typeof AppOnboardingRoute
    }
    '/_app/dashboard/_layout/checkout': {
      id: '/_app/dashboard/_layout/checkout'
      path: '/checkout'
      fullPath: '/dashboard/checkout'
      preLoaderRoute: typeof AppDashboardLayoutCheckoutImport
      parentRoute: typeof AppDashboardLayoutImport
    }
    '/_app/dashboard/_layout/settings': {
      id: '/_app/dashboard/_layout/settings'
      path: '/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof AppDashboardLayoutSettingsImport
      parentRoute: typeof AppDashboardLayoutImport
    }
    '/_app/onboarding/_layout/username': {
      id: '/_app/onboarding/_layout/username'
      path: '/username'
      fullPath: '/onboarding/username'
      preLoaderRoute: typeof AppOnboardingLayoutUsernameImport
      parentRoute: typeof AppOnboardingLayoutImport
    }
    '/_app/dashboard/_layout/': {
      id: '/_app/dashboard/_layout/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof AppDashboardLayoutIndexImport
      parentRoute: typeof AppDashboardLayoutImport
    }
    '/_app/login/_layout/': {
      id: '/_app/login/_layout/'
      path: '/'
      fullPath: '/login/'
      preLoaderRoute: typeof AppLoginLayoutIndexImport
      parentRoute: typeof AppLoginLayoutImport
    }
    '/_app/dashboard/_layout/settings/billing': {
      id: '/_app/dashboard/_layout/settings/billing'
      path: '/billing'
      fullPath: '/dashboard/settings/billing'
      preLoaderRoute: typeof AppDashboardLayoutSettingsBillingImport
      parentRoute: typeof AppDashboardLayoutSettingsImport
    }
    '/_app/dashboard/_layout/settings/': {
      id: '/_app/dashboard/_layout/settings/'
      path: '/'
      fullPath: '/dashboard/settings/'
      preLoaderRoute: typeof AppDashboardLayoutSettingsIndexImport
      parentRoute: typeof AppDashboardLayoutSettingsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AppRoute: AppRoute.addChildren({
    AppDashboardRoute: AppDashboardRoute.addChildren({
      AppDashboardLayoutRoute: AppDashboardLayoutRoute.addChildren({
        AppDashboardLayoutCheckoutRoute,
        AppDashboardLayoutSettingsRoute:
          AppDashboardLayoutSettingsRoute.addChildren({
            AppDashboardLayoutSettingsBillingRoute,
            AppDashboardLayoutSettingsIndexRoute,
          }),
        AppDashboardLayoutIndexRoute,
      }),
    }),
    AppLoginRoute: AppLoginRoute.addChildren({
      AppLoginLayoutRoute: AppLoginLayoutRoute.addChildren({
        AppLoginLayoutIndexRoute,
      }),
    }),
    AppOnboardingRoute: AppOnboardingRoute.addChildren({
      AppOnboardingLayoutRoute: AppOnboardingLayoutRoute.addChildren({
        AppOnboardingLayoutUsernameRoute,
      }),
    }),
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_app"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_app": {
      "filePath": "_app.ts",
      "children": [
        "/_app/dashboard",
        "/_app/login",
        "/_app/onboarding"
      ]
    },
    "/_app/dashboard": {
      "filePath": "_app/dashboard",
      "parent": "/_app",
      "children": [
        "/_app/dashboard/_layout"
      ]
    },
    "/_app/dashboard/_layout": {
      "filePath": "_app/dashboard/_layout.tsx",
      "parent": "/_app/dashboard",
      "children": [
        "/_app/dashboard/_layout/checkout",
        "/_app/dashboard/_layout/settings",
        "/_app/dashboard/_layout/"
      ]
    },
    "/_app/login": {
      "filePath": "_app/login",
      "parent": "/_app",
      "children": [
        "/_app/login/_layout"
      ]
    },
    "/_app/login/_layout": {
      "filePath": "_app/login/_layout.tsx",
      "parent": "/_app/login",
      "children": [
        "/_app/login/_layout/"
      ]
    },
    "/_app/onboarding": {
      "filePath": "_app/onboarding",
      "parent": "/_app",
      "children": [
        "/_app/onboarding/_layout"
      ]
    },
    "/_app/onboarding/_layout": {
      "filePath": "_app/onboarding/_layout.tsx",
      "parent": "/_app/onboarding",
      "children": [
        "/_app/onboarding/_layout/username"
      ]
    },
    "/_app/dashboard/_layout/checkout": {
      "filePath": "_app/dashboard/_layout.checkout.tsx",
      "parent": "/_app/dashboard/_layout"
    },
    "/_app/dashboard/_layout/settings": {
      "filePath": "_app/dashboard/_layout.settings.tsx",
      "parent": "/_app/dashboard/_layout",
      "children": [
        "/_app/dashboard/_layout/settings/billing",
        "/_app/dashboard/_layout/settings/"
      ]
    },
    "/_app/onboarding/_layout/username": {
      "filePath": "_app/onboarding/_layout.username.tsx",
      "parent": "/_app/onboarding/_layout"
    },
    "/_app/dashboard/_layout/": {
      "filePath": "_app/dashboard/_layout.index.tsx",
      "parent": "/_app/dashboard/_layout"
    },
    "/_app/login/_layout/": {
      "filePath": "_app/login/_layout.index.tsx",
      "parent": "/_app/login/_layout"
    },
    "/_app/dashboard/_layout/settings/billing": {
      "filePath": "_app/dashboard/_layout.settings.billing.tsx",
      "parent": "/_app/dashboard/_layout/settings"
    },
    "/_app/dashboard/_layout/settings/": {
      "filePath": "_app/dashboard/_layout.settings.index.tsx",
      "parent": "/_app/dashboard/_layout/settings"
    }
  }
}
ROUTE_MANIFEST_END */
