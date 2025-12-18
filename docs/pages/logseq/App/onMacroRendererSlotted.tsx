import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onMacroRendererSlotted: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="onMacroRendererSlotted"
         />

        <Description
          ns="App"
          name="onMacroRendererSlotted"
          comment=""
        />

       <Discuss
          ns="App"
          name="onMacroRendererSlotted"
       />
      </div>
  )
}

export default onMacroRendererSlotted