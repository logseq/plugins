import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const invokeExternalCommand: NextPage = () => {
  return (
      <div className="main-page-content">
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