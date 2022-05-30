import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setFullScreen: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="setFullScreen"
         />

        <Description
          ns="App"
          name="setFullScreen"
          comment=""
        />

       <Discuss
          ns="App"
          name="setFullScreen"
       />
      </div>
  )
}

export default setFullScreen