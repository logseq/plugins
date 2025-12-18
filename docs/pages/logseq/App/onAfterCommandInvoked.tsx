import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onAfterCommandInvoked: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="onAfterCommandInvoked"
         />

        <Description
          ns="App"
          name="onAfterCommandInvoked"
          comment=""
        />

       <Discuss
          ns="App"
          name="onAfterCommandInvoked"
       />
      </div>
  )
}

export default onAfterCommandInvoked