import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getAllTags: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getAllTags"
         />

        <Description
          ns="Editor"
          name="getAllTags"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getAllTags"
       />
      </div>
  )
}

export default getAllTags