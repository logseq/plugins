import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getCurrentPageBlocksTree: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getCurrentPageBlocksTree"
          comment="
"
        />

       <Discuss
          ns="Editor"
          name="getCurrentPageBlocksTree"
       />
      </div>
  )
}

export default getCurrentPageBlocksTree