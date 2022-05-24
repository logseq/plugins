import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getEditingCursorPosition: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getEditingCursorPosition"
          comment=""
        />
      </div>
  )
}

export default getEditingCursorPosition