import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getAllProperties: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getAllProperties"
         />

        <Description
          ns="Editor"
          name="getAllProperties"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getAllProperties"
       />
      </div>
  )
}

export default getAllProperties