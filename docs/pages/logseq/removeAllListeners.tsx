import { NextPage } from 'next'
import { Description } from '@/components/Description'

const removeAllListeners: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="removeAllListeners"
          comment="
"
        />
      </div>
  )
}

export default removeAllListeners