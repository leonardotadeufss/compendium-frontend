import Head from 'next/head'
import { Html } from 'next/document'

export default function Layout({ children, pageTitle, ...props }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="robots" content="follow, index" />
                <meta name="description" content='Repositório de campanhas de RPG em Português-BR' />
                <title>{pageTitle}</title>
            </Head>
        </>
    )
}

