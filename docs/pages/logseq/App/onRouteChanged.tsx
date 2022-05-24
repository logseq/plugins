import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onRouteChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onRouteChanged"
          comment=""
        />

       <Discuss
          ns="App"
          name="onRouteChanged"
       />
      </div>
  )
}

export default onRouteChanged