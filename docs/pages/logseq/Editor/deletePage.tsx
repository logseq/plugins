import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const deletePage: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="deletePage"
         />

        <Description
          ns="Editor"
          name="deletePage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="deletePage"
       />
      </div>
  )
}

export default deletePage