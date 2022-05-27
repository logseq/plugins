import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getAllPages: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getAllPages"
         />

        <Description
          ns="Editor"
          name="getAllPages"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getAllPages"
       />
      </div>
  )
}

export default getAllPages