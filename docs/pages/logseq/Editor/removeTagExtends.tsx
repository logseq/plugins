import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeTagExtends: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="removeTagExtends"
         />

        <Description
          ns="Editor"
          name="removeTagExtends"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="removeTagExtends"
       />
      </div>
  )
}

export default removeTagExtends