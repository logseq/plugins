import { NextPage } from 'next'
import { Description } from '@/components/Description'

const eventNames: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="eventNames"
          comment="
"
        />
      </div>
  )
}

export default eventNames