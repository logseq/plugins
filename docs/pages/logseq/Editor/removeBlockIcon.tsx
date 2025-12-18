import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeBlockIcon: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="removeBlockIcon"
         />

        <Description
          ns="Editor"
          name="removeBlockIcon"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="removeBlockIcon"
       />
      </div>
  )
}

export default removeBlockIcon