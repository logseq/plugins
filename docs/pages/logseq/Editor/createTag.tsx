import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const createTag: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="createTag"
         />

        <Description
          ns="Editor"
          name="createTag"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="createTag"
       />
      </div>
  )
}

export default createTag