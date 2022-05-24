import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getPageBlocksTree: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getPageBlocksTree"
          comment="
"
        />

       <Discuss
          ns="Editor"
          name="getPageBlocksTree"
       />
      </div>
  )
}

export default getPageBlocksTree