import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const invokeExternalCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="invokeExternalCommand"
         />

        <Description
          ns="App"
          name="invokeExternalCommand"
          comment=""
        />

       <Discuss
          ns="App"
          name="invokeExternalCommand"
       />
      </div>
  )
}

export default invokeExternalCommand