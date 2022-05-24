import { NextPage } from 'next'
import { Description } from '@/components/Description'

const appendBlockInPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="appendBlockInPage"
          comment=""
        />
      </div>
  )
}

export default appendBlockInPage