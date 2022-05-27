import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const emit: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="emit"
          comment="
"
        />

       <Discuss
          ns="."
          name="emit"
       />
      </div>
  )
}

export default emit