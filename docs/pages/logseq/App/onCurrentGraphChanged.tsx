import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onCurrentGraphChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="onCurrentGraphChanged"
         />

        <Description
          ns="App"
          name="onCurrentGraphChanged"
          comment=""
        />

       <Discuss
          ns="App"
          name="onCurrentGraphChanged"
       />
      </div>
  )
}

export default onCurrentGraphChanged