import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const editBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="editBlock"
         />

        <Description
          ns="Editor"
          name="editBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="editBlock"
       />
      </div>
  )
}

export default editBlock