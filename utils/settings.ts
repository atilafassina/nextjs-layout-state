export const PAGE_LINKS = [
  {
    name: 'index',
    description:
      'gets <code>state</code> from API and sets it to <code>MainLayout</code>',
    url: '/',
    code: 'https://github.com/atilafassina/nextjs-layout-state/blob/main/pages/index.tsx',
  },
  {
    name: 'stateless',
    description:
      'uses <code>DefaultLayout</code> and does not have <code>state</code>',
    url: '/stateless-page',
    code: 'https://github.com/atilafassina/nextjs-layout-state/blob/main/pages/stateless-page.tsx',
  },
  {
    name: 'pokemon',
    url: '/pokemon',
    description:
      'gets state from <code>/index</code> page through <code>MainLayout</code>',
    code: 'https://github.com/atilafassina/nextjs-layout-state/blob/main/pages/pokemon.tsx',
  },
]
