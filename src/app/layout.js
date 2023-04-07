import Header from './components/Header'
import Navbar from './components/Navbar'
import Providers from './components/Providers'
import SearchBox from './components/SearchBox'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
       <Providers >
       <Header/>
      {/* NAVBAR */}
      <Navbar/>
      {/* sEARCHbOX */}
      <SearchBox/>
        {children}
       </Providers>

       </body>
    </html>
  )
}
