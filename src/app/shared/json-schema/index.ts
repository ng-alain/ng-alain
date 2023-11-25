import type { SFWidgetProvideConfig } from '@delon/form';

import { TestWidget } from './test/test.widget';

export const SF_WIDGETS: SFWidgetProvideConfig[] = [{ KEY: TestWidget.KEY, type: TestWidget }];
