import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getPageBlocksTree: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getPageBlocksTree"
         />

        <Description
          ns="Editor"
          name="getPageBlocksTree"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getPageBlocksTree"
       />
      </div>
  )
}

export default getPageBlocksTree