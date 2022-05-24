import { NextPage } from 'next'
import { Description } from '@/components/Description'

const setFullScreen: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="setFullScreen"
          comment=""
        />
      </div>
  )
}

export default setFullScreen