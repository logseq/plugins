import { NextPage } from 'next'
import { Description } from '@/components/Description'

const queryElementRect: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="queryElementRect"
          comment=""
        />
      </div>
  )
}

export default queryElementRect