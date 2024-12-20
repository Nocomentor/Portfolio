/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SkillsLazyImport = createFileRoute('/skills')()
const SailingLazyImport = createFileRoute('/sailing')()
const ProjectsLazyImport = createFileRoute('/projects')()
const EducationLazyImport = createFileRoute('/education')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SkillsLazyRoute = SkillsLazyImport.update({
  path: '/skills',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/skills.lazy').then((d) => d.Route))

const SailingLazyRoute = SailingLazyImport.update({
  path: '/sailing',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sailing.lazy').then((d) => d.Route))

const ProjectsLazyRoute = ProjectsLazyImport.update({
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/projects.lazy').then((d) => d.Route))

const EducationLazyRoute = EducationLazyImport.update({
  path: '/education',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/education.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/education': {
      preLoaderRoute: typeof EducationLazyImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      preLoaderRoute: typeof ProjectsLazyImport
      parentRoute: typeof rootRoute
    }
    '/sailing': {
      preLoaderRoute: typeof SailingLazyImport
      parentRoute: typeof rootRoute
    }
    '/skills': {
      preLoaderRoute: typeof SkillsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  EducationLazyRoute,
  ProjectsLazyRoute,
  SailingLazyRoute,
  SkillsLazyRoute,
])

/* prettier-ignore-end */
