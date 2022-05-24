import { NextPage } from 'next'
import { Description } from '@/components/Description'

const renamePage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="renamePage"
          comment=""
        />
      </div>
  )
}

export default renamePage