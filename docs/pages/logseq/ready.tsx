import { NextPage } from 'next'
import { Description } from '@/components/Description'

const ready: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="ready"
          comment="
"
        />
      </div>
  )
}

export default ready