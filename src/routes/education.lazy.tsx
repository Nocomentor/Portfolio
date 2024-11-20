import { createLazyFileRoute } from '@tanstack/react-router'
import Education from '../components/Education/Education'

export const Route = createLazyFileRoute('/education')({
  component: () => <Education/>
})