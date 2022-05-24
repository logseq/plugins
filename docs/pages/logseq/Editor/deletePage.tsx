import { NextPage } from 'next'
import { Description } from '@/components/Description'

const deletePage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="deletePage"
          comment=""
        />
      </div>
  )
}

export default deletePage