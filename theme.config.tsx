import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

function useHead() {
  const { asPath } = useRouter()
  const { frontMatter, title } = useConfig()
  const url = `https://theorderfivem.github.io${asPath}`
  const description = frontMatter.description || 'Documentation for Community Bridge - Universal Translation Layer for FiveM'

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="https://avatars.githubusercontent.com/u/192999457?s=32&v=4" type="image/png" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  )
}

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.1rem' }}>
      <img
        src="https://avatars.githubusercontent.com/u/192999457?s=200&v=4"
        alt="The Order"
        style={{ width: 28, height: 28, borderRadius: '50%' }}
      />
      Community Bridge
    </span>
  ),
  project: {
    link: 'https://github.com/TheOrderFivem/community_bridge',
  },
  chat: {
    link: 'https://discord.gg/MukwBuJjP7',
  },
  docsRepositoryBase: 'https://github.com/TheOrderFivem/community_bridge/blob/main/docs',
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} © Community Bridge - The Order Of The Sacred Framework
      </span>
    ),
  },
  head: useHead,
  color: {
    hue: 200,
    saturation: 100,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  banner: {
    key: 'community-bridge-release',
    content: (
      <a href="https://github.com/TheOrderFivem/community_bridge/releases" target="_blank">
        🎉 Community Bridge is available! Check out the latest release →
      </a>
    ),
  },
}

export default config
