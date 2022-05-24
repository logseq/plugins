import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const beforeunload: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="beforeunload"
          comment=""
        />

       <Discuss
          ns="."
          name="beforeunload"
       />
      </div>
  )
}

export default beforeunload