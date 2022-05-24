import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onPageHeadActionsSlotted: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onPageHeadActionsSlotted"
          comment=""
        />

       <Discuss
          ns="App"
          name="onPageHeadActionsSlotted"
       />
      </div>
  )
}

export default onPageHeadActionsSlotted