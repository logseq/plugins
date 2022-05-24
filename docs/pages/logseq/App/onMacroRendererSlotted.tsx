import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onMacroRendererSlotted: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onMacroRendererSlotted"
          comment="provide ui slot to block &#x60;renderer&#x60; macro for &#x60;{{renderer arg1, arg2}}&#x60;"
        />

       <Discuss
          ns="App"
          name="onMacroRendererSlotted"
       />
      </div>
  )
}

export default onMacroRendererSlotted