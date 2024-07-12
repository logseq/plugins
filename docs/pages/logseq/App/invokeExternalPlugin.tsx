import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const invokeExternalPlugin: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="invokeExternalPlugin"
         />

        <Description
          ns="App"
          name="invokeExternalPlugin"
          comment=""
        />

       <Discuss
          ns="App"
          name="invokeExternalPlugin"
       />
      </div>
  )
}

export default invokeExternalPlugin