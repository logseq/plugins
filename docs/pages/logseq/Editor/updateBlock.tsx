import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const updateBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="updateBlock"
         />

        <Description
          ns="Editor"
          name="updateBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="updateBlock"
       />
      </div>
  )
}

export default updateBlock