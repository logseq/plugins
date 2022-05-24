import { NextPage } from 'next'
import { Description } from '@/components/Description'

const resolveResourceFullUrl: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="resolveResourceFullUrl"
          comment=""
        />
      </div>
  )
}

export default resolveResourceFullUrl