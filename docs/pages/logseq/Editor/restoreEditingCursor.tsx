import { NextPage } from 'next'
import { Description } from '@/components/Description'

const restoreEditingCursor: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="restoreEditingCursor"
          comment=""
        />
      </div>
  )
}

export default restoreEditingCursor