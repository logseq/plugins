import { NextPage } from 'next'
import { Description } from '@/components/Description'

const onRouteChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onRouteChanged"
          comment=""
        />
      </div>
  )
}

export default onRouteChanged