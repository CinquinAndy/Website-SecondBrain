import {Be_Vietnam_Pro, Noto_Serif_Display} from '@next/font/google'

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
        </head>
        <Script
				async
				src="https://umami.wadefade.fr/script.js"
				strategy={'afterInteractive'}
				data-website-id="3fc369c1-7f05-47e4-baaa-85eb44808024"
			/>
        <body className={"bg-[#0b070f]"}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
