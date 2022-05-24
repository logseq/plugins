import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onBlockRendererSlotted: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onBlockRendererSlotted"
          comment=""
        />

       <Discuss
          ns="App"
          name="onBlockRendererSlotted"
       />
      </div>
  )
}

export default onBlockRendererSlotted