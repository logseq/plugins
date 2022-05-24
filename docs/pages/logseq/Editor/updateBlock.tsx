import { NextPage } from 'next'
import { Description } from '@/components/Description'

const updateBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="updateBlock"
          comment=""
        />
      </div>
  )
}

export default updateBlock