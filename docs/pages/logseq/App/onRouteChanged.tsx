import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onRouteChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="onRouteChanged"
         />

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