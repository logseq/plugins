import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const openInRightSidebar: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="openInRightSidebar"
         />

        <Description
          ns="Editor"
          name="openInRightSidebar"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="openInRightSidebar"
       />
      </div>
  )
}

export default openInRightSidebar