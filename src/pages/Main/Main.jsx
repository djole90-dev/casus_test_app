import React from 'react'
import { Route, Switch} from 'react-router-dom'
import { Container } from './Main.styles'
import DashboardPage from './DashboardPage/DashboardPage'
import DocumentsPage from './DocumentsPage/DocumentsPage'
import TemplatesPage from './TemplatesPage/TemplatesPage'
import ConstultingPage from './ConsultingPage/ConsultingPage'


const Main = () => (
  <Container>
    <Switch>
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/dokumente" component={DocumentsPage} />
      <Route path="/vorlagen" component={TemplatesPage} />
      <Route path="/rechtsberatung" component={ConstultingPage} />
    </Switch>
  </Container>
)

export default Main