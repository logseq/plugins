import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const ready: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="ready"
          comment="
"
        />

       <Discuss
          ns="."
          name="ready"
       />
      </div>
  )
}

export default ready