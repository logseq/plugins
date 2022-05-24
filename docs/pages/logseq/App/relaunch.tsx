import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const relaunch: NextPage = () => {
  return (
      <div className="main-page-content">
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