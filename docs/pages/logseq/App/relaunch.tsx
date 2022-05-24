import { NextPage } from 'next'
import { Description } from '@/components/Description'

const relaunch: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="relaunch"
          comment=""
        />
      </div>
  )
}

export default relaunch