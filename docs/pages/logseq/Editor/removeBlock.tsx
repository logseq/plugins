import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="removeBlock"
         />

        <Description
          ns="Editor"
          name="removeBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="removeBlock"
       />
      </div>
  )
}

export default removeBlock