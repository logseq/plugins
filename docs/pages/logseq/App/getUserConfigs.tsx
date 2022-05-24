import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getUserConfigs: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="getUserConfigs"
          comment=""
        />

       <Discuss
          ns="App"
          name="getUserConfigs"
       />
      </div>
  )
}

export default getUserConfigs