import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getCurrentBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getCurrentBlock"
          comment=""
        />
      </div>
  )
}

export default getCurrentBlock