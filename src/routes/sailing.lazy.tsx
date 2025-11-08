import { createLazyFileRoute } from '@tanstack/react-router'
import Sailiing from '../components/Sailiing/Sailiing'

export const Route = createLazyFileRoute('/sailing')({
  component: () => <Sailiing/>
})