import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getPageLinkedReferences: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getPageLinkedReferences"
          comment="
"
        />
      </div>
  )
}

export default getPageLinkedReferences