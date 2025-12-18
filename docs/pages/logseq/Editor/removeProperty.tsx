import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="removeProperty"
         />

        <Description
          ns="Editor"
          name="removeProperty"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="removeProperty"
       />
      </div>
  )
}

export default removeProperty