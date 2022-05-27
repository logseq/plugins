import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const on: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="on"
          comment="
"
        />

       <Discuss
          ns="."
          name="on"
       />
      </div>
  )
}

export default on