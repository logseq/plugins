import { NextPage } from 'next'
import { Description } from '@/components/Description'

const onThemeModeChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onThemeModeChanged"
          comment=""
        />
      </div>
  )
}

export default onThemeModeChanged