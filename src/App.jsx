import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { countAtom } from './store/atoms/countAtom'

function App() {
  return (
    <>
      <RecoilRoot>
        <Count/> 
      </RecoilRoot>
    
    </>
  )
}

function Count() {
  console.log("re-rendered!")
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log('Buttons re-rendered!!')
  return <div>
  <button onClick={() => {
      setCount(count => count+1)
  }}>INCREASE COUNT</button>
  <button onClick={() => {
      setCount(count => count-1)
  }}>DECREASE COUNT</button>
  </div>
    
}


export default App
