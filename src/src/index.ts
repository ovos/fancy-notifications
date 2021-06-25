import { registerPlugin } from '@capacitor/core';

import type { FancyNotificationsPlugin } from './definitions';

const FancyNotifications = registerPlugin<FancyNotificationsPlugin>('FancyNotifications', {
  web: () => import('./web').then(m => new m.FancyNotificationsPluginWeb()),
});

export * from './definitions';
export { FancyNotifications };