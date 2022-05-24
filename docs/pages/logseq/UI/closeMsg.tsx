import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const closeMsg: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="UI"
          name="closeMsg"
          comment=""
        />

       <Discuss
          ns="UI"
          name="closeMsg"
       />
      </div>
  )
}

export default closeMsg