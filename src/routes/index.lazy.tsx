import { createLazyFileRoute } from '@tanstack/react-router'
import About from '../components/About/About'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <About/>
  )
}
