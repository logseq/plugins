import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setRightSidebarVisible: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="setRightSidebarVisible"
         />

        <Description
          ns="App"
          name="setRightSidebarVisible"
          comment=""
        />

       <Discuss
          ns="App"
          name="setRightSidebarVisible"
       />
      </div>
  )
}

export default setRightSidebarVisible