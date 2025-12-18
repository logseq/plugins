import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getPageLinkedReferences: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getPageLinkedReferences"
         />

        <Description
          ns="Editor"
          name="getPageLinkedReferences"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getPageLinkedReferences"
       />
      </div>
  )
}

export default getPageLinkedReferences