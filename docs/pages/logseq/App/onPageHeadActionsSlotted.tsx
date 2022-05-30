import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onPageHeadActionsSlotted: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="onPageHeadActionsSlotted"
         />

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