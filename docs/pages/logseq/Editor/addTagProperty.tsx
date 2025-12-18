import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const addTagProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="addTagProperty"
         />

        <Description
          ns="Editor"
          name="addTagProperty"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="addTagProperty"
       />
      </div>
  )
}

export default addTagProperty