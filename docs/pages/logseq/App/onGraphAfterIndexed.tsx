import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onGraphAfterIndexed: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="onGraphAfterIndexed"
         />

        <Description
          ns="App"
          name="onGraphAfterIndexed"
          comment=""
        />

       <Discuss
          ns="App"
          name="onGraphAfterIndexed"
       />
      </div>
  )
}

export default onGraphAfterIndexed