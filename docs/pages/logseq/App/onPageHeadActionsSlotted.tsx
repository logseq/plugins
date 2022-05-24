import { NextPage } from 'next'
import { Description } from '@/components/Description'

const onPageHeadActionsSlotted: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onPageHeadActionsSlotted"
          comment=""
        />
      </div>
  )
}

export default onPageHeadActionsSlotted