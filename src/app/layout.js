import { League_Spartan } from 'next/font/google';
import AuthProvider from "../app/components/AuthProvider";
import './assets/css/materialdesignicons.min.css';
import './assets/css/tailwind.css';
import './globals.css';

const league_Spartan = League_Spartan({ 
  subsets: ['latin'] ,
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-league_Spartan",
})

export const metadata = {
  title: 'Electrify EV Market',
  description: 'Greate place to find your dream eVehicle',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <AuthProvider>
      <body className={`${league_Spartan.variable} font-body text-base text-black dark:text-white dark:bg-slate-900`}>{children}</body>
      </AuthProvider>
    </html>
  )
}
