import NavBar from '@/components/NavBar'
import './globals.css'




export const metadata = {
  title: 'ERP MATRIX',
  description: 'ERP MATRIX',
}

export default function RootLayout({ children }) {
  return (
    <html >
      <body >
   
        {children}</body>
    </html>
  )
}
