import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const relaunch: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="relaunch"
         />

        <Description
          ns="App"
          name="relaunch"
          comment=""
        />

       <Discuss
          ns="App"
          name="relaunch"
       />
      </div>
  )
}

export default relaunch