import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeTagProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="removeTagProperty"
         />

        <Description
          ns="Editor"
          name="removeTagProperty"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="removeTagProperty"
       />
      </div>
  )
}

export default removeTagProperty