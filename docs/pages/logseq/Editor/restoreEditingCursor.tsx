import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const restoreEditingCursor: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="restoreEditingCursor"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="restoreEditingCursor"
       />
      </div>
  )
}

export default restoreEditingCursor