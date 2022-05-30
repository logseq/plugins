import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const restoreEditingCursor: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="restoreEditingCursor"
         />

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