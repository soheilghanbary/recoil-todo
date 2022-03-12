import { RecoilRoot } from 'recoil'
import GlobalStyles from 'styles/GlobalStyles'

const App = ({ Component, pageProps }) => (
  <RecoilRoot>
    <GlobalStyles />
    <Component {...pageProps} />
  </RecoilRoot>
)

export default App
