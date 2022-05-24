import { NextPage } from 'next'
import { Description } from '@/components/Description'

const moveBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="moveBlock"
          comment=""
        />
      </div>
  )
}

export default moveBlock