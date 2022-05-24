import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onThemeModeChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onThemeModeChanged"
          comment=""
        />

       <Discuss
          ns="App"
          name="onThemeModeChanged"
       />
      </div>
  )
}

export default onThemeModeChanged