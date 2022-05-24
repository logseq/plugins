import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getPageBlocksTree: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getPageBlocksTree"
          comment="
"
        />
      </div>
  )
}

export default getPageBlocksTree