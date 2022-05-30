import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeAllListeners: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="removeAllListeners"
         />

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