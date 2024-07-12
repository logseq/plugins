import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const clearRightSidebarBlocks: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="clearRightSidebarBlocks"
         />

        <Description
          ns="App"
          name="clearRightSidebarBlocks"
          comment=""
        />

       <Discuss
          ns="App"
          name="clearRightSidebarBlocks"
       />
      </div>
  )
}

export default clearRightSidebarBlocks