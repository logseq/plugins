import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getCurrentPageBlocksTree: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getCurrentPageBlocksTree"
          comment="
"
        />
      </div>
  )
}

export default getCurrentPageBlocksTree