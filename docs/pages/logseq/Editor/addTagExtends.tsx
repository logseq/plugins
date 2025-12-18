import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const addTagExtends: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="addTagExtends"
         />

        <Description
          ns="Editor"
          name="addTagExtends"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="addTagExtends"
       />
      </div>
  )
}

export default addTagExtends