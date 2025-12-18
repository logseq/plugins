import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getPageProperties: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getPageProperties"
         />

        <Description
          ns="Editor"
          name="getPageProperties"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getPageProperties"
       />
      </div>
  )
}

export default getPageProperties