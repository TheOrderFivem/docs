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

      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  )
}

function useNextSeoProps() {
  const { asPath } = useRouter()
  const arr = asPath.replace(/[-_]/g, ' ').split('/')
  const category = (arr[1][0] !== '#' && arr[1]) || 'Bridge Docs'
  const rawTitle = arr[arr.length - 1]
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s'

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  }
}

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
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
  primaryHue: { dark: 200, light: 200 },
  primarySaturation: { dark: 100, light: 100 },
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
