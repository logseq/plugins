import { NextPage } from 'next'
import { Description } from '@/components/Description'

const listeners: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="listeners"
          comment="
"
        />
      </div>
  )
}

export default listeners