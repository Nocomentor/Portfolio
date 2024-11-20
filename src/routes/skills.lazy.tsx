import { createLazyFileRoute } from '@tanstack/react-router'
import Skills from '../components/Skills/Skills'

export const Route = createLazyFileRoute('/skills')({
  component: () => <Skills/>
})