import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onCurrentGraphChanged: NextPage = () => {
  return (
      <div className="main-page-content">
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