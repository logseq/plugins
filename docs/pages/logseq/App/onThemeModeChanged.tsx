import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onThemeModeChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="onThemeModeChanged"
         />

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