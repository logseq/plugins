import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const renamePage: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="renamePage"
         />

        <Description
          ns="Editor"
          name="renamePage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="renamePage"
       />
      </div>
  )
}

export default renamePage