import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeAllListeners: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="removeAllListeners"
          comment="
"
        />

       <Discuss
          ns="."
          name="removeAllListeners"
       />
      </div>
  )
}

export default removeAllListeners