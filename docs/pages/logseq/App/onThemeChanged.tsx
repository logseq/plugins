import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onThemeChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="onThemeChanged"
         />

        <Description
          ns="App"
          name="onThemeChanged"
          comment=""
        />

       <Discuss
          ns="App"
          name="onThemeChanged"
       />
      </div>
  )
}

export default onThemeChanged