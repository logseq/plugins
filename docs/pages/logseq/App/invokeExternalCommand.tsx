import { NextPage } from 'next'
import { Description } from '@/components/Description'

const invokeExternalCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="invokeExternalCommand"
          comment=""
        />
      </div>
  )
}

export default invokeExternalCommand