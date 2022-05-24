import { NextPage } from 'next'
import { Description } from '@/components/Description'

const createPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="createPage"
          comment=""
        />
      </div>
  )
}

export default createPage