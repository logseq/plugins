import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getEditingCursorPosition: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getEditingCursorPosition"
         />

        <Description
          ns="Editor"
          name="getEditingCursorPosition"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getEditingCursorPosition"
       />
      </div>
  )
}

export default getEditingCursorPosition