import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const insertAtEditingCursor: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="insertAtEditingCursor"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="insertAtEditingCursor"
       />
      </div>
  )
}

export default insertAtEditingCursor