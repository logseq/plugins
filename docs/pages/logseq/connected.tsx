import { NextPage } from 'next'
import { Description } from '@/components/Description'

const connected: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="connected"
          comment="Connection status with the main app"
        />
      </div>
  )
}

export default connected