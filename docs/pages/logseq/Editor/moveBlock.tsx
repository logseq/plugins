import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const moveBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="moveBlock"
         />

        <Description
          ns="Editor"
          name="moveBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="moveBlock"
       />
      </div>
  )
}

export default moveBlock