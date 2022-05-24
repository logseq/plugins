import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const showMsg: NextPage = () => {
  return (
      <div className="main-page-content">
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