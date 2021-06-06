import path from 'path';
import os from 'os';

export interface Config {
  app: {
    name: string;
    version: string;
    storagePath: string;
  };
  updates: {
    url: string;
  };
  intl: {
    defaultLocale: string;
  };
  images: {
    recentProjectThumbnail: {
      width: number;
      height: number;
    };
  };
  welcomeWindow: {
    recentProjectsLimit: number;
  };
}

let storagePath = '';

switch (process.platform) {
  case 'darwin':
    storagePath = path.join(os.homedir(), 'Library', 'Application Support', 'Glook');
    break;
  case 'win32':
    storagePath = path.join(os.homedir(), 'AppData', 'Roaming', 'Alex Seifert', 'Glook');
    break;
  default:
    storagePath = path.join(os.homedir(), '.glook');
    break;
}

const config: Config = {
  app: {
    name: 'Glook',
    version: '1.0.0-beta.0',
    storagePath,
  },
  updates: {
    url: 'https://api.github.com/repos/eiskalteschatten/Glook/releases',
  },
  intl: {
    defaultLocale: 'en',
  },
  images: {
    recentProjectThumbnail: {
      width: 200,
      height: 200,
    },
  },
  welcomeWindow: {
    recentProjectsLimit: 5,
  },
};

export default config;
