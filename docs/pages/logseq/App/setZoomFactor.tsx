import { NextPage } from 'next'
import { Description } from '@/components/Description'

const setZoomFactor: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="setZoomFactor"
          comment=""
        />
      </div>
  )
}

export default setZoomFactor