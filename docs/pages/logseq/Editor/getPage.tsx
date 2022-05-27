import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getPage"
         />

        <Description
          ns="Editor"
          name="getPage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getPage"
       />
      </div>
  )
}

export default getPage