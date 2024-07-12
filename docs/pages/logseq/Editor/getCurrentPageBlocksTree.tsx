import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getCurrentPageBlocksTree: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getCurrentPageBlocksTree"
         />

        <Description
          ns="Editor"
          name="getCurrentPageBlocksTree"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getCurrentPageBlocksTree"
       />
      </div>
  )
}

export default getCurrentPageBlocksTree