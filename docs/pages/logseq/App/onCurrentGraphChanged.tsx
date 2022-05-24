import { NextPage } from 'next'
import { Description } from '@/components/Description'

const onCurrentGraphChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onCurrentGraphChanged"
          comment=""
        />
      </div>
  )
}

export default onCurrentGraphChanged