import { NextPage } from 'next'
import { Description } from '@/components/Description'

const insertAtEditingCursor: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="insertAtEditingCursor"
          comment=""
        />
      </div>
  )
}

export default insertAtEditingCursor