import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const appendBlockInPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="appendBlockInPage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="appendBlockInPage"
       />
      </div>
  )
}

export default appendBlockInPage