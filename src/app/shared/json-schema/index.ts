import type { SFWidgetProvideConfig } from '@delon/form';
// import { withCascaderWidget } from '@delon/form/widgets/cascader';

import { TestWidget } from './test/test.widget';

export const SF_WIDGETS: SFWidgetProvideConfig[] = [
  { KEY: TestWidget.KEY, type: TestWidget }
  // Non-built-in widget registration method
  // withCascaderWidget()
];
