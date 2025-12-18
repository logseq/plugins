import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getTagObjects: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getTagObjects"
         />

        <Description
          ns="Editor"
          name="getTagObjects"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getTagObjects"
       />
      </div>
  )
}

export default getTagObjects