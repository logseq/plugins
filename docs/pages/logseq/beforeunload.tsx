import { NextPage } from 'next'
import { Description } from '@/components/Description'

const beforeunload: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="beforeunload"
          comment=""
        />
      </div>
  )
}

export default beforeunload