import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const insertAtEditingCursor: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="insertAtEditingCursor"
         />

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