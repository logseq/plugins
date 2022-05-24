import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getPreviousSiblingBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getPreviousSiblingBlock"
          comment=""
        />
      </div>
  )
}

export default getPreviousSiblingBlock