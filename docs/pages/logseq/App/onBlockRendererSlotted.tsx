import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onBlockRendererSlotted: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="onBlockRendererSlotted"
         />

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