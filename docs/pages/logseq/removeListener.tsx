import { NextPage } from 'next'
import { Description } from '@/components/Description'

const removeListener: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="removeListener"
          comment="
"
        />
      </div>
  )
}

export default removeListener