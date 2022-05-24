import { NextPage } from 'next'
import { Description } from '@/components/Description'

const closeMsg: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="UI"
          name="closeMsg"
          comment=""
        />
      </div>
  )
}

export default closeMsg