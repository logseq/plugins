import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const listenerCount: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="listenerCount"
          comment="
"
        />

       <Discuss
          ns="."
          name="listenerCount"
       />
      </div>
  )
}

export default listenerCount