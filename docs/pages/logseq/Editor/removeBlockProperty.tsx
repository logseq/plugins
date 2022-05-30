import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeBlockProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="removeBlockProperty"
         />

        <Description
          ns="Editor"
          name="removeBlockProperty"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="removeBlockProperty"
       />
      </div>
  )
}

export default removeBlockProperty