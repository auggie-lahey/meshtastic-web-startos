import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'meshtastic-web',
  title: 'Meshtastic Web',
  license: 'mit',
  wrapperRepo: 'https://github.com/auggie-lahey/meshtastic-web-startos',
  upstreamRepo: 'https://github.com/meshtastic/web',
  supportSite: 'https://docs.start9.com/', //todo
  marketingSite: 'https://start9.com/', //todo
  donationUrl: 'https://donate.start9.com/', //todo
  description: {
    short: 'Mestastic Web Client',
    long: 'Meshtastic Web is a Meshtastic client that runs directly in your browser. ',
  },
  assets: [],
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerTag: 'ghcr.io/meshtastic/web',
      },
    },
  },
  hardwareRequirements: {},
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
