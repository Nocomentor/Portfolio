import { createLazyFileRoute } from '@tanstack/react-router'
import Projects from '../components/Projects/Projects'

export const Route = createLazyFileRoute('/projects')({
  component: About,
})

function About() {
  return <Projects/>
}
