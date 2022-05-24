import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getUserInfo: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="getUserInfo"
          comment=""
        />
      </div>
  )
}

export default getUserInfo