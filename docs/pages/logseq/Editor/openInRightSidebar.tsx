import { NextPage } from 'next'
import { Description } from '@/components/Description'

const openInRightSidebar: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="openInRightSidebar"
          comment=""
        />
      </div>
  )
}

export default openInRightSidebar