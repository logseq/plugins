import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getEditingBlockContent: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getEditingBlockContent"
          comment=""
        />
      </div>
  )
}

export default getEditingBlockContent