import { NextPage } from 'next'
import { Description } from '@/components/Description'

const editBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="editBlock"
          comment=""
        />
      </div>
  )
}

export default editBlock