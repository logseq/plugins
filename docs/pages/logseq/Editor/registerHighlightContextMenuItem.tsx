import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerHighlightContextMenuItem: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="registerHighlightContextMenuItem"
         />

        <Description
          ns="Editor"
          name="registerHighlightContextMenuItem"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="registerHighlightContextMenuItem"
       />
      </div>
  )
}

export default registerHighlightContextMenuItem