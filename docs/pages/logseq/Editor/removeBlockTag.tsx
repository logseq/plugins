import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeBlockTag: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="removeBlockTag"
         />

        <Description
          ns="Editor"
          name="removeBlockTag"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="removeBlockTag"
       />
      </div>
  )
}

export default removeBlockTag