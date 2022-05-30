import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const listeners: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="listeners"
          comment="
"
        />

       <Discuss
          ns="."
          name="listeners"
       />
      </div>
  )
}

export default listeners