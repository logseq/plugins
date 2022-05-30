import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeListener: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="removeListener"
         />

        <Description
          ns="."
          name="removeListener"
          comment="
"
        />

       <Discuss
          ns="."
          name="removeListener"
       />
      </div>
  )
}

export default removeListener