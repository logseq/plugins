import { NextPage } from 'next'
import { Description } from '@/components/Description'

const isMainUIVisible: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="isMainUIVisible"
          comment=""
        />
      </div>
  )
}

export default isMainUIVisible