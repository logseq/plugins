import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const showMsg: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="showMsg"
         />

        <Description
          ns="App"
          name="showMsg"
          comment=""
        />

       <Discuss
          ns="App"
          name="showMsg"
       />
      </div>
  )
}

export default showMsg