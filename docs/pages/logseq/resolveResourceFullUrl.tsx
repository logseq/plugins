import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const resolveResourceFullUrl: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="resolveResourceFullUrl"
          comment=""
        />

       <Discuss
          ns="."
          name="resolveResourceFullUrl"
       />
      </div>
  )
}

export default resolveResourceFullUrl