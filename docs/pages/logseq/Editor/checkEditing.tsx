import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const checkEditing: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="checkEditing"
         />

        <Description
          ns="Editor"
          name="checkEditing"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="checkEditing"
       />
      </div>
  )
}

export default checkEditing