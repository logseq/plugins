import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setLeftSidebarVisible: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="setLeftSidebarVisible"
         />

        <Description
          ns="App"
          name="setLeftSidebarVisible"
          comment=""
        />

       <Discuss
          ns="App"
          name="setLeftSidebarVisible"
       />
      </div>
  )
}

export default setLeftSidebarVisible