import { NextPage } from 'next'
import { Description } from '@/components/Description'

const listenerCount: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="listenerCount"
          comment="
"
        />
      </div>
  )
}

export default listenerCount