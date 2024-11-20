import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/sailing')({
  component: () => <div>Hello /sailing!</div>
})