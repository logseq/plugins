import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const connected: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="connected"
          comment="Connection status with the main app"
        />

       <Discuss
          ns="."
          name="connected"
       />
      </div>
  )
}

export default connected