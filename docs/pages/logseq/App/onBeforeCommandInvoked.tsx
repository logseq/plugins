import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onBeforeCommandInvoked: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="onBeforeCommandInvoked"
         />

        <Description
          ns="App"
          name="onBeforeCommandInvoked"
          comment=""
        />

       <Discuss
          ns="App"
          name="onBeforeCommandInvoked"
       />
      </div>
  )
}

export default onBeforeCommandInvoked