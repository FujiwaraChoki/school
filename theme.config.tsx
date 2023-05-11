import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>School Docs</span>,
  project: {
    link: 'https://github.com/FujiwaraChoki/school/',
  },
  chat: {
    link: 'https://discord.com',
  },
  search: {
    placeholder: '🔍Schulinhalte durchsuchen',
  },
  docsRepositoryBase: 'https://github.com/FujiwaraChoki/school/tree/main',
  footer: {
    text: 'School Docs - © 2023 Sami Hindi',
  },
}

export default config
