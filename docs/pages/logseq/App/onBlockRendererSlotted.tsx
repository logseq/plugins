import { NextPage } from 'next'
import { Description } from '@/components/Description'

const onBlockRendererSlotted: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onBlockRendererSlotted"
          comment=""
        />
      </div>
  )
}

export default onBlockRendererSlotted