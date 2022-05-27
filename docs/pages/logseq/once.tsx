import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const once: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="once"
          comment="
"
        />

       <Discuss
          ns="."
          name="once"
       />
      </div>
  )
}

export default once