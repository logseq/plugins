import { NextPage } from 'next'
import { Description } from '@/components/Description'

const showMsg: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="showMsg"
          comment=""
        />
      </div>
  )
}

export default showMsg