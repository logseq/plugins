import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getEditingCursorPosition: NextPage = () => {
  return (
      <div className="main-page-content">
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