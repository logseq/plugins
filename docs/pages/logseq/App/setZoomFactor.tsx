import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setZoomFactor: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="setZoomFactor"
         />

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