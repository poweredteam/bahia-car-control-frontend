import { Route } from 'wouter'

import { Layout } from 'components'
import { SECTIONS } from 'utilities/routes'

export default function App() {
  return (
    <Layout>
      {SECTIONS.map(({ path, component }) => {
        return <Route key={path} path={path} component={component} />
      })}
    </Layout>
  )
}
