import { NextPage } from 'next'
import { Description } from '@/components/Description'

const removeBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="removeBlock"
          comment=""
        />
      </div>
  )
}

export default removeBlock