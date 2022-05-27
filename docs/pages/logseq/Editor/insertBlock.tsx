import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const insertBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="insertBlock"
         />

        <Description
          ns="Editor"
          name="insertBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="insertBlock"
       />
      </div>
  )
}

export default insertBlock