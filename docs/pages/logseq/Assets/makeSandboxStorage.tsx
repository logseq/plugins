import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const makeSandboxStorage: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Assets"
          name="makeSandboxStorage"
         />

        <Description
          ns="Assets"
          name="makeSandboxStorage"
          comment=""
        />

       <Discuss
          ns="Assets"
          name="makeSandboxStorage"
       />
      </div>
  )
}

export default makeSandboxStorage