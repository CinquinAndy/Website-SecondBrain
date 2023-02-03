import '@/styles/tailwind.css'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head>
            <title>Mon second cerveau</title>
            <meta
                name="description"
                content="J'ai utilisé plusieurs techniques d'organisation de vie et de prises de notes pour gérer mon travail et mes projets.
                J'ai décidé de les rassembler dans un seul outil. Et de vous donner la possibilité d'y accéder !"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;family=Noto+Serif+Display:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
                rel="stylesheet"/>
        </head>
        <body className={"bg-[#0b070f]"}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
