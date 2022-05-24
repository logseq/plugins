import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getNextSiblingBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getNextSiblingBlock"
          comment=""
        />
      </div>
  )
}

export default getNextSiblingBlock