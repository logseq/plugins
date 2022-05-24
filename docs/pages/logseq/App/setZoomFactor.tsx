import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setZoomFactor: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="setZoomFactor"
          comment=""
        />

       <Discuss
          ns="App"
          name="setZoomFactor"
       />
      </div>
  )
}

export default setZoomFactor